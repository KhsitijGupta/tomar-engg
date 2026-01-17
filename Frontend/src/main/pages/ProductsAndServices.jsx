import React from "react";
import { motion } from "framer-motion";

import img1 from "../../assets/prefabricated-structure.jpeg";
import img2 from "../../assets/prefabricated-shed.jpeg";
import img3 from "../../assets/fabricated-tanks.jpeg";
import img4 from "../../assets/HDPE-pipe.jpeg";
import img5 from "../../assets/Industrial-pipe.jpeg";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

/* ---------------- DATA ---------------- */

const productsAndServices = [
  {
    img: img1,
    title: "Construction Service",
    subtitle: "Prefabricated Structures",
    description:
      "Providing you the best range of Prefabricated Structures with effective & timely delivery.",
  },
  {
    img: img2,
    title: "Construction Service",
    subtitle: "Prefabricated Factory Shed",
    description:
      "We are a leading Prefabricated Factory Shed manufacturer from Bhopal, India.",
  },
  {
    img: img4,
    title: "Other Services",
    subtitle: "HDPE Pipe",
    description:
      "We are a leading supplier of high-quality HDPE Pipes from Bhopal, India.",
  },
  {
    img: img5,
    title: "Other Services",
    subtitle: "Industrial Pipe",
    description:
      "We are a trusted Industrial Pipe supplier delivering durable solutions.",
  },
  {
    img: img3,
    title: "Other Services",
    subtitle: "Fabricated Tanks",
    description:
      "We provide premium quality Fabricated Tanks for industrial use.",
  },
];

/* ---------------- ANIMATION ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

/* ---------------- COMPONENT ---------------- */

const ProductAndServices = () => {
  return (
    <>
      <Navbar />

      <div className="pt-24">
        {/* Banner */}
        <Banner
          title="Our Services"
          subtitle="Steel Structure Sheds • Fabrication & Erection & Many More"
        />

        {/* Section */}
        <div className="w-full py-10 bg-gradient-to-br from-slate-100 via-white to-slate-200">
          <div className="max-w-7xl mx-auto px-4 md:px-10">
            {/* Heading */}
            {/* <div className="mb-6 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-extrabold text-primary">
                Products & Services
              </h1>
              <span className="block mt-3 h-1 w-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto md:mx-0"></span>
            </div> */}

            {/* Cards */}
            <div className="space-y-4">
              {productsAndServices.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.015 }}
                  className={`group relative flex flex-col md:flex-row ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  } items-center rounded-[2.5rem] overflow-hidden
                  bg-white/40 backdrop-blur-2xl
                  border border-white/50
                  shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                  transition-all duration-500`}
                >
                  {/* Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-red-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

                  {/* Image */}
                  <div className="relative z-10 w-full md:w-1/2 h-56 md:h-[22rem] flex items-center justify-center p-6">
                    <img
                      src={item.img}
                      alt={item.subtitle}
                      className="w-full h-full object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 w-full md:w-1/2 px-6 py-8 md:px-12 md:py-14 text-center md:text-left">
                    <span className="inline-block mb-3 px-4 py-1 text-xs uppercase tracking-widest text-blue-700 bg-blue-100/70 rounded-full font-semibold">
                      {item.title}
                    </span>

                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                      {item.subtitle}
                    </h2>

                    <p className="mt-5 text-sm md:text-base text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
                      {item.description}
                    </p>

                    <button
                      className="mt-8 inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold text-white rounded-full
                      bg-gradient-to-r from-primary to-red-600
                      shadow-lg shadow-red-500/30
                      hover:gap-4 hover:shadow-red-500/50 transition-all duration-300"
                    >
                      Know More
                      <span className="text-lg">→</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductAndServices;
