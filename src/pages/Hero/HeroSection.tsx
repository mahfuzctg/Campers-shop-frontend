import { Card, CardContent } from "@/root/ui/card";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/root/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/root/ui/carousel";
import { Link } from "react-router-dom";

import carousel1 from "../../assets/images/Carousel/carousel-1.jpg";
import carousel2 from "../../assets/images/Carousel/carousel-2.jpg";

const HeroSection = () => {
  const sliderImg = [
    {
      id: 1,
      image: carousel1,
    },
    {
      id: 2,
      image: carousel2,
    },
  ];
  return (
    <section
      style={{
        backgroundImage: `url(${sliderImg})`,
      }}
      className="h-[450px] md:h-[620px] bg-cover bg-center bg-no-repeat lg:mt-2 lg:rounded-lg "
    >
      <div className="bg-gradient-to-r from-gray-600 to-gray-600/20 h-[400px] md:h-[620px] w-full lg:flex items-center justify-center gap-9 lg:rounded-lg">
        <div className="flex-1 p-4 space-y-4 flex flex-col items-center justify-center">
          <p className="text-orange-500 font-semibold text-sm md:text-xl">
            Welcome to campers shop.!
          </p>
          <h1 className="text-3xl md:text-5xl font-medium text-gray-100 font-young-serif">
            Gear for when it <br /> actually matters.
          </h1>
          <p className="lg:text-lg text-gray-300 max-w-lg text-center">
            Create your dream campsite with our camping essentials. Under the
            stars, every night is an adventure waiting to unfold.
          </p>
          <Link to="/products">
            <Button className=" text-2xl text-white bg-gray-600 rounded-xl">
              Visit
            </Button>
          </Link>
        </div>
        <div className="flex-1 relative w-full h-[150px] md:h-[300px] lg:h-[400px] px-2 lg:p-0 lg:mr-4">
          <Carousel
            className=" overflow-hidden rounded-lg shadow-lg"
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent className="flex">
              {sliderImg.map((slider) => (
                <CarouselItem key={slider.id} className="min-w-full">
                  <Card className="bg-transparent border-0">
                    <CardContent className="flex items-center justify-center h-[150px] md:h-[300px] lg:h-[400px] p-0">
                      <img
                        src={slider?.image}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        alt=""
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
              &#9664;
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
              &#9654;
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
