import { useGetProductsQuery } from "@/redux/api/baseApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from "@/redux/slices/cartSlice";
import { Button } from "@/root/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/root/ui/table";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// Define types for CartItem and Product
type CartItem = {
  _id: string;
  image: string;
  name: string;
  price: number; // Ensure price is a number
  quantity: number;
  category: string;
};

type Product = {
  _id: string;
  quantity: number;
  stock: boolean;
  [key: string]: any;
};

const CartPage = () => {
  const { data: products, isLoading } = useGetProductsQuery(undefined);

  const cart = useAppSelector((state) => state.cart as CartItem[]);
  const dispatch = useAppDispatch();

  // Calculate total price, ensuring it has two decimal places
  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2); // Use toFixed to format price to 2 decimal places

  const isDisabled = (item: CartItem) => {
    const result = products?.data.find(
      (data: Product) => data._id === item._id
    );
    return result
      ? result.quantity === item.quantity || result.stock === false
      : false;
  };

  const handleDeleteItem = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteItem(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
        });
      }
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="max-w-screen-xl mx-auto py-20 min-h-[400px]">
      <div className="max-w-screen-xl mx-auto py-20 px-3">
        <div className="border border-orange-500 rounded-lg p-8">
          <div className="pb-6 flex items-center justify-between border-b border-orange-500">
            <h2 className="text-xl text-orange-500 font-bold">Your Cart</h2>
            <h2 className="text-xl text-orange-500 font-bold">
              Total product: {cart.length}
            </h2>
          </div>
          <Table className="p-12 min-w-[570px] md:w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Image</TableHead>
                <TableHead>Name & Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>
                    <img
                      className="object-cover rounded-lg size-14"
                      src={item.image}
                      alt={item.name}
                    />
                  </TableCell>
                  <TableCell className="text-sm">
                    <p className="flex flex-col gap-1">
                      <span>{item.name}</span>
                      <span className="text-orange-500">
                        ${item.price.toFixed(2)} USD
                      </span>
                    </p>
                  </TableCell>
                  <TableCell className="flex items-center gap-3">
                    <Button
                      onClick={() => dispatch(decreaseQuantity(item._id))}
                      disabled={item.quantity === 1}
                      className="border border-gray-300"
                      variant="ghost"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14"
                        />
                      </svg>
                    </Button>
                    <span className="text-lg font-semibold text-gray-700">
                      {item.quantity}
                    </span>
                    <Button
                      onClick={() => dispatch(increaseQuantity(item._id))}
                      disabled={isDisabled(item)}
                      variant="ghost"
                      className="border border-gray-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </Button>
                  </TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell className="text-right space-x-2 ">
                    <Button
                      className="text-orange-600 "
                      onClick={() => handleDeleteItem(item._id)}
                      variant="destructive"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total Amount</TableCell>
                <TableCell className="text-right">${totalPrice}</TableCell>
                <TableCell className="text-right">
                  <Link to="/checkout">
                    <Button className="bg-orange-500 hover:bg-orange-400 mt-2 rounded-xl text-white">
                      Place Order
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
