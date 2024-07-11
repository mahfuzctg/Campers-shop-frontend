import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = useSelector((state: RootState) =>
    state.products.items.find(
      (p: { id: string | undefined }) => p.id === productId
    )
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full md:w-1/2 h-auto object-cover rounded-md mb-4 md:mb-0 md:mr-4"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-blue-500 text-xl">${product.price}</p>
          </div>
          <button className="bg-blue-500 text-white p-2 rounded-md mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
