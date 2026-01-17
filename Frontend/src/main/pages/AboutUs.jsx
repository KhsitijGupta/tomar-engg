import AboutUsContent from "../components/About-us/AboutUsContent";
import AboutUsIntro from "../components/About-us/AboutUsContent";
import TestimonialSlider from "../components/About-us/TestimonialSlider";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import MapSection from "../components/MapSection";
import Navbar from "../components/Navbar";
import OurClients from "../components/OurClients";
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="relative pt-24">
        <Banner
          title="About Tomar Engineering"
          subtitle="Engineering Excellence in Steel Structures & Industrial Sheds"
        />
        <AboutUsContent />
        <OurClients />
        <TestimonialSlider />
        <Footer/>
      </div>
    </>
  );
};

export default AboutUs;
