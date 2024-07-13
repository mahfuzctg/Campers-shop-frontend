import category1 from "../../assets/images/Category/category-1.jpg";

import category10 from "../../assets/images/Category/category-10.jpg";
import category2 from "../../assets/images/Category/category-2.jpg";
import category4 from "../../assets/images/Category/category-4.jpg";
import category5 from "../../assets/images/Category/category-5.jpg";
import category6 from "../../assets/images/Category/category-6.jpg";
import category7 from "../../assets/images/Category/category-7.jpg";
import category8 from "../../assets/images/Category/category-8.jpg";
import category9 from "../../assets/images/Category/category-9.jpg";

const categoryData = [
  {
    id: 1,
    name: "Camping Gear",
    image: category1,
    description: "High-quality gear for all your camping needs.",
  },
  {
    id: 2,
    name: "Camping Gear",
    image: category2,
    description: "High-quality gear for all your camping needs.",
  },
  {
    id: 2,
    name: "Camping Essentials",
    image: category4,
    description: "Essential items for a successful camping trip.",
  },
  {
    id: 3,
    name: "Outdoor Apparel",
    image: category2,
    description: "Stylish and functional clothing for outdoor adventures.",
  },
  {
    id: 4,
    name: "Footwear",
    image: category4,
    description: "Durable and comfortable footwear for various terrains.",
  },
  {
    id: 5,
    name: "Camping Cookware",
    image: category5,
    description: "Reliable cookware for cooking in the great outdoors.",
  },
  {
    id: 6,
    name: "Sleeping Bags",
    image: category6,
    description: "Warm and cozy sleeping bags for a restful night's sleep.",
  },
  {
    id: 7,
    name: "Tents",
    image: category7,
    description: "Spacious and durable tents for all types of camping.",
  },
  {
    id: 8,
    name: "Backpacks",
    image: category8,
    description: "Comfortable and versatile backpacks for your adventures.",
  },
  {
    id: 9,
    name: "Outdoor Lighting",
    image: category9,
    description: "Effective lighting solutions for nighttime activities.",
  },
  {
    id: 10,
    name: "Survival Gear",
    image: category10,
    description: "Essential gear for safety and survival in the wild.",
  },
];

const CategorySection = () => {
  return (
    <section className="my-20 lg:my-28 px-3 lg:px-0">
      <div className="mx-auto text-center max-w-3xl mb-8 space-y-2">
        <p className="text-orange-500 uppercase font-roboto font-semibold text-sm md:text-lg">
          Products Categories
        </p>
        <h2 className="text-3xl md:text-4xl font-roboto uppercase text-gray-600 font-bold text-center font-young-serif">
          Discover Our Collection
        </h2>
        <p className="text-gray-600 font-roboto text-sm text-justify">
          Find everything you need for your next adventure, from high-quality
          tents and sleeping bags to cooking equipment and outdoor accessories.
          Browse our carefully curated categories to elevate your camping
          experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoryData.map((category) => (
          <div
            key={category.id}
            className="relative group overflow-hidden rounded-xl bg-gray-600transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              className="w-full h-[320px] object-cover rounded-xl"
              src={category.image}
              alt={category.name}
            />
            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 to-transparent">
              <div className="text-center px-4 py-2">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 uppercase font-roboto">
                  {category.name}
                </h3>
                <p className="text-white font-roboto">{category.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
