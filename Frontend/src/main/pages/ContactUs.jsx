import Banner from "../components/Banner";
import ContactFormAndLocation from "../components/ContactFormAndLocation";
import Footer from "../components/Footer";
import MapSection from "../components/MapSection";
import Navbar from "../components/Navbar";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="relative pt-24">
        <Banner
          title="Contact Us"
          subtitle="Let’s Build Strong Steel Solutions Together"
        />
        <ContactFormAndLocation />
        <MapSection />
      </div>
      <Footer/>
    </>
  );
};
export default ContactUs;
