/* eslint-disable react/no-unescaped-entities */
const AboutUs = () => {
  return (
    <section className=" max-h-screen-xl  p-5 rounded-xl mx-auto my-20">
      <h2
        data-aos=""
        className="text-3xl uppercase font-roboto md:text-4xl mb-8 text-orange-500 font-bold text-center font-young-serif"
      >
        About Us
      </h2>
      <div className="flex flex-col items-center">
        <div className="w-full md:w-3/4">
          <p
            data-aos="fade-up"
            className="text-lg md:text-xl font-roboto text-justify text-gray-700 leading-relaxed mb-4"
          >
            <span className="text-orange-500">At Campers-Shop,</span> we are
            passionate about providing the best products and services for
            outdoor enthusiasts. Whether you're a seasoned camper or a weekend
            adventurer, our mission is to offer high-quality gear and
            accessories that enhance your camping experience. We are dedicated
            to ensuring that every product meets our stringent standards for
            durability, functionality, and value.
            <span className="text-orange-500">Our commitment</span> goes beyond
            just selling products. We strive to build a community of like-minded
            individuals who share a love for the great outdoors. Through our
            expertly curated selection and personalized customer service, we aim
            to help you find exactly what you need for your next adventure. At
            Campers-Shop, we're here to support your journey and make every
            camping trip memorable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
