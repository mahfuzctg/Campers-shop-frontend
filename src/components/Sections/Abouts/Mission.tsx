import {
  FaBullseye,
  FaGlobe,
  FaHandHoldingHeart,
  FaLightbulb,
  FaRocket,
  FaStar,
} from "react-icons/fa";

const missionData = [
  {
    id: 1,
    icon: <FaBullseye />,
    title: "Focus on Quality",
    description:
      "We strive to deliver high-quality products that exceed customer expectations.",
  },
  {
    id: 2,
    icon: <FaLightbulb />,
    title: "Innovate Continuously",
    description:
      "Innovation is at the heart of our business, pushing boundaries and setting new standards.",
  },
  {
    id: 3,
    icon: <FaHandHoldingHeart />,
    title: "Customer First",
    description:
      "Our customers are our top priority, and we aim to provide exceptional service and support.",
  },
];

const visionData = [
  {
    id: 1,
    icon: <FaStar />,
    title: "Be a Market Leader",
    description:
      "Our vision is to be a leader in our industry, recognized for excellence and innovation.",
  },
  {
    id: 2,
    icon: <FaGlobe />,
    title: "Global Impact",
    description:
      "We aim to make a positive impact on a global scale through our products and practices.",
  },
  {
    id: 3,
    icon: <FaRocket />,
    title: "Drive Growth",
    description:
      "Our goal is to drive growth through innovation, customer satisfaction, and sustainable practices.",
  },
];

const MissionVisionSection = () => {
  return (
    <section className="my-20 lg:my-28 max-w-screen-xl mx-auto px-3 lg:px-0">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-orange-500 text-center uppercase py-5">
          Our Mission & Vision
        </h2>
        <p className="text-gray-600 font-roboto">
          Our mission and vision are at the core of everything we do. They guide
          our efforts and inspire us to reach new heights.
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          <div className="flex-none w-full flex space-x-4">
            <div className="flex-none w-full flex-shrink-0">
              <h3 className="text-2xl text-gray-600 font-semibold mb-4"></h3>
              <div className="flex space-x-4">
                {missionData.map((item) => (
                  <div
                    key={item.id}
                    className="flex-none w-80 bg-white p-6 rounded-lg shadow-md text-center space-y-4 group relative overflow-hidden transition-all duration-300 hover:bg-gradient-to-r from-orange-500 via-gray-500 to-orange-500 hover:text-white"
                  >
                    <div className="text-orange-500 text-4xl group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-600 font-roboto group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-none w-full flex-shrink-0">
              <h3 className="text-2xl text-gray-600 font-semibold mb-4"></h3>
              <div className="flex space-x-4">
                {visionData.map((item) => (
                  <div
                    key={item.id}
                    className="flex-none w-80 bg-white p-6 rounded-lg shadow-md text-center space-y-4 group relative overflow-hidden transition-all duration-300 hover:bg-gradient-to-r from-gray-500 via-orange-500 to-gray-500 hover:text-white"
                  >
                    <div className="text-green-500 text-4xl group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-600 font-roboto group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-none w-full flex space-x-4">
            <div className="flex-none w-full flex-shrink-0">
              <h3 className="text-2xl text-gray-600 font-semibold mb-4"></h3>
              <div className="flex space-x-4">
                {missionData.map((item) => (
                  <div
                    key={item.id}
                    className="flex-none w-80 bg-white p-6 rounded-lg shadow-md text-center space-y-4 group relative overflow-hidden transition-all duration-300 hover:bg-gradient-to-r from-orange-500 via-gray-500 to-orange-500 hover:text-white"
                  >
                    <div className="text-orange-500 text-4xl group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-600 font-roboto group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-none w-full flex-shrink-0">
              <h3 className="text-2xl text-gray-600 font-semibold mb-4"></h3>
              <div className="flex space-x-4">
                {visionData.map((item) => (
                  <div
                    key={item.id}
                    className="flex-none w-80 bg-white p-6 rounded-lg shadow-md text-center space-y-4 group relative overflow-hidden transition-all duration-300 hover:bg-gradient-to-r from-gray-500 via-orange-500 to-gray-500 hover:text-white"
                  >
                    <div className="text-green-500 text-4xl group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-600 font-roboto group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
