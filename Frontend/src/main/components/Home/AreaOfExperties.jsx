import { motion } from "framer-motion";
import {
  FaWarehouse,
  FaIndustry,
  FaBuilding,
  FaTools,
  FaCogs,
  FaHammer,
  FaProjectDiagram,
  FaTruckMoving,
} from "react-icons/fa";

const expertise = [
  {
    icon: <FaBuilding />,
    title: "Pre-Engineered Steel Buildings (PEB)",
    description:
      "Cost-effective, fast-to-build steel structures engineered for strength and durability.",
  },
  {
    icon: <FaIndustry />,
    title: "Industrial & Commercial Steel Sheds",
    description:
      "Robust shed solutions designed for factories, plants, and commercial operations.",
  },
  {
    icon: <FaWarehouse />,
    title: "Warehousing & Logistics Structures",
    description:
      "Efficient storage and logistics infrastructure optimized for space and operations.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Heavy Structural Steel Installations",
    description:
      "Precision installation of heavy steel frameworks for large-scale projects.",
  },
  {
    icon: <FaHammer />,
    title: "Structural Steel Fabrication & Erection",
    description:
      "End-to-end fabrication and erection with strict quality and safety standards.",
  },
  {
    icon: <FaCogs />,
    title: "Manufacturing & Assembly Facilities",
    description:
      "Custom-built facilities supporting industrial manufacturing and assembly lines.",
  },
//   {
//     icon: <FaTools />,
//     title: "Foundation & Sub-Structural Works",
//     description:
//       "Strong foundations and sub-structures engineered for long-term stability.",
//   },
//   {
//     icon: <FaTruckMoving />,
//     title: "Industrial Utility & Support Structures",
//     description:
//       "Supporting infrastructure designed to enhance industrial functionality.",
//   },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const AreaOfExperties = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
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
            Our Expertise
          </h2>
          <span className="block mx-auto mt-2 h-1 w-20 bg-red-600 rounded-lg" />
        </div>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Comprehensive steel construction solutions delivered with precision,
          quality, and proven industry experience.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {expertise.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-lg bg-red-50 text-secondary text-2xl"
            >
              {item.icon}
            </motion.div>

            <h3 className="text-gray-800 font-semibold text-base mb-2">
              {item.title}
            </h3>

            <p className=" text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AreaOfExperties;
