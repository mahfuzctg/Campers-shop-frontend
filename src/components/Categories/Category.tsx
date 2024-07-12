import category2 from "../../assets/images/Category/category-2.jpg";
import category4 from "../../assets/images/Category/category-4.jpg";

const categoryData = [
  {
    id: 1,
    name: "Accessories",
    image: category2,
    description: "Accessories you didn't know you needed.",
  },
  {
    id: 2,
    name: "Accessories",
    image: category4,
    description: "Accessories you didn't know you needed.",
  },
  {
    id: 3,
    name: "Apparel",
    image: category2,
    description: "Check out our line of non-hiking clothes.",
  },
  {
    id: 4,
    name: "Apparel",
    image: category4,
    description: "Check out our line of non-hiking clothes.",
  },
];

const CategorySection = () => {
  return (
    <section className="my-20 lg:my-28  px-3 lg:px-0 ">
      <div className="mx-auto  text-center max-w-3xl mb-8 space-y-2">
        <p className="text-orange-500 font-semibold text-sm md:text-lg">
          Products Categories
        </p>
        <h2 className="text-3xl md:text-4xl text-gray-800 font-bold text-center font-young-serif">
          What we have in store for you.
        </h2>
        <p className="text-gray-600">
          Find everything you need for your next adventure, from high-quality
          tents and sleeping bags to cooking equipment and outdoor accessories.
          Browse our carefully curated categories to elevate your camping
          experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {categoryData.map((category) => (
          <div
            key={category.id}
            className="h-[490px]  bg-slate-500 rounded-xl group overflow-hidden relative"
          >
            <img
              className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-200"
              src={category.image}
              alt="category-image"
            />
            <div className="absolute inset-0 flex flex-col items-center pt-12 bg-black/45 group-hover:bg-black/50 transition-colors duration-200 px-[70px] text-center gap-2">
              <h3 className="text-3xl font-medium text-gray-100 font-young-serif">
                {category.name}
              </h3>
              <p className="text-gray-300 ">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
