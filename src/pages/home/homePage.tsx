import CategorySection from "@/components/Categories/Category";
import FeaturedSection from "@/components/Featured/FeaturedSection";
import FAQSection from "@/components/Sections/FAQ/FACSection";
import BestSelling from "@/components/Sections/Selling/BestSelling";
import HeroSection from "../Hero/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="container">
        <BestSelling></BestSelling>
        <CategorySection></CategorySection>
        <FeaturedSection></FeaturedSection>
        <FAQSection></FAQSection>
      </div>
    </>
  );
};

export default HomePage;
