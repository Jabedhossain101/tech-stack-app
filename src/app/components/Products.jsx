import React from 'react';
import { dbConnect } from '@/lib/dbConnect'; // named import

export default async function Products() {
  const { db } = await dbConnect();
  const productCollection = db.collection('products');
  const products = await productCollection.find({}).toArray();
  console.log(products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
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
          <p className="font-semibold mt-4 text-blue-600">${product.price}</p>
        </div>
      ))}
    </div>
  );
}
