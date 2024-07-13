import React, { useState } from "react";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.jpg";

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
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Campers Shop Logo"
            className="w-10 h-10 object-contain rounded-full" // No hover effect needed here
          />
          <span className="text-xl font-bold text-white">Campers Shop</span>{" "}
          {/* No hover effect needed here */}
        </Link>

        {/* Desktop menu links */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className={`px-3 py-2 rounded-xl text-sm font-medium ${
              isActive("/")
                ? "bg-white text-orange-600"
                : "text-white hover:bg-orange-500"
            }`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`px-3 py-2 rounded-xl text-sm font-medium ${
              isActive("/products")
                ? "bg-white text-orange-600"
                : "text-white hover:bg-orange-500"
            }`}
          >
            Products
          </Link>
          <Link
            to="/product-management"
            className={`px-3 py-2 rounded-xl text-sm font-medium ${
              isActive("/product-management")
                ? "bg-white text-orange-600"
                : "text-white hover:bg-orange-500"
            }`}
            onClick={closeMenu}
          >
            Product Management
          </Link>
          <Link
            to="/about-us"
            className={`px-3 py-2 rounded-xl text-sm font-medium ${
              isActive("/about-us")
                ? "bg-white text-orange-600"
                : "text-white hover:bg-orange-500"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/cart"
            className={`px-3 py-2 rounded-xl text-sm font-medium ${
              isActive("/cart")
                ? "bg-white text-orange-600"
                : "text-white hover:bg-orange-500"
            }`}
          >
            Cart <FaShoppingCart className="inline ml-1" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            className="bg-white text-orange-500 p-2 rounded-full"
            onClick={toggleMenu}
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile menu links */}
      <div
        className={`fixed top-0 left-0 h-full bg-orange-500 text-white bg-opacity-100 p-4 transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "60%" }}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={closeMenu}
        >
          &times;
        </button>
        <div className="flex flex-col space-y-4 mt-12">
          <Link
            to="/"
            className={`px-3 py-2 rounded-xl text-sm font-medium ${
              isActive("/")
                ? "bg-white text-orange-600"
                : "text-white hover:bg-orange-500"
            }`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`px-3 py-2 rounded-xl text-sm font-medium ${
              isActive("/products")
                ? "bg-white text-orange-600"
                : "text-white hover:bg-orange-500"
            }`}
            onClick={closeMenu}
          >
            Products
          </Link>
          <Link
            to="/product-management"
            className={`px-3 py-2 rounded-xl text-sm font-medium ${
              isActive("/product-management")
                ? "bg-white text-orange-600"
                : "text-white hover:bg-orange-500"
            }`}
            onClick={closeMenu}
          >
            Product Management
          </Link>
          <Link
            to="/about-us"
            className={`px-3 py-2 rounded-xl text-sm font-medium ${
              isActive("/about-us")
                ? "bg-white text-orange-600"
                : "text-white hover:bg-orange-500"
            }`}
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="/cart"
            className={`px-3 py-2 rounded-xl text-sm font-medium ${
              isActive("/cart")
                ? "bg-white text-orange-600"
                : "text-white hover:bg-orange-500"
            }`}
            onClick={closeMenu}
          >
            Cart <FaShoppingCart className="inline ml-1" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
