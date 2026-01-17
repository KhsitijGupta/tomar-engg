import React from "react";
import { motion } from "framer-motion";

import img1 from "../../../assets/Tomar-images/s11.jpeg";
import img2 from "../../../assets/Tomar-images/s12.jpeg";
import img3 from "../../../assets/Tomar-images/s13.jpeg";
import img4 from "../../../assets/Tomar-images/s14.jpeg";
import img5 from "../../../assets/Tomar-images/s15.jpeg";
import img6 from "../../../assets/Tomar-images/s16.jpeg";
import img7 from "../../../assets/Tomar-images/s17.jpeg";
import img8 from "../../../assets/Tomar-images/s18.jpeg";
import img9 from "../../../assets/Tomar-images/s19.jpeg";
import img10 from "../../../assets/Tomar-images/s21.jpeg";
import img11 from "../../../assets/Tomar-images/s22.jpeg";
import img12 from "../../../assets/Tomar-images/s23.jpeg";

const projects = [
  { img: img1, place: "Mandideep, MP", year: "2023" },
  { img: img2, place: "Bhopal, MP", year: "2022" },
  { img: img3, place: "Indore, MP", year: "2024" },
  { img: img4, place: "Raisen, MP", year: "2023" },
  { img: img5, place: "Sehore, MP", year: "2021" },
  { img: img6, place: "Dewas, MP", year: "2022" },
  { img: img7, place: "Pithampur, MP", year: "2024" },
  { img: img8, place: "Hoshangabad, MP", year: "2023" },
  { img: img9, place: "Vidisha, MP", year: "2021" },
  { img: img10, place: "Itarsi, MP", year: "2022" },
  { img: img11, place: "Satna, MP", year: "2023" },
  { img: img12, place: "Rewa, MP", year: "2024" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ProjectImages = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Project Images
            </h2>
            <span className="block mx-auto mt-2 h-1 w-20 bg-red-600 rounded-full" />
          </div>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Showcasing our diverse construction projects and engineering
            excellence across industrial infrastructure.
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
              className="relative aspect-4/3 overflow-hidden rounded-xl shadow-md group cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.img}
                alt={`Project at ${project.place}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent
                              opacity-0 group-hover:opacity-100 transition duration-300"
              />

              {/* Text Overlay */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-4 text-white"
              >
                <p className="text-sm font-semibold tracking-wide">
                  {project.place}
                </p>
                <p className="text-xs text-gray-200">
                  Completed: {project.year}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectImages;
