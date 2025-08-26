import React from 'react';
import { dbConnect } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Link from 'next/link';

export default async function ProductDetails(props) {
  // await params before using
  const { params } = await props;
  const { id } = params;

  const { db } = await dbConnect();
  const productCollection = db.collection('products');
  const product = await productCollection.findOne({ _id: new ObjectId(id) });

  if (!product) {
    return (
      <div className="p-6 text-center text-red-500 text-xl font-semibold">
        Product not found
      </div>
    );
  }

  const category = product.category || 'General';
  const sku = product.sku || `SKU-${product._id.toString().slice(-5)}`;
  const rating = product.rating || 4.5;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Link
        href="/products"
        className="text-blue-600 underline mb-6 inline-block"
      >
        ← Back to Products
      </Link>

      <div className="border rounded-lg shadow-lg bg-white p-6 flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        {/* Details */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>

          <div className="flex items-center gap-4">
            <p className="text-xl font-semibold text-blue-600">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500">Category: {category}</p>
          
            <p className="text-sm text-yellow-500">⭐ {rating}</p>
          </div>

          <div className="flex items-center text-black gap-2 mt-2">
            <span>Quantity:</span>
            <input
              type="number"
              min={1}
              defaultValue={1}
              className="w-20 border rounded px-2 py-1"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
