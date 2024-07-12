import { useGetSingleProductQuery } from "@/redux/api/baseApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { addToCart } from "@/redux/slices/cartSlice";
import { Button } from "@/root/ui/button";
import { Star } from "lucide-react";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleProductQuery(id);

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const currentProduct = cart?.find((item) => item._id === id);
  // console.log(currentProduct);

  const handleAddToCart = async () => {
    const { quantity: oldQuantity, ...otherData } = data.data;

    const cartData = {
      ...otherData,
      quantity: 1,
    };

    dispatch(addToCart(cartData));

    toast.success("Product added to cart");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="max-w-screen-xl min-h-[400px] mx-auto my-16 px-3 lg:px-12 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 overflow-hidden">
        <img
          className="w-full max-h-[500px] rounded-lg"
          src={data?.data?.image}
          alt=""
        />
      </div>
      <div className="flex-1">
        <div className="py-4 border-b border-gray-400 space-y-2">
          <h2 className="text-4xl font-medium text-gray-800 font-young-serif">
            {data?.data?.name}
          </h2>
          <p className="text-gray-600">{data?.data?.description}</p>
          <h3 className="text-orange-500 text-4xl font-bold ">
            ${data?.data?.price}.00
          </h3>
        </div>
        <div className="pt-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <p className="text-gray-600 text-xl font-bold">Rating:</p>
              <Rating
                emptySymbol={<Star size={30} color="gray" />}
                fullSymbol={<Star size={30} color="orange" />}
                fractions={2}
                initialRating={data?.data?.rating}
                stop={5}
              />
            </div>
            <div className="flex items-center justify-between gap-2">
              {data?.data?.stock ? (
                <p className="text-gray-600 text-xl font-bold flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  In Stock
                </p>
              ) : (
                <p className="text-orange-500 text-xl font-bold flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>{" "}
                  Out Of Stock
                </p>
              )}
              <p className="text-sm text-gray-500 font-medium flex items-center gap-1">
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
                {data?.data?.category}
              </p>
            </div>
          </div>

          <div>
            <Button
              onClick={handleAddToCart}
              disabled={
                !data?.data?.stock ||
                data?.data?.quantity === currentProduct?.quantity
              }
              className="w-full bg-gray-600 text-white hover:bg-gray-500 mt-4"
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
