import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const FeaturedProductsSection: React.FC = () => {
  // Get products from the Redux store
  const products = useSelector((state: RootState) => state.products.products);

  // Check if products is defined and has at least 5 items
  const featuredProducts =
    products && products.length > 0 ? products.slice(0, 5) : [];

  return (
    <section className="p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredProducts.length > 0 ? (
          featuredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          ))
        ) : (
          <div>No featured products available.</div>
        )}
      </div>
      <div className="mt-4 text-center">
        <a href="/products" className="text-blue-500 hover:underline">
          View More
        </a>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
