import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const CategoriesSection: React.FC = () => {
  const categories = useSelector((state: RootState) => state.categories.items);

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Product Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="border p-4 rounded-md shadow-md">
            <img
              src={category.imageUrl}
              alt={category.name}
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-bold">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
