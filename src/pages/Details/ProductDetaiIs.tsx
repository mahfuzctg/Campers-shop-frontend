import { useGetSingleProductQuery } from "@/redux/api/baseApi";
import { Rating } from "@smastrom/react-rating";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { addToCart } from "@/redux/slices/cartSlice";
import { Button } from "@/root/ui/button";
import "@smastrom/react-rating/style.css";
import React, { useState } from "react";
import { toast } from "sonner";

import Loader from "@/components/Loader/Loader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/root/ui/accordion";
import { Table, TableBody, TableCell, TableRow } from "@/root/ui/table";
import mastercard from "../../assets/SVG/mastercard.svg";
import paypal from "../../assets/SVG/paypal.svg";
import shopPay from "../../assets/SVG/shop-pay.svg";
import visa from "../../assets/SVG/visa.svg";

const ProductDetails = () => {
  const { id } = useParams();

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const { data, isLoading } = useGetSingleProductQuery(id);

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const currentProduct = cart?.find((item) => item._id === id);

  const handleAddToCart = async () => {
    const { __v, quantity: oldQuantity, ...otherData } = data.data;

    const cartData = {
      ...otherData,
      quantity: 1,
    };

    dispatch(addToCart(cartData));

    toast.success("Product added to cart");
  };

  const handleMouseHover = (e: React.MouseEvent<HTMLDivElement>) => {
    // Corrected the usage of getBoundingClientRect
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    const cursorX = e.pageX - left - window.scrollX;
    const cursorY = e.pageY - top - window.scrollY;

    setPosition({ x, y });

    setCursorPosition({ x: cursorX, y: cursorY });
  };

  if (isLoading) {
    return <Loader height={"h-[600px]"} />;
  }

  return (
    <section className="container rounded-xl  p-4 mt-24 grid lg:grid-cols-2 mx-auto my-12    items-center gap-12 ">
      <div
        className="flex-[2] h-[600px] img-magnifier-container"
        onMouseEnter={() => setShowMagnifier(true)}
        onMouseLeave={() => setShowMagnifier(false)}
        onMouseMove={handleMouseHover}
      >
        <img
          className="rounded-2xl magnifier-img w-full h-full bg-slate-100 p-4 object-cover"
          src={data?.data?.image}
          alt=""
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
      <div className="flex-1 w-full min-h-[600px] border-2 border-gray-800 p-5 rounded-xl">
        <div className="flex items-center justify-between">
          <h4 className="text-gray-800 font-bold ">
            CATEGORY: <span className="text-sm">{data?.data?.category}</span>
          </h4>
          <div className="max-w-24">
            <Rating className="size-6 w-fit" value={data?.data?.rating} />
          </div>
        </div>
        <div className="py-4 border-b-2 border-gray-800  space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            {data?.data?.name}
          </h2>
          <div className="text-orange-500 text-2xl font-semibold flex items-center gap-3">
            <h2 className="flex items-center gap-1">
              ${data?.data?.price}.00 USD
            </h2>
            <del className="text-gray-500  flex items-center gap-1 text-2xl">
              $ {data?.data?.price + 11}.00 USD
            </del>
          </div>
        </div>

        <div className="py-4 border-b-2 border-gray-800">
          <p className="text-gray-800 font-medium">
            Your one-stop online store for all camping essentials. From tents to
            hiking gear, we offer top-quality products to make your outdoor
            adventures unforgettable. Explore, discover, and gear up with
            Campers Shop.
          </p>
          <Button
            onClick={handleAddToCart}
            disabled={
              !data?.data?.stock ||
              data?.data?.quantity === currentProduct?.quantity
            }
            className="w-full  bg-green-500 hover:bg-green-600 mt-4"
          >
            Add To Cart
          </Button>
        </div>

        <div className="py-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className=" border-2 border-gray-800 px-5 rounded-lg hover:border-orange-500 transition-colors duration-300"
            >
              <AccordionTrigger className="hover:no-underline ">
                Details
              </AccordionTrigger>
              <AccordionContent>
                <Table>
                  <TableBody>
                    <TableRow className="border-gray-400 flex items-center justify-between">
                      <TableCell className="font-semibold text-lg">
                        In Stock
                      </TableCell>
                      <TableCell className="font-semibold text-lg">
                        {data?.data?.stock ? "Available" : "Out Of Stock"}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border border-gray-400 flex items-center justify-between">
                      <TableCell className="font-semibold text-lg">
                        Available Quantity
                      </TableCell>
                      <TableCell className="font-semibold text-lg">
                        {data?.data?.quantity}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className=" border-2 border-gray-800 px-5 rounded-lg hover:border-orange-500 transition-colors duration-300"
            >
              <AccordionTrigger className="hover:no-underline ">
                Delivery Time
              </AccordionTrigger>
              <AccordionContent className="text-gray-800 font-medium text-base">
                At our company, we prioritize swift delivery. Orders are
                processed within 24 hours and shipped using trusted partners,
                ensuring your products reach you within three days. Your
                satisfaction is our top priority.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className=" border-2 border-gray-800 px-5 rounded-lg hover:border-orange-500 transition-colors duration-300"
            >
              <AccordionTrigger className="hover:no-underline ">
                Refund Policy
              </AccordionTrigger>
              <AccordionContent className="text-gray-800 font-medium text-base">
                Our refund policy is straightforward: if you're not satisfied
                with your purchase, contact us within 7 days of receipt, and
                we'll guide you through the return process. Once we receive the
                item in its original condition, we'll issue a refund to your
                original payment method. Your satisfaction is our priority, and
                we aim to make the refund process hassle-free.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-gray-800 text-lg font-bold">Payment method:</p>

          <img src={visa} alt="visa" />
          <img src={paypal} alt="paypal" />
          <img src={shopPay} alt="shop-pay" />
          <img src={mastercard} alt="mastercard" />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
