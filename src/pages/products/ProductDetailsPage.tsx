import { addToCart } from "@/redux/slices/cartSlice";
import { fetchProducts } from "@/redux/slices/productsSlice";

import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector(
    (state: RootState) => state.products.currentProduct
  );
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      dispatch(fetchProducts(id));
    }
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity }));
    }
  };

  const productInCart = cartItems.find((item) => item._id === product?._id);
  const maxQuantity = product ? Math.min(product.stockQuantity, 99) : 1;
  const currentQuantity = productInCart ? productInCart.quantity : 0;

  return (
    <div className="container mx-auto p-4">
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div>Error: {error}</div>}
      {product && (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-96 object-cover mb-4 rounded-lg"
            />
            <div className="flex flex-wrap gap-2">
              {product.images
                .slice(1)
                .map(
                  (
                    image: string | undefined,
                    index: React.Key | null | undefined
                  ) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-24 h-24 object-cover rounded-lg cursor-pointer"
                    />
                  )
                )}
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl font-semibold mb-2">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-700 mb-2">Stock: {product.stockQuantity}</p>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-gray-700 mb-2">Category: {product.category}</p>
            <p className="text-gray-700 mb-2">Ratings: {product.ratings}</p>

            <div className="mt-4">
              <input
                type="number"
                min="1"
                max={maxQuantity}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border p-2 rounded mr-2"
              />
              <button
                onClick={handleAddToCart}
                disabled={quantity > maxQuantity || product.stockQuantity <= 0}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Add to Cart
              </button>
              {quantity > maxQuantity && (
                <p className="text-red-500 mt-2">
                  Quantity exceeds available stock.
                </p>
              )}
              {product.stockQuantity <= 0 && (
                <p className="text-red-500 mt-2">Out of stock.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
