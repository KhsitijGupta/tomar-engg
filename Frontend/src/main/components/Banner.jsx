import React from "react";
import { motion } from "framer-motion";
import bannerImg from "../../assets/Tomar-images/banner.jpg";

const Banner = ({ title, subtitle, height = "180px" }) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.6),
          rgba(0,0,0,0.6)
        ), url(${bannerImg})`,
        height: height,
      }}
      className="w-full bg-cover bg-center flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-white text-2xl md:text-3xl font-bold"
        >
          {title}
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-200 mt-3 text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Banner;
