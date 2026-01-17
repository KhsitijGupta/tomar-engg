import AboutUsContent from "../components/About-us/AboutUsContent";
import TestimonialSlider from "../components/About-us/TestimonialSlider";
import ContactFormAndLocation from "../components/ContactFormAndLocation";
import Footer from "../components/Footer";
import AreaOfExperties from "../components/Home/AreaOfExperties";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import Hero from "../components/Home/Hero";
import OurWorks from "../components/Home/OurWorks";
import MapSection from "../components/MapSection";
import Navbar from "../components/Navbar";
import OurClients from "../components/OurClients";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUsContent />
      <AreaOfExperties />
      <OurWorks />
      <OurClients />
      <TestimonialSlider/>
      <FeaturedProjects />
      <ContactFormAndLocation />
      <MapSection />
      <Footer />
    </div>
  );
};
export default Home;
