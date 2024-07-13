/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useAddOrderMutation,
  useUpdateCartInfoMutation,
} from "@/redux/api/baseApi";
import { useAppSelector } from "@/redux/hooks/hook";
import Button from "@/root/ui/button";
import { Input } from "@/root/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/root/ui/select";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// Define the type for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

// Define the type for the cart items
type CartItem = {
  _id: string;
  quantity: number;
  [key: string]: any; // Add this to allow other properties
};

const Checkout = () => {
  const [onCash, setIsOnCash] = useState<string>("");
  const navigate = useNavigate();

  // Use the defined type for useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [addPayment] = useAddOrderMutation();
  const [updateCartInfo] = useUpdateCartInfoMutation();

  const cart = useAppSelector((state) => state.cart as CartItem[]);
  const updatedProductData = cart.map((item) => ({
    _id: item._id,
    quantity: item.quantity,
  }));

  // Define the onSubmit function with the FormData type
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const orderData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      paymentMethod: onCash,
    };

    try {
      const res = await addPayment(orderData).unwrap();
      console.log(res);
      const result = await updateCartInfo(updatedProductData).unwrap();
      console.log(result);
      if (res?.success && result?.success) {
        toast.success(res?.message);
        navigate("/order-success");
      }
    } catch (err) {
      toast.error("Order failed");
    }
  };

  return (
    <div className="max-w-lg mt-24 mx-auto ">
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center text-orange-500">
          CHECKOUT PAGE
        </h1>
      </div>

      <form
        className="p-5 bg-white border border-orange-500 m-4 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-6 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="">
              Name
            </Label>
            <Input
              id="name"
              className=""
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              className=""
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label className="" htmlFor="phone">
              Phone
            </Label>
            <Input id="phone" {...register("phone", { required: true })} />
            {errors.phone && (
              <p className="text-red-500 text-sm">Phone is required</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="address" className="">
              Address
            </Label>
            <Input
              id="address"
              className=""
              {...register("address", { required: true })}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">Address is required</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Select required onValueChange={(value) => setIsOnCash(value)}>
              <SelectTrigger className="">
                <SelectValue placeholder="Select Payment Method" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="cash">Cash on Delivery</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Button
            className="w-full bg-orange-500 text-white hover:bg-orange-600 rounded-xl"
            type="submit"
          >
            Place Order
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
