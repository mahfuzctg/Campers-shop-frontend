import Button from "@/root/ui/button";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <section className=" mx-auto  flex items-center justify-center bg-gradient-to-r  m-20">
      <div className="max-h-[400px] max-w-[300px] p-5 rounded-xl bg-white text-center space-y-2 shadow-lg">
        <h1 className="text-3xl font-bold text-orange-600">Order Success</h1>
        <p className="text-gray-700 font-roboto font-bold">
          Thank you for your order
        </p>
        <div className="pt-2">
          <Link to="/">
            <Button className="bg-orange-500 rounded-2xl hover:bg-orange-600 text-white font-roboto font-bold">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;
