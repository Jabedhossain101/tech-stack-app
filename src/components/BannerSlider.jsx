"use client"; // Client component because slider needs state

import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: 'Welcome to TechStack',
    description: 'Explore amazing products and services',
    image: 'https://i.ibb.co.com/LhQhmLtK/image.png',
  },
  {
    id: 2,
    title: 'Discover New Trends',
    description: 'Stay updated with the latest technologies',
    image: 'https://i.ibb.co.com/W4HSPW5N/image.png',
  },
  {
    id: 3,
    title: 'Join Our Community',
    description: 'Connect with experts and grow together',
    image: 'https://i.ibb.co.com/7Njx2782/image.png',
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-10 text-white bg-black bg-opacity-50 p-4 rounded">
            <h2 className="text-3xl font-bold">{slide.title}</h2>
            <p className="mt-2">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Slider navigation */}
      <div className="absolute bottom-5 right-5 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}
