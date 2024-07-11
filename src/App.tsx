// src/App.tsx (or wherever you are using the Navbar)

import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/common/nav/navbar";
import AboutUsSection from "./pages/About/AboutSection";
import HomePage from "./pages/home/homePage";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsSection />} />
        {/* <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        */}
      </Routes>
    </>
  );
};

export default App;
