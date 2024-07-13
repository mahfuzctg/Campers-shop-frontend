// src/pages/Products/Products.tsx
import ProductCart from "@/components/Carts/ProductCart";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { Product } from "@/types/Product";

import React, { useState } from "react";

const Products: React.FC = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [sortOption, setSortOption] = useState<string>("none");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(e.target.value);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setCategoryFilter("");
    setMinPrice(0);
    setMaxPrice(1000);
    setSortOption("none");
  };

  const filteredProducts = data?.data?.filter((product: Product) => {
    return (
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (categoryFilter ? product.category === categoryFilter : true) &&
      product.price >= minPrice &&
      product.price <= maxPrice
    );
  });

  const sortedProducts = filteredProducts?.sort((a: Product, b: Product) => {
    if (sortOption === "price-asc") {
      return a.price - b.price;
    } else if (sortOption === "price-desc") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-screen-xl mx-auto py-4 flex flex-col lg:flex-row gap-4 lg:gap-6 justify-between items-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border rounded w-full md:w-64"
        />
        <select
          value={categoryFilter}
          onChange={handleCategoryChange}
          className="p-2 border rounded w-full md:w-48 mt-2 md:mt-0 bg-white text-gray-700 font-semibold"
        >
          <option value="">All Categories</option>
          <option value="Backpacks">Backpacks</option>
          <option value="Electronics">Electronics</option>
          <option value="Adventure">Adventure</option>
          <option value="Camping">Camping</option>
        </select>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <div className="flex items-center">
            <label
              htmlFor="minPrice"
              className="mr-2 text-sm text-gray-700  font-bold font-roboto"
            >
              Min Price
            </label>
            <input
              id="minPrice"
              type="number"
              min="0"
              max="1000"
              value={minPrice}
              onChange={handleMinPriceChange}
              className="p-2 border rounded"
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="maxPrice"
              className=" text-gray-700 text-sm font-bold font-roboto"
            >
              Max Price
            </label>
            <input
              id="maxPrice"
              type="number"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="p-2 border rounded "
            />
          </div>
        </div>
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="p-2 border rounded w-full md:w-48 mt-2 md:mt-0 bg-white text-gray-700 font-semibold"
        >
          <option value="none">Sort By Price</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
        <button
          onClick={clearFilters}
          className="p-2 px-4 border rounded bg-white text-gray-700 font-semibold text-lg mt-2 md:mt-0"
        >
          Clear
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {sortedProducts?.map((product: Product) => (
          <ProductCart key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
