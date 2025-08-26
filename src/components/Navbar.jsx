import Link from 'next/link';
import React from 'react';

export default function Navbar() {

  const navMenu = () => {
    return (
      <>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/products"}>Products</Link>
        </li>
        <li>
          <Link href={"/add-products"}>Add product</Link>
        </li>
       
        
        
      </>
    );
  }

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navMenu()}
              <div className="flex flex-col gap-2 mt-4">
                <Link href={'/login'} className="btn bg-white text-black">
                  Login
                </Link>
                <Link href="/register" className="btn bg-blue-600 text-white">
                  Register
                </Link>
              </div>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">TechStack</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu()}</ul>
        </div>
        <div className="navbar-end">
          <Link href={'/login'} className="btn bg-white text-black">
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
