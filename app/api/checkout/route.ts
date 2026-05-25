import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { connectToDatabase } from '@/lib/mongodb';

// Instantiate Razorpay client with fallback mock values
const key_id = process.env.RAZORPAY_KEY_ID || '';
const key_secret = process.env.RAZORPAY_KEY_SECRET || '';

const razorpay = key_id && key_secret
  ? new Razorpay({ key_id, key_secret })
  : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { items, couponCode, discountPercent = 0 } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    // Calculate subtotal
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = Math.round((subtotal * discountPercent) / 100);
    const afterDiscount = subtotal - discountAmount;
    const gstAmount = Math.round(afterDiscount * 0.18);
    const totalAmount = afterDiscount + gstAmount; // Total in INR

    const orderId = `order_${Math.random().toString(36).substring(2, 11)}`;

    let razorpayOrderId = '';
    let isMock = true;

    if (razorpay) {
      try {
        // Razorpay expects amount in paise (1 INR = 100 paise)
        const options = {
          amount: totalAmount * 100, 
          currency: 'INR',
          receipt: orderId,
        };
        const order = await razorpay.orders.create(options);
        razorpayOrderId = order.id;
        isMock = false;
      } catch (err: any) {
        console.error('Razorpay order creation failed, falling back to mock:', err.message);
        razorpayOrderId = `rzp_mock_${orderId}`;
      }
    } else {
      razorpayOrderId = `rzp_mock_${orderId}`;
    }

    // Connect to database and insert order record
    const { db } = await connectToDatabase();
    const newOrder = {
      orderId,
      razorpayOrderId,
      items,
      subtotal,
      discountPercent,
      discountAmount,
      gstAmount,
      totalAmount,
      couponCode: couponCode || null,
      status: 'pending',
      isMock,
      createdAt: new Date().toISOString(),
    };

    await db.collection('orders').insertOne(newOrder);

    return NextResponse.json({
      success: true,
      orderId,
      razorpayOrderId,
      amount: totalAmount,
      currency: 'INR',
      isMock,
      keyId: key_id || 'rzp_test_mockKeyId123',
    });

  } catch (error: any) {
    console.error('Checkout API error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
