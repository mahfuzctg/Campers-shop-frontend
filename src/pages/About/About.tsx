import AboutBanner from "@/components/Sections/Abouts/AboutBanner";
import ContactUs from "@/components/Sections/Abouts/Contact";
import GoogleMap from "@/components/Sections/Abouts/Map";
import MissionVisionSection from "@/components/Sections/Abouts/Mission";

import Team from "@/components/Sections/Abouts/Team";

const AboutPage = () => {
  return (
    <div className="min-h-[calc(100vh-100px)]">
      <AboutBanner />
      <ContactUs />
      <GoogleMap />
      <Team></Team>
      <MissionVisionSection></MissionVisionSection>
    </div>
  );
};

export default AboutPage;
