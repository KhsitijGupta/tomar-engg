import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";

const FeaturedProjects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("/api/project/getAllProjects"); // your backend route
        console.log(res.data.data);
        setProjects(res.data.data); // expecting an array of projects
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="w-full py-20 bg-white text-center">
        <p className="text-gray-600">Loading projects...</p>
      </section>
    );
  }

  if (!projects.length) {
    return (
      <section className="w-full py-20 bg-white text-center">
        <p className="text-gray-600">No projects available.</p>
      </section>
    );
  }

  const activeProject = projects[activeIndex];
  const sideProjects = projects.filter((_, i) => i !== activeIndex);
  const newprojects = sideProjects.slice(0, 4);
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-block">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Featured Projects
            </h2>
            <span className="block mx-auto mt-2 h-1 w-20 bg-red-600 rounded-lg" />
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Browse our portfolio to see how we’ve brought industrial visions to
            life with engineering excellence.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* BIG IMAGE */}
          <motion.div
            key={activeIndex}
            className="md:col-span-2 h-[420px] relative overflow-hidden rounded-xl shadow-lg group"
          >
            <img
              src={activeProject.image} // image from backend
              alt={activeProject.projectName}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:from-black/80 transition-all duration-500" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl md:text-2xl font-bold">
                {activeProject.projectName}
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-200 max-w-md">
                {activeProject.description}
              </p>
              <p className="mt-1 text-gray-300 text-sm">
                Location: {activeProject.location}
              </p>
            </div>
          </motion.div>

          {/* SIDE IMAGES */}
          <div className="grid grid-cols-2 gap-6 h-[420px]">
            {newprojects.map((project) => (
              <motion.div
                key={project._id}
                onClick={() =>
                  setActiveIndex(
                    projects.findIndex((p) => p._id === project._id),
                  )
                }
                className="relative cursor-pointer overflow-hidden rounded-xl shadow-md group h-[200px]"
              >
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/projects");
            }}
            className="px-8 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-black transition"
          >
            See All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
