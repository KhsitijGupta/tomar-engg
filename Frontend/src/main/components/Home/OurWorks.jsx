import { motion } from "framer-motion";
import heroVideo from "../../../assets/welding video.mp4";

const OurWorks = () => {
  return (
    <section className="relative w-full h-[65vh] overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Gradient + Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/80"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white"
      >
        {/* Heading */}
        <div className="inline-block mb-4">
          <h2 className="text-2xl md:text-4xl font-bold tracking-wide">
            Our Works
          </h2>
          <span className="block mx-auto mt-2 h-1 w-20 bg-red-600 rounded-lg" />
        </div>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-gray-200 leading-relaxed text-base md:text-lg">
          From precision-engineered steel structures to large-scale industrial
          infrastructure, we deliver turnkey solutions built to stand the test
          of time. Our integrated approach ensures quality, safety, and
          durability — every time.
        </p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <button className="px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-black transition">
            View Our Projects
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {[
            { value: "7+", label: "Years Experience" },
            { value: "100+", label: "Projects Completed" },
            { value: "50+", label: "Industrial Clients" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-lg py-4"
            >
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <p className="text-sm text-gray-300 mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurWorks;
