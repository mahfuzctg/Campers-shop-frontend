import React from "react";

const AboutUsSection: React.FC = () => {
  return (
    <section className="py-12 px-4 my-16 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Video Container */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <video
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              src="https://www.w3schools.com/html/mov_bbb.mp4" // Placeholder video URL
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-base sm:text-lg mb-4">
            Welcome to Campers Shop! We are dedicated to providing the best
            camping gear and accessories to enhance your outdoor adventures. Our
            team is passionate about camping and strives to offer high-quality
            products that meet your needs. Watch the video to learn more about
            our journey and what makes us unique.
          </p>
          <p className="text-base sm:text-lg">
            Whether you are a seasoned camper or a beginner, we are here to help
            you find everything you need for your next adventure. Thank you for
            choosing Campers Shop!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
