import FilterPanel from "@/components/cards/Filters";
import ProductCard from "@/components/cards/ProductCard";
import SearchBar from "@/components/cards/SearchBar";
import SortOptions from "@/components/cards/SortingOptions";
import CategoriesSection from "@/components/Sections/CategoriesSection";
import { fetchProducts } from "@/redux/slices/productsSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(
    (state: RootState) => state.products.filteredProducts
  );
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4 mt-[5%]">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      {/* Search, Filter, Sort, and Category Section */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex-1 min-w-[200px]">
          <SearchBar />
        </div>
        <div className="flex-1 min-w-[200px]">
          <FilterPanel />
        </div>
        <div className="flex-1 min-w-[200px]">
          <SortOptions />
        </div>
        <div className="flex-1 min-w-[200px]">
          {/* Assuming CategoryPanel is the component for categories */}
          <CategoriesSection />
        </div>
      </div>

      {/* Product Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <div>No products found.</div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
