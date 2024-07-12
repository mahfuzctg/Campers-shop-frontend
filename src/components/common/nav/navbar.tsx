import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Campers Shop</span>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive("/") ? "bg-gray-600" : "text-white hover:bg-gray-700"
            }`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive("/products")
                ? "bg-gray-600"
                : "text-white hover:bg-gray-700"
            }`}
          >
            Products
          </Link>
          <Link
            to="/product-management"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive("/product-management")
                ? "bg-gray-600"
                : "text-white hover:bg-gray-700"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            ProductsManagement
          </Link>
          <Link
            to="/about-us"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive("/about-us")
                ? "bg-gray-600"
                : "text-white hover:bg-gray-700"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/cart"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive("/cart") ? "bg-gray-600" : "text-white hover:bg-gray-700"
            }`}
          >
            Cart <FaShoppingCart className="inline ml-1" />
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="bg-gray-700 text-white p-1 rounded-md"
            onClick={toggleMenu}
          >
            Menu
          </button>
        </div>
      </div>
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } flex flex-col space-y-2 mt-2 bg-gray-800 p-4`}
      >
        <Link
          to="/"
          className={`px-3 py-2 rounded-md text-sm font-medium ${
            isActive("/") ? "bg-gray-600" : "text-white hover:bg-gray-700"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/products"
          className={`px-3 py-2 rounded-md text-sm font-medium ${
            isActive("/products")
              ? "bg-gray-600"
              : "text-white hover:bg-gray-700"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          Products
        </Link>
        <Link
          to="//product-management"
          className={`px-3 py-2 rounded-md text-sm font-medium ${
            isActive("/product-management")
              ? "bg-gray-600"
              : "text-white hover:bg-gray-700"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          ProductsManagement
        </Link>
        <Link
          to="/about-us"
          className={`px-3 py-2 rounded-md text-sm font-medium ${
            isActive("/about-us")
              ? "bg-gray-600"
              : "text-white hover:bg-gray-700"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          About Us
        </Link>
        <Link
          to="/cart"
          className={`px-3 py-2 rounded-md text-sm font-medium ${
            isActive("/cart") ? "bg-gray-600" : "text-white hover:bg-gray-700"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          Cart <FaShoppingCart className="inline ml-1" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
