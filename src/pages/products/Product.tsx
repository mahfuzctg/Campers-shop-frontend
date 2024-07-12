import ProductCart from "@/components/Carts/ProductCart";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { Key, useState } from "react";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState("none");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(e.target.value);
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.split(",").map(Number);
    setPriceRange(value as [number, number]);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setCategoryFilter("");
    setPriceRange([0, 1000]);
    setSortOption("none");
  };

  const filteredProducts = data?.data?.filter((product: any) => {
    return (
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (categoryFilter ? product.category === categoryFilter : true) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    );
  });

  const sortedProducts = filteredProducts?.sort((a: any, b: any) => {
    if (sortOption === "price-asc") {
      return a.price - b.price;
    } else if (sortOption === "price-desc") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border rounded"
        />
        <select
          value={categoryFilter}
          onChange={handleCategoryChange}
          className="p-2 border rounded ml-2"
        >
          <option value="">All Categories</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
        </select>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange.join(",")}
          onChange={handlePriceRangeChange}
          className="p-2 border rounded ml-2"
        />
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="p-2 border rounded ml-2"
        >
          <option value="none">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
        <button
          onClick={clearFilters}
          className="p-2 border rounded ml-2 bg-gray-600 text-white"
        >
          Clear
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-80">
        {sortedProducts?.map((product: { _id: Key | null | undefined }) => (
          <ProductCart key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
