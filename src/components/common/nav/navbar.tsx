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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-orange-600 text-white p-2 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Home link */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-white">Campers Shop</span>
        </Link>

        {/* Desktop menu links */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className={`px-3 py-2 rounded-xl text-sm font-medium ${
              isActive("/")
                ? "bg-white"
                : "text-white hover:bg-orange hover:text-orange-500"
            }`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`px-3 py-2 rounded-xl text-sm font-medium ${
              isActive("/products")
                ? "bg-white"
                : "text-white hover:bg-orange hover:text-orange-500"
            }`}
          >
            Products
          </Link>
          <Link
            to="/product-management"
            className={`px-3 py-2 rounded-xl text-sm font-medium ${
              isActive("/product-management")
                ? "bg-white"
                : "text-white hover:bg-orange hover:text-orange-500"
            }`}
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            ProductsManagement
          </Link>
          <Link
            to="/about-us"
            className={`px-3 py-2 rounded-xl text-sm font-medium ${
              isActive("/about-us")
                ? "bg-white"
                : "text-white hover:bg-orange hover:text-orange-500"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/cart"
            className={`px-3 py-2 rounded-xl text-sm font-medium ${
              isActive("/cart")
                ? "bg-white"
                : "text-white hover:bg-orange hover:text-orange-500"
            }`}
          >
            Cart <FaShoppingCart className="inline ml-1" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            className="bg-white text-orange-500 p-1 rounded-xl"
            onClick={toggleMenu} // Toggle menu visibility
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile menu links */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } fixed inset-0 bg-gray-900 text-orange-500 bg-opacity-50 flex flex-col space-y-2 mt-2 p-4`}
      >
        <button
          className="self-end text-white text-2xl"
          onClick={closeMenu} // Close menu on click
        >
          &times;
        </button>
        <Link
          to="/"
          className={`px-3 py-2 rounded-xl text-sm font-medium ${
            isActive("/")
              ? "bg-white"
              : "text-white hover:bg-orange hover:text-orange-500"
          }`}
          onClick={closeMenu} // Close menu on link click
        >
          Home
        </Link>
        <Link
          to="/products"
          className={`px-3 py-2 rounded-xl text-sm font-medium ${
            isActive("/products")
              ? "bg-white"
              : "text-white hover:bg-orange hover:text-orange-500"
          }`}
          onClick={closeMenu} // Close menu on link click
        >
          Products
        </Link>
        <Link
          to="/product-management"
          className={`px-3 py-2 rounded-xl text-sm font-medium ${
            isActive("/product-management")
              ? "bg-white"
              : "text-white hover:bg-orange hover:text-orange-500"
          }`}
          onClick={closeMenu} // Close menu on link click
        >
          ProductsManagement
        </Link>
        <Link
          to="/about-us"
          className={`px-3 py-2 rounded-xl text-sm font-medium ${
            isActive("/about-us")
              ? "bg-white"
              : "text-white hover:bg-orange hover:text-orange-500"
          }`}
          onClick={closeMenu} // Close menu on link click
        >
          About Us
        </Link>
        <Link
          to="/cart"
          className={`px-3 py-2 rounded-xl text-sm font-medium ${
            isActive("/cart")
              ? "bg-white"
              : "text-white hover:bg-orange hover:text-orange-500"
          }`}
          onClick={closeMenu} // Close menu on link click
        >
          Cart <FaShoppingCart className="inline ml-1" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
