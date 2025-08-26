'use client'; // Client component required

import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  const navMenu = () => (
    <>
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <Link href={'/products'}>Products</Link>
      </li>
      <li>
        <Link href={'/add-products'}>Add Product</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {navMenu()}
              <div className="flex flex-col gap-2 mt-4">
                <Link
                  href={'/login'}
                  className="btn bg-white text-black w-full text-center"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="btn bg-blue-600 text-white w-full text-center"
                >
                  Register
                </Link>
              </div>
            </ul>
          </div>

          {/* Brand / Logo */}
          <Link href={'/'} className="btn btn-ghost text-xl">
            TechStack
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu()}</ul>
        </div>

        {/* Navbar End - Desktop Login/Register */}
        <div className="navbar-end hidden lg:flex gap-2">
          <Link
            href={'/login'}
            className="btn bg-white text-black border border-gray-300"
          >
            Login
          </Link>
          <Link href="/register" className="btn bg-blue-600 text-white">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
