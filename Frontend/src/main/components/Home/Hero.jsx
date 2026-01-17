// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import bg from "../../../assets/banner1.png";
// import bg2 from "../../../assets/banner2.png";

// const slides = [
//   {
//     image: bg,
//     title: "Engineering Strength",
//     highlight: "Built To Last",
//     description:
//       "Delivering durable steel infrastructure with precision engineering and quality.",
//   },
//   {
//     image: bg2,
//     title: "Industrial Excellence",
//     highlight: "7+ Years of Experience",
//     description:
//       "Trusted partner for industrial sheds, warehouses, and steel structures.",
//   },
// ];

// const HeroCarousel = () => {
//   const [index, setIndex] = useState(0);
//   const navigate = useNavigate();

//   // Auto slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-[90vh] pt-24 overflow-hidden">
//       <AnimatePresence>
//         <motion.div
//           key={index}
//           className="absolute inset-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Background wrapper */}
//           <div className="absolute inset-0 z-0">
//             <img
//               src={slides[index].image}
//               alt=""
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/65" />
//           </div>

//           {/* Content */}
//           <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
//             <div className="max-w-4xl">
//               <h1 className="text-white text-3xl md:text-6xl font-bold">
//                 {slides[index].title}
//                 <br />
//                 <span className="text-secondary">
//                   {slides[index].highlight}
//                 </span>
//               </h1>

//               <p className="mt-2 text-gray-200 ">{slides[index].description}</p>

//               <div className="mt-10 flex  gap-3 justify-center">
//                 <button
//                   onClick={() => navigate("/projects")}
//                   className="px-6 py-2 bg-secondary text-white rounded-lg font-semibold hover:bg-black transition"
//                 >
//                   View Projects
//                 </button>
//                 <button
//                   onClick={() => navigate("/about-us")}
//                   className="px-6 py-2 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition"
//                 >
//                   About Us
//                 </button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>
//     </section>
//   );
// };

// export default HeroCarousel;
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bg1 from "../../../assets/banner1.png";
import bg2 from "../../../assets/banner2.png";

const STATIC_CONTENT = {
  title: "Engineering Strength",
  highlight: "Built To Last",
  description:
    "Delivering durable steel infrastructure with precision engineering and quality.",
};

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState([{ imageUrl: bg1 }, { imageUrl: bg2 }]);
  const navigate = useNavigate();

  /* ================= FETCH BANNERS ================= */
  const fetchBanners = async () => {
    try {
      const { data } = await axios.get("/api/banner/getImages");
      setSlides(data.images || []);
      console.log(data);
    } catch (error) {
      console.error("Failed to load banners", error);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    if (!slides.length) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) return null; // or loader

  return (
    <section className="relative h-[90vh] pt-24 overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img
              src={slides[index].imageUrl}
              alt="Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div className="max-w-4xl">
              <h1 className="text-white text-3xl md:text-6xl font-bold">
                {STATIC_CONTENT.title}
                <br />
                <span className="text-secondary">
                  {STATIC_CONTENT.highlight}
                </span>
              </h1>

              <p className="mt-3 text-gray-200">{STATIC_CONTENT.description}</p>

              <div className="mt-10 flex gap-3 justify-center">
                <button
                  onClick={() => navigate("/projects")}
                  className="px-6 py-2 bg-secondary text-white rounded-lg font-semibold hover:bg-black transition"
                >
                  View Projects
                </button>

                <button
                  onClick={() => navigate("/about-us")}
                  className="px-6 py-2 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition"
                >
                  About Us
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default HeroCarousel;
