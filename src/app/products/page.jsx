import React from 'react';
import { dbConnect } from '@/lib/dbConnect';
import Link from 'next/link';

export default async function ProductsPage() {
  const { db } = await dbConnect();
  const productCollection = db.collection('products');
  const products = await productCollection.find({}).toArray();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div
            key={product._id.toString()}
            className="border rounded-lg shadow-lg p-4 bg-white flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="font-bold text-lg mb-2 text-gray-800">
              {product.name}
            </h2>
            <p className="text-gray-600 flex-1">{product.description}</p>
            <p className="font-semibold mt-2 text-blue-600">${product.price}</p>

            {/* View Details button */}
            <Link
              href={`/products/${product._id.toString()}`}
              className="mt-4 inline-flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
