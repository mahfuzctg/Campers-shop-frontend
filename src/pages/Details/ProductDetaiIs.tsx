/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetSingleProductQuery } from "@/redux/api/baseApi";
import { Rating } from "@smastrom/react-rating";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";

import "@smastrom/react-rating/style.css";
import React, { useState } from "react";
import { toast } from "sonner";

import Loader from "@/components/Loader/Loader";
import { addToCart } from "@/redux/slices/cartSlice";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/root/ui/accordion";
import Button from "@/root/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/root/ui/table";
import mastercard from "../../assets/SVG/mastercard.svg";
import paypal from "../../assets/SVG/paypal.svg";
import shopPay from "../../assets/SVG/shop-pay.svg";
import visa from "../../assets/SVG/visa.svg";

// Main component for displaying product details
const ProductDetails = () => {
  // Get the product ID from the route parameters
  const { id } = useParams();

  // State for magnifier position and visibility
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Fetch product data using the ID
  const { data, isLoading } = useGetSingleProductQuery(id);

  // Redux hooks
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const currentProduct = cart?.find((item) => item._id === id);

  // Function to handle adding the product to the cart
  const handleAddToCart = async () => {
    // Remove unwanted fields and prepare cart data
    const { __v, quantity: oldQuantity, ...otherData } = data.data;

    const cartData = {
      ...otherData,
      quantity: 1,
    };

    dispatch(addToCart(cartData));

    toast.success("Product added to cart");
  };

  // Function to handle mouse movements for magnifier effect
  const handleMouseHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    // Calculate percentage positions for magnifier
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    const cursorX = e.pageX - left - window.scrollX;
    const cursorY = e.pageY - top - window.scrollY;

    setPosition({ x, y });
    setCursorPosition({ x: cursorX, y: cursorY });
  };

  // Show loader while data is being fetched
  if (isLoading) {
    return <Loader height={"h-[600px]"} />;
  }

  return (
    <section className="container rounded-xl p-4 mt-24 grid lg:grid-cols-2 mx-auto my-12 gap-12 font-roboto">
      {/* Image section with magnifier effect */}
      <div
        className="flex flex-col h-full img-magnifier-container"
        onMouseEnter={() => setShowMagnifier(true)} // Show magnifier on mouse enter
        onMouseLeave={() => setShowMagnifier(false)} // Hide magnifier on mouse leave
        onMouseMove={handleMouseHover} // Update magnifier position on mouse move
      >
        <img
          className="rounded-2xl magnifier-img w-full h-full bg-white p-4 object-cover flex-grow"
          src={data?.data?.image}
          alt="Product Image"
        />
        {showMagnifier && (
          <div
            style={{
              position: "absolute",
              left: `${cursorPosition.x - 100}px`,
              top: `${cursorPosition.y - 100}px`,
              pointerEvents: "none",
              width: "200px",
              height: "200px",
              border: "2px solid #fff",
              borderRadius: "10px",
              backgroundImage: `url(${data?.data?.image})`,
              backgroundSize: "600%",
              backgroundPosition: `${position.x}% ${position.y}%`,
              zIndex: 10,
            }}
          ></div>
        )}
      </div>

      {/* Text and product details section */}
      <div className="flex flex-col border-2 border-orange-500 p-5 rounded-xl h-full">
        <div className="flex items-center justify-between">
          <h4 className="text-gray-700 text-sm font-bold">
            CATEGORY:{" "}
            <span className="text-sm bold">{data?.data?.category}</span>
          </h4>
          <div className="max-w-24">
            <Rating className="size-6 w-fit" value={data?.data?.rating} />
          </div>
        </div>
        <div className="py-4 border-b-2 border-gray-800 space-y-6">
          <h2 className="text-2xl font-bold text-gray-700">
            {data?.data?.name}
          </h2>
          <div className="text-orange-500 font-semibold flex items-center gap-3">
            <h2 className="flex items-center gap-1 text-xl ">
              ${data?.data?.price}.00 USD
            </h2>
            <del className="text-gray-600 flex items-center gap-1 text-xl">
              ${data?.data?.price + 11}.00 USD
            </del>
          </div>
        </div>

        {/* Product description and add to cart button */}
        <div className="py-4 flex-grow">
          <p className="text-gray-600 text-sm font-medium">
            Find top-quality camping gear for your next adventure. From durable
            tents to essential hiking equipment, Campers Shop has you covered.
          </p>
          <Button
            onClick={handleAddToCart}
            disabled={
              !data?.data?.stock ||
              data?.data?.quantity === currentProduct?.quantity
            }
            className="w-full text-white rounded-xl bg-orange-500 hover:bg-orange-600 mt-4"
          >
            Add To Cart
          </Button>
        </div>

        {/* Accordion for additional product information */}
        <div className="py-4 flex-grow">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="border-2 rounded-xl border-gray-800 px-5 hover:border-orange-500 transition-colors duration-300"
            >
              <AccordionTrigger className="hover:no-underline text-gray-700 text-sm font-roboto font-semibold">
                Details
              </AccordionTrigger>
              <AccordionContent>
                <Table>
                  <TableBody>
                    <TableRow className="border-gray-400 flex items-center justify-between">
                      <TableCell className="font-semibold text-md text-gray-700">
                        In Stock
                      </TableCell>
                      <TableCell className="font-semibold text-md text-gray-700">
                        {data?.data?.stock ? "Available" : "Out Of Stock"}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border border-gray-400 flex items-center justify-between">
                      <TableCell className="font-semibold text-md text-gray-700">
                        Quantity
                      </TableCell>
                      <TableCell className="font-semibold text-md text-gray-700">
                        {data?.data?.quantity}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-2 border-gray-800 px-5 rounded-xl hover:border-orange-500 transition-colors duration-300"
            >
              <AccordionTrigger className="hover:no-underline text-gray-700 text-sm font-roboto font-semibold">
                Delivery Time
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 font-sm text-base font-roboto">
                Enjoy fast delivery with orders processed within 24 hours. We
                partner with reliable carriers to ensure your products arrive
                within three days.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-2 border-gray-800 px-5 rounded-xl hover:border-orange-500 transition-colors duration-300"
            >
              <AccordionTrigger className="hover:no-underline text-gray-700 text-sm font-roboto font-semibold">
                Refund Policy
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 font-sm text-base font-roboto">
                Not satisfied? Reach out within 7 days for a return. Once we
                receive the item in its original condition, we’ll issue a prompt
                refund.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Payment methods section */}
        <div className="flex items-center gap-2">
          <p className="text-gray-700 text-md font-bold">Payment method:</p>

          <img src={visa} alt="Visa" />
          <img src={paypal} alt="PayPal" />
          <img src={mastercard} alt="MasterCard" />
          <img src={shopPay} alt="Shop Pay" />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
