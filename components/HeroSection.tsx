// components/HeroSection.tsx

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 text-black dark:text-white text-center py-16 rounded-xl shadow-lg transition-all duration-300"
    >
      <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
        Build the Future with Us
      </h1>
      <p className="text-lg mb-6">
        We're looking for talented people to join our mission.
      </p>
      <a
        href="#openings"
        className="bg-blue-600 dark:bg-white text-white dark:text-black px-6 py-3 rounded-full shadow-md hover:scale-105 transition duration-300"
      >
        View Open Positions
      </a>
    </motion.header>
  );
};

export default HeroSection;
