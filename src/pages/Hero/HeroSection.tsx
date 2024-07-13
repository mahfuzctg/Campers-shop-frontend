import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const scrollingTexts = [
  "New Arrivals",
  "Limited Time Offer",
  "Free Shipping on Orders Over $50",
  "Exclusive Camping Gear",
];

const HeroSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    const textElement = textRef.current;
    let textIndex = 0;

    const updateText = () => {
      if (textElement) {
        textElement.textContent = scrollingTexts[textIndex];
        textIndex = (textIndex + 1) % scrollingTexts.length;
      }
    };

    const intervalId = setInterval(updateText, 3000);
    updateText(); // Initial call

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    controls.start({
      y: [0, -30, 0],
      opacity: [1, 0.5, 1],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 2,
      },
    });
  }, [controls]);

  return (
    <section className="relative h-screen bg-black text-white">
      <img
        src="/src/assets/images/Banner/hero-png.png"
        alt="Hero"
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute bottom-0 w-full text-center p-4 bg-white bg-opacity-30 text-black">
        <div ref={textRef} className="text-lg font-semibold"></div>
      </div>
      <div className="absolute bottom-20 text-center p-4 w-full ">
        <motion.div
          animate={controls}
          className="text-4xl font-bold  my-8 mx-auto rounded-xl "
        >
          Welcome to Campers Shop
        </motion.div>
        <motion.p
          className="text-xl bg-black bg-opacity-20 w-3/6 mx-auto rounded-xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
        >
          Explore top-quality gear designed for your outdoor escapades.
        </motion.p>
        <button
          onClick={() => navigate("/products")}
          className="mt-6 py-2 px-4  bg-orange-600 text-white font-bold  hover:bg-gray-500 rounded-xl opacity-85"
        >
          Explore More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
