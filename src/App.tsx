import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/common/nav/navbar";
import AboutUsSection from "./pages/About/AboutSection";
import CartPage from "./pages/carts/CartPage";
import HomePage from "./pages/home/homePage";
import ProductDetailsPage from "./pages/products/ProductDetailsPage";
import ProductsPage from "./pages/products/ProductsPage";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsSection />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default App;
