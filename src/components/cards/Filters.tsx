// src/components/FilterPanel.tsx

import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const categories = ["Backpacks", "Tents", "Sleeping Bags"]; // Example categories

const FilterPanel: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedCategory, minPrice, maxPrice } = useSelector(
    (state: RootState) => state.products
  );

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setCategory(event.target.value));
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(
      setPriceRange({
        min: name === "minPrice" ? Number(value) : minPrice,
        max: name === "maxPrice" ? Number(value) : maxPrice,
      })
    );
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Filters</h2>
      <div className="mb-2">
        <label className="block mb-1">Category:</label>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border p-2 rounded"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="block mb-1">Price Range:</label>
        <input
          type="number"
          name="minPrice"
          value={minPrice}
          onChange={handlePriceChange}
          placeholder="Min Price"
          className="border p-2 rounded mr-2"
        />
        <input
          type="number"
          name="maxPrice"
          value={maxPrice}
          onChange={handlePriceChange}
          placeholder="Max Price"
          className="border p-2 rounded"
        />
      </div>
      <button
        onClick={handleClearFilters}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterPanel;
function setCategory(value: string): any {
  throw new Error("Function not implemented.");
}

function setPriceRange(arg0: { min: any; max: any }): any {
  throw new Error("Function not implemented.");
}

function clearFilters(): any {
  throw new Error("Function not implemented.");
}
