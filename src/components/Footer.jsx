import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">About Us</h2>
          <p className="text-gray-400 text-sm">
            We are a tech store providing the best electronics, gadgets, and
            accessories to make your life smarter.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Contact Info</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>📍 123 Tech Street, Dhaka, Bangladesh</li>
            <li>📧 info@techstore.com</li>
            <li>📞 +880 1234 567 890</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-white transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 text-center py-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} TechStore. All rights reserved.
      </div>
    </footer>
  );
}
