import { Button } from "@/root/ui/button";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to determine if a route is active
  const isActive = (path: string) => location.pathname === path;

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Site Name */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Campers Shop</span>
        </Link>

        {/* Navbar Items (Desktop) */}
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
            to="/cart"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive("/cart") ? "bg-gray-600" : "text-white hover:bg-gray-700"
            }`}
          >
            Cart
          </Link>
          <Link
            to="/about"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive("/about")
                ? "bg-gray-600"
                : "text-white hover:bg-gray-700"
            }`}
          >
            About Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button className="bg-gray-700 text-white" onClick={toggleMenu}>
            Menu
          </Button>
        </div>
      </div>

      {/* Mobile Menu (Toggle visibility based on state) */}
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
          onClick={() => setIsMenuOpen(false)} // Close menu on link click
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
          onClick={() => setIsMenuOpen(false)} // Close menu on link click
        >
          Products
        </Link>
        <Link
          to="/cart"
          className={`px-3 py-2 rounded-md text-sm font-medium ${
            isActive("/cart") ? "bg-gray-600" : "text-white hover:bg-gray-700"
          }`}
          onClick={() => setIsMenuOpen(false)} // Close menu on link click
        >
          Cart
        </Link>
        <Link
          to="/about"
          className={`px-3 py-2 rounded-md text-sm font-medium ${
            isActive("/about") ? "bg-gray-600" : "text-white hover:bg-gray-700"
          }`}
          onClick={() => setIsMenuOpen(false)} // Close menu on link click
        >
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
