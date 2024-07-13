import bannerImage from "../../assets/images/Banner/CamperShop-banner1.jpg";
import "./../../index.css";

const ProductsBanner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerImage})` }}
      className="h-[500px] lg:h-[550px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
    >
      <div className="bg-black/40 h-full w-full flex flex-col justify-end py-10">
        <div className="mx-auto text-center max-w-xl mb-8 space-y-2">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-center font-young-serif bounce-animation gradient-text"
          >
            Discover the perfect gear for every journey and every season.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductsBanner;
