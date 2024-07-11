import React, { useEffect, useState } from "react";

// Sample image URLs (Replace with your actual image URLs)
const images = [
  "https://via.placeholder.com/1200x600?text=Slide+1",
  "https://via.placeholder.com/1200x600?text=Slide+2",
  "https://via.placeholder.com/1200x600?text=Slide+3",
];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle image slider autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
      </div>
      {/* Scrolling Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-4">
        <p className="text-lg font-semibold whitespace-nowrap animate-marquee">
          Your scrolling text goes here. It can be a catchy slogan or any
          message you want to convey.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
