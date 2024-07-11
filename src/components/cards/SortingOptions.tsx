// src/components/SortOptions.tsx
import { setSortBy } from "@/redux/slices/productsSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SortOptions: React.FC = () => {
  const dispatch = useDispatch();
  const { sortBy } = useSelector((state: RootState) => state.products);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(event.target.value));
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Sort By</h2>
      <select
        value={sortBy}
        onChange={handleSortChange}
        className="border p-2 rounded"
      >
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortOptions;
