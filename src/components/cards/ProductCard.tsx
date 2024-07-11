// src/components/cards/ProductCard.tsx
import { Product } from "@/types/Product"; // Adjust the import path
import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <img
        src={product.images[0]} // Assuming you want to display the first image
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-blue-500">${product.price.toFixed(2)}</p>
      <Link
        to={`/products/${product._id}`}
        className="block mt-2 text-blue-500"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
