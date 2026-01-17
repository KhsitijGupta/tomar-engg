import { motion } from "framer-motion";
import img6 from "../../../assets/Tomar-images/s11.jpeg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutUsContent = () => {
  return (
    <section className="relative w-full my-12 md:my-24 bg-white overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-50 rounded-lg blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          {/* TEXT */}
          <motion.div variants={itemVariants} className="md:w-1/2">
            <div className="inline-block mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                About Us
              </h2>
              <span className="block mt-2 h-1 w-16 bg-red-600 rounded-lg"></span>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 text-justify mb-4 leading-relaxed"
            >
              <span className="font-bold text-lg">Tomar Engineering</span> is a
              trusted steel infrastructure and engineering company based in
              Mandideep, Bhopal (Madhya Pradesh), with 7 years of proven
              industry experience. We specialize in delivering strong, reliable,
              and efficient solutions for industrial sheds, warehouses, and
              structural steel projects.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 text-justify mb-4 leading-relaxed"
            >
              Our experienced team manages every stage of the project — from
              fabrication and erection to final completion — ensuring the
              highest standards of quality, safety, and structural precision. We
              focus on durable workmanship, practical engineering, and on-time
              delivery.
            </motion.p>


            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 mt-6 text-center">
              {[
                { value: "7+", label: "Years Experience" },
                { value: "100+", label: "Projects Delivered" },
                { value: "50+", label: "Industrial Clients" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-gray-50 rounded-lg py-4 shadow-sm"
                >
                  <p className="text-2xl font-bold text-secondary">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* IMAGE + STATS */}
          <motion.div variants={itemVariants} className="md:w-1/2">
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="aspect-4/3 overflow-hidden rounded-xl shadow-xl"
            >
              <img
                src={img6}
                alt="Steel Infrastructure Project by Tomar Engineering"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsContent;
