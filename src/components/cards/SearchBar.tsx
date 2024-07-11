// src/components/SearchBar.tsx

import React from "react";
import { useDispatch } from "react-redux";

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 rounded"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
function setSearchTerm(value: string): any {
  throw new Error("Function not implemented.");
}
