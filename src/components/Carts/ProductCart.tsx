import { Button } from "@/root/ui/button";
import { Link } from "react-router-dom";

const ProductCart = ({ product }) => {
  return (
    <div className="lg:max-w-80 h-full rounded-xl border border-gray-200 p-4 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-100">
      <div className="flex-1 flex-grow overflow-hidden rounded-lg">
        <img
          className="w-full object-cover h-64 md:h-72 lg:h-56 rounded-lg"
          src={product?.image}
          alt={product?.name}
          onError={(e) => {
            e.currentTarget.src = "path/to/placeholder-image.jpg";
          }} // Fallback in case of broken image link
        />
      </div>
      <div className="flex flex-col gap-5 ">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-gray-700">{product?.name}</h3>
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-orange-500">
              $ {product?.price} USD
            </h3>
            <p className="text-sm text-gray-500  font-medium flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6Z"
                />
              </svg>{" "}
              {product?.category}
            </p>
          </div>
        </div>
        <Link to={`/products-details/${product?._id}`}>
          <Button className="w-full bg-gray-600 text-white hover:bg-gray-500 rounded-xl">
            See Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCart;
