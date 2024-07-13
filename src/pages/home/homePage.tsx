import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import CategorySection from "@/components/Categories/Category";
import FeaturedSection from "@/components/Featured/FeaturedSection";
import FAQSection from "@/components/Sections/FAQ/FACSection";
import BestSelling from "@/components/Sections/Selling/BestSelling";
import HeroSection from "../Hero/HeroSection";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <HeroSection />
      <div className="container">
        <div data-aos="fade-up">
          <BestSelling />
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <CategorySection />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <FeaturedSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <FAQSection />
        </div>
      </div>
    </>
  );
};

export default HomePage;
