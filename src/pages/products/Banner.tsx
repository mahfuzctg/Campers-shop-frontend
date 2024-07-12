import bannerImage from "../../assets/images/Banner/Banner-products.jpg";

const ProductsBanner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerImage})` }}
      className="h-[200px] lg:h-[350px] opacity-70 bg-cover bg-center bg-no-repeat flex items-center justify-center my-5 "
    >
      <div className="bg-black/10 h-full w-full flex flex-col justify-end py-10">
        <div className="mx-auto text-center max-w-xl mb-8 space-y-2">
          <h2 className="text-3xl md:text-4xl  text-black font-bold text-center font-young-serif">
            Gear for every weather, every mood & every occasion.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductsBanner;
