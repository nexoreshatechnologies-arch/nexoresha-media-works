import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { connectToDatabase } from '@/lib/mongodb';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
      isMock
    } = body;

    const { db } = await connectToDatabase();

    // Check if the order exists
    const order = await db.collection('orders').findOne({ razorpayOrderId });
    if (!order) {
      return NextResponse.json({ error: 'Order not found in database' }, { status: 404 });
    }

    if (isMock || order.isMock || razorpayOrderId.startsWith('rzp_mock_')) {
      // Mock payment verification
      await db.collection('orders').updateOne(
        { razorpayOrderId },
        {
          $set: {
            status: 'completed',
            razorpayPaymentId: razorpayPaymentId || `pay_mock_${Math.random().toString(36).substring(2, 11)}`,
            verifiedAt: new Date().toISOString()
          }
        }
      );
      return NextResponse.json({ success: true, message: 'Mock payment verified successfully' });
    }

    // Real Razorpay signature verification
    const key_secret = process.env.RAZORPAY_KEY_SECRET;
    if (!key_secret) {
      return NextResponse.json({ error: 'Razorpay secret key is missing' }, { status: 500 });
    }

    const text = `${razorpayOrderId}|${razorpayPaymentId}`;
    const generated_signature = crypto
      .createHmac('sha256', key_secret)
      .update(text)
      .digest('hex');

    const isValid = generated_signature === razorpaySignature;

    if (isValid) {
      await db.collection('orders').updateOne(
        { razorpayOrderId },
        {
          $set: {
            status: 'completed',
            razorpayPaymentId,
            razorpaySignature,
            verifiedAt: new Date().toISOString()
          }
        }
      );
      return NextResponse.json({ success: true, message: 'Payment verified and captured' });
    } else {
      await db.collection('orders').updateOne(
        { razorpayOrderId },
        { $set: { status: 'failed', failedAt: new Date().toISOString() } }
      );
      return NextResponse.json({ error: 'Invalid signature, payment verification failed' }, { status: 400 });
    }

  } catch (error: any) {
    console.error('Payment verification API error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
