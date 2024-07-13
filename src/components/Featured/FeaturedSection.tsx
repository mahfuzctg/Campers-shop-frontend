import { useGetProductsQuery } from "@/redux/api/baseApi";

import { Product } from "@/types/Product";
import ProductCart from "../Carts/ProductCart";

const FeaturedSection = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>; // Directly render loading state
  }

  return (
    <div className="min-h-[600px] py-16 mb-28">
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <h2 className="text-orange-500 uppercase font-roboto font-semibold text-sm md:text-lg">
          Featured Products
        </h2>
        <h2 className="text-2xl md:text-2xl uppercase text-gray-600 font-bold text-center font-roboto">
          Premier Products for Adventurers
        </h2>
        <p className="text-gray-700">
          Check out our handpicked selection of top-rated camping gear. These
          featured items stand out for their exceptional quality and innovative
          design, ensuring you have the best experience on your next adventure.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-80">
        {data?.data
          ?.slice(-6) // Assuming you want the last 6 items for featured products
          .map((product: Product) => (
            <ProductCart key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
