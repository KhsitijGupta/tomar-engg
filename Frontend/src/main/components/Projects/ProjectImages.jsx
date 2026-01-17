// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 25 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

// const ProjectImages = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await axios.get("/api/project/getAllProjects"); // replace with your actual endpoint
//         setProjects(res.data.data || []);
//         console.log(res.data.data) // assuming response has { projects: [...] }
//       } catch (err) {
//         console.error("Error fetching projects:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   if (loading) {
//     return (
//       <div className="py-20 text-center text-gray-500">Loading projects...</div>
//     );
//   }

//   if (projects.length === 0) {
//     return (
//       <div className="py-20 text-center text-gray-500">
//         No projects available.
//       </div>
//     );
//   }

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-14"
//         >
//           <div className="inline-block">
//             <h2 className="text-2xl md:text-3xl font-bold text-primary">
//               Project Images
//             </h2>
//             <span className="block mx-auto mt-2 h-1 w-20 bg-red-600 rounded-full" />
//           </div>

//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             Showcasing our diverse construction projects and engineering
//             excellence across industrial infrastructure.
//           </p>
//         </motion.div>

//         {/* Image Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
//         >
//           {projects.map((project, index) => (
//             <motion.div
//               key={project._id || index}
//               variants={itemVariants}
//               whileHover={{ scale: 1.04 }}
//               className="relative aspect-4/3 overflow-hidden rounded-xl shadow-md group cursor-pointer"
//             >
//               {/* Image */}
//               <img
//                 src={project.image}
//                 alt={`Project at ${project.location}`}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />

//               {/* Gradient Overlay */}
//               <div
//                 className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent
//                               opacity-0 group-hover:opacity-100 transition duration-300"
//               />

//               {/* Text Overlay */}
//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 whileHover={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.3 }}
//                 className="absolute bottom-0 left-0 right-0 p-4 text-white"
//               >
//                 <p className="text-sm font-semibold tracking-wide">
//                   {project.location}
//                 </p>
//                 <p className="text-xs text-gray-200">
//                   Completed: {new Date(project.date).getFullYear()}
//                 </p>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ProjectImages;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

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
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null); // <-- For modal

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("/api/project/getAllProjects"); // replace with your actual endpoint
        setProjects(res.data.data || []);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-500">Loading projects...</div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="py-20 text-center text-gray-500">
        No projects available.
      </div>
    );
  }

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">~
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
              key={project._id || index}
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
              className="relative aspect-4/3 overflow-hidden rounded-xl shadow-md group cursor-pointer"
              onClick={() => setSelectedProject(project)} // <-- Open modal on click
            >
              <img
                src={project.image}
                alt={`Project at ${project.location}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent
                              opacity-0 group-hover:opacity-100 transition duration-300"
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-4 text-white"
              >
                <p className="text-sm font-semibold tracking-wide">
                  {project.location}
                </p>
                <p className="text-xs text-gray-200">
                  Completed: {new Date(project.date).getFullYear()}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)} // close when clicking outside
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-3 text-red-600 py-1 bg-white rounded-full px-2 hover:text-gray-900 text-xl font-bold"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>

            {/* Modal Content */}
            <img
              src={selectedProject.image}
              alt={selectedProject.location}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                {selectedProject.location}
              </h3>
              <p className="text-gray-600 mb-1">
                Completed: {new Date(selectedProject.date).toDateString()}
              </p>
              <p className="text-gray-700">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectImages;
