import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* 🔊 Wave rings */}
      <motion.span
        className="absolute inset-0 rounded-full bg-green-500"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: 2.2, opacity: 0 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      <motion.span
        className="absolute inset-0 rounded-full bg-green-500"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: 2.2, opacity: 0 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
          delay: 1,
        }}
      />

      {/* 🔔 Button */}
      <motion.a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg"
        animate={{
          rotate: [0, 15, -15, 10, -10, 5, -5, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-3xl"
        >
          <FaWhatsapp />
        </motion.div>
      </motion.a>
    </div>
  );
};

export default WhatsAppFloat;
