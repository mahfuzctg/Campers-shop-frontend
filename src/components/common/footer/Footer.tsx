// src/components/footer/Footer.tsx

import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 left-0 w-full bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-between">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="https://via.placeholder.com/150x50?text=Campers+Shop" // Replace with your logo URL
            alt="Campers Shop Logo"
            className="h-12"
          />
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/products" className="hover:text-gray-400">
            Products
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About Us
          </Link>
          <Link to="/cart" className="hover:text-gray-400">
            Cart
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p>
            &copy; {new Date().getFullYear()} Campers Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
