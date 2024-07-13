// src/components/Carts/ProductCart.tsx
import Button from "@/root/ui/button";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

export type TProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string | string;
  quantity: number;
  rating: number;
  stock: boolean;
  __v: number;
};

type ProductCardProps = {
  product: TProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex flex-col border border-gray-200 rounded-xl overflow-hidden shadow-md h-[500px] font-roboto">
      <div className="w-full h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="p-4 flex flex-col flex-1 space-y-3">
        <h6 className="text-xl font-bold text-gray-600">{product.name}</h6>
        <div className="flex items-center">
          <Rating className="size-6" value={product.rating} />
        </div>
        <h6 className="text-md font-semibold text-orange-500 flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-3 fill-current"
            viewBox="0 0 320 512"
          >
            <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
          </svg>
          {product.price} USD
        </h6>
        <h6 className="font-semibold text-sm text-gray-600">
          QUANTITY: <span>{product.quantity}.00</span>
        </h6>
        <h6 className="font-semibold text-sm text-gray-600">
          STOCK:{" "}
          <span
            className={`text-sm ${
              product.stock ? "text-orange-500" : "text-red-500"
            }`}
          >
            {product.stock ? "AVAILABLE" : "OUT OF STOCK"}
          </span>
        </h6>
        <div className="mt-auto">
          <Link to={`/products-details/${product._id}`}>
            <Button className="w-full bg-orange-500 text-white rounded-xl hover:bg-orange-600">
              See Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
