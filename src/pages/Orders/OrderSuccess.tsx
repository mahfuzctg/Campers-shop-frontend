import { Button } from "@/root/ui/button";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <section className="max-w-screen-xl mx-auto min-h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="max-h-[400px] max-w-[300px] p-5 rounded-xl bg-gray-500 text-center space-y-2">
        <h1 className="text-3xl font-bold text-white">Order Success</h1>
        <p className="text-gray-200">Thank you for your order</p>
        <div className="pt-2">
          <Link to="/">
            <Button className=" bg-gray-100 hover:bg-gray-200 text-gray-800 ">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;
