import Footer from "@/components/common/footer/Footer";
import BestSellingSection from "@/components/Sections/BestSellingSection";
import CategoriesSection from "@/components/Sections/CategoriesSection";
import FeaturedProductsSection from "@/components/Sections/FeaturedProductsSection";
import React from "react";
import AboutUsSection from "../About/AboutSection";
import HeroSection from "./hero/HeroSection";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <div className="container mx-auto p-4">
        <AboutUsSection></AboutUsSection>
        <BestSellingSection />
        <CategoriesSection />
        <FeaturedProductsSection />
      </div>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
