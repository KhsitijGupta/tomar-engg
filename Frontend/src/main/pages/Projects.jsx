import ProjectImages from "../components/Projects/ProjectImages";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <>
    <Navbar/>
      <div className="pt-24">
        <Banner
          title="Our Projects"
          subtitle="Delivering Strong & Reliable Steel Infrastructure"
        />
        <ProjectImages />
      </div>
      <Footer/>
    </>
  );
};
export default Projects;
