'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Check login status on mount
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    router.push('/'); // redirect to homepage
  };

  const navMenu = () => (
    <>
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <Link href={'/products'}>Products</Link>
      </li>
      {isLoggedIn && (
        <li>
          <Link href={'/add-products'}>Add Product</Link>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-4 fixed top-0 left-0 w-full z-50">
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

              {/* Mobile Login/Logout buttons */}
              <div className="flex flex-col gap-2 mt-4">
                {!isLoggedIn ? (
                  <Link
                    href={'/login'}
                    className="btn bg-white text-black w-full text-center"
                  >
                    Login
                  </Link>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="btn bg-red-600 text-white w-full"
                  >
                    Logout
                  </button>
                )}
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

        {/* Navbar End - Desktop Login/Logout */}
        <div className="navbar-end hidden lg:flex gap-2">
          {!isLoggedIn ? (
            <Link
              href={'/login'}
              className="btn bg-white text-black border border-gray-300"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="btn bg-red-600 text-white"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* নিচে space দিতে হবে যাতে content navbar এর নিচ থেকে শুরু হয় */}
      <div className="h-16"></div>
    </div>
  );
}
