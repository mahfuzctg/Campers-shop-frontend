import { Card, CardContent } from "@/root/ui/card";
import { FaQuoteLeft } from "react-icons/fa";
import image1 from "../../../assets/images/user/user-1.png";
import image2 from "../../../assets/images/user/user-2.png";
import image3 from "../../../assets/images/user/user-4.png";
import image4 from "../../../assets/images/user/user-5.png";

const testimonialData = [
  {
    id: 1,
    name: "Liam Turner",
    image: image1,
    description:
      "Campers Shop turned our camping experience into a memorable adventure! The equipment was top-quality and the support team was fantastic. We felt well-prepared and safe throughout our trip.",
  },
  {
    id: 2,
    name: "Emma Williams",
    image: image2,
    description:
      "Finding Campers Shop was a game-changer for our hiking trips. Their gear is incredibly durable and comfortable. It made our outdoor adventures much more enjoyable. Highly recommended!",
  },
  {
    id: 3,
    name: "Noah Brown",
    image: image3,
    description:
      "Campers Shop has exceeded all my expectations. The online shopping process was smooth, and the products were exactly as described. The camping stove worked perfectly. I’ll definitely be back for more!",
  },
  {
    id: 4,
    name: "Olivia Smith",
    image: image4,
    description:
      "My experience with Campers Shop was exceptional. The gear I ordered was high-quality, delivery was prompt, and the customer service was excellent. Our weekend getaway was a breeze thanks to them!",
  },
];

const TestimonialSection = () => {
  return (
    <div>
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <p
          data-aos="fade-up"
          className="text-orange-500 font-semibold text-sm md:text-lg"
        >
          TESTIMONIALS
        </p>
        <h2
          data-aos=""
          className="text-3xl md:text-4xl uppercase text-gray-600 font-bold text-center font-roboto"
        >
          Our Satisfied Customers
        </h2>
        <p data-aos="fade-up" className="text-gray-600 font-roboto">
          Discover how our products and services have made a difference in the
          lives of our clients.
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {testimonialData.map((item) => (
            <div key={item.id} className="flex-none w-full flex-shrink-0">
              <div className="p-4">
                <Card data-aos="fade-left">
                  <CardContent className="flex flex-col h-[310px] items-center justify-center p-6 space-y-4">
                    <div className="flex flex-col items-center space-y-2">
                      <img
                        className="h-20 w-20 rounded-full object-cover"
                        src={item.image}
                        alt={item.name}
                      />
                      <p className="text-xl font-semibold text-gray-600">
                        {item.name}
                      </p>
                    </div>
                    <div className="text-center">
                      <FaQuoteLeft className="w-12 h-12 font-roboto text-orange-500 mx-auto" />
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
