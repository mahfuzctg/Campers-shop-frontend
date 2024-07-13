/* eslint-disable react/no-unescaped-entities */
// src/components/BestSelling.tsx
import ProductCart from "@/components/Carts/ProductCart";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import Button from "@/root/ui/button";
import { Product } from "@/types/Product";

import { Link } from "react-router-dom";

const BestSelling = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>; // Directly return the loading indicator
  }

  return (
    <div className="mt-28 space-y-16 px-3 lg:px-0">
      <div className="mx-auto text-center max-w-3xl mb-8 space-y-2">
        <p className="text-orange-500 font-bold text-sm md:text-lg font-roboto">
          BEST SELLING
        </p>
        <h2 className="text-2xl md:text-2xl text-gray-600 font-bold text-center font-roboto">
          OUR BEST SELLING PRODUCTS
        </h2>
        <p className="text-gray-700 font-roboto text-sm text-justify">
          Check out our best-selling camping equipment, beloved by adventurers
          for its outstanding performance and reliability. Discover essential
          gear designed to enhance every outdoor adventure. Click on any item
          for more details and see why it's a top choice for our customers
          craving excellence.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-80">
        {data?.data?.slice(0, 4).map((product: Product) => (
          <ProductCart key={product._id} product={product} />
        ))}
      </div>

      <div className="flex justify-center">
        <Link to="/products">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-roboto">
            View more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BestSelling;
