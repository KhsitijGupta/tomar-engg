import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

import img6 from "../../../assets/Tomar-images/s11.jpeg";
import img7 from "../../../assets/Tomar-images/s16.jpeg";
import img8 from "../../../assets/Tomar-images/s18.jpeg";
import img11 from "../../../assets/Tomar-images/s14.jpeg";

const projects = [
  { img: img6, title: "Industrial Steel Shed" },
  { img: img7, title: "Warehouse Structure" },
  { img: img8, title: "Heavy Steel Fabrication" },
  { img: img11, title: "Manufacturing Facility" },
];

const FeaturedProjects = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];
  const sideProjects = projects.filter((_, i) => i !== activeIndex);

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
            className="md:col-span-2 h-105 relative overflow-hidden rounded-xl shadow-lg group"
          >
            {/* IMAGE */}
            <img
              src={activeProject.img}
              alt={activeProject.title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div
              className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent
                  opacity-100 group-hover:from-black/80 transition-all duration-500"
            />

            {/* TEXT CONTENT */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl md:text-2xl font-bold">
                {activeProject.title}
              </h3>

              <p className="mt-2 text-sm md:text-base text-gray-200 max-w-md">
                Precision-engineered steel infrastructure designed for
                durability, performance, and long-term industrial use.
              </p>
            </div>
          </motion.div>

          {/* SIDE IMAGES */}
          <div className="grid grid-cols-2 gap-6 h-100">
            {sideProjects.map((project, index) => (
              <motion.div
                key={index}
                onClick={() =>
                  setActiveIndex(
                    projects.findIndex((p) => p.img === project.img)
                  )
                }
                className="relative cursor-pointer overflow-hidden rounded-xl shadow-md group h-50"
              >
                <img
                  src={project.img}
                  alt={project.title}
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
