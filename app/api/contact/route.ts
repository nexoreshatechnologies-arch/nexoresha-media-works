import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, businessName, budget, services, message } = body;

    // Server-side validation
    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!businessName || !businessName.trim()) {
      return NextResponse.json({ error: 'Business name is required' }, { status: 400 });
    }
    if (!budget) {
      return NextResponse.json({ error: 'Budget selection is required' }, { status: 400 });
    }
    if (!services || !Array.isArray(services) || services.length === 0) {
      return NextResponse.json({ error: 'Select at least one service' }, { status: 400 });
    }

    const { db } = await connectToDatabase();
    const newContact = {
      name: name.trim(),
      businessName: businessName.trim(),
      budget,
      services,
      message: message ? message.trim() : '',
      createdAt: new Date().toISOString(),
    };

    await db.collection('contacts').insertOne(newContact);

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been successfully registered. Our Director will contact you within 24 hours.'
    });

  } catch (error: any) {
    console.error('Contact form submission API error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
