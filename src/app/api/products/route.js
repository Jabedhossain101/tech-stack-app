import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/dbConnect';

export async function POST(req) {
  try {
    const body = await req.json();
    const { db } = await dbConnect();
    const productCollection = db.collection('products');

    const result = await productCollection.insertOne(body);

    return NextResponse.json({ success: true, productId: result.insertedId });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
