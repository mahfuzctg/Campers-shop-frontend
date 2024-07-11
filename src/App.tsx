// src/App.tsx (or wherever you are using the Navbar)

import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./layout/nav/navbar";
import HomePage from "./pages/home/homePage";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutUsPage />} /> */}
      </Routes>
    </>
  );
};

export default App;
