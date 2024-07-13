import App from "@/App";
import About from "@/pages/About/About";
import CartPage from "@/pages/Carts/CartPage";
import Checkout from "@/pages/Checkouts/CheckoutPage";
import ProductDetails from "@/pages/Details/ProductDetaiIs";
import NotFoundPage from "@/pages/error/Error";
import HomePage from "@/pages/Home/HomePage";
import CreateProduct from "@/pages/Managements/CreateProduct";
import ProductManagement from "@/pages/Managements/ProductManagement";
import UpdateProduct from "@/pages/Managements/UpdateProduct";
import OrderSuccess from "@/pages/Orders/OrderSuccess";

import ProductPage from "@/pages/Products/ProductsPage";

import { createBrowserRouter } from "react-router-dom";

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "products",
          element: <ProductPage />,
        },
        {
          path: "product-management",
          element: <ProductManagement />,
        },
        {
          path: "create-product",
          element: <CreateProduct />,
        },
        {
          path: "update-product/:id",
          element: <UpdateProduct />,
        },
        {
          path: "products-details/:id",
          element: <ProductDetails />,
        },
        {
          path: "about-us",
          element: <About />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "order-success",
          element: <OrderSuccess />,
        },
      ],
    },
  ]);
