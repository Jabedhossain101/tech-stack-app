import React from 'react';

export default function Products() {
  const data = [
    {
      id: 1,
      name: 'Sony WH-1000XM5 Headphones',
      description:
        'Industry-leading noise cancelling over-ear headphones with exceptional sound quality.',
      price: 999,
      category: 'Headphones',
      image: 'https://i.ibb.co/N6LKchjx/image.png',
    },
    {
      id: 2,
      name: 'Logitech MX Keys Keyboard',
      description:
        'Advanced wireless keyboard with smart illumination and perfect typing experience.',
      price: 1299,
      category: 'Keyboard',
      image: 'https://i.ibb.co/HTjB9C8C/image.png',
    },
    {
      id: 3,
      name: 'Apple MacBook Air M2',
      description:
        'Lightweight laptop with M2 chip, perfect for work and multimedia.',
      price: 99999,
      category: 'Laptop',
      image: 'https://i.ibb.co/7d1dWKjs/image.png',
    },
    {
      id: 4,
      name: 'Samsung 32-inch Curved Monitor',
      description:
        'High resolution curved monitor with vivid colors and smooth performance.',
      price: 279,
      category: 'Monitor',
      image: 'https://i.ibb.co/ymwqR1wB/image.png',
    },
    {
      id: 5,
      name: 'Logitech MX Master 3 Mouse',
      description:
        'Ergonomic wireless mouse with advanced tracking and multi-device support.',
      price: 899,
      category: 'Mouse',
      image: 'https://i.ibb.co/XkJCDbMP/image.png',
    },
    {
      id: 6,
      name: 'Anker PowerCore 26800 Portable Charger',
      description:
        'High capacity portable charger for phones, tablets, and other USB devices.',
      price: 2000,
      category: 'Power Bank',
      image: 'https://i.ibb.co/n8sRpzPt/image.png',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
      {data.map(product => (
        <div
          key={product.id}
          className="border rounded-lg shadow-lg p-4 bg-white flex flex-col"
        >
          <img
            src={product.image}
            alt={product.name}
            className="  w-full h-48 object-cover rounded-md mb-4"
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
