"use client";

import { motion } from "framer-motion";
import { Shield, Coins, Banknote, TrendingUp } from "lucide-react";

// Heading Animation
const headingVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Corrected Circle Animation
const circleVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Services Data
const services = [
  { id: 1, title: "Risk Management", icon: Shield },
  { id: 2, title: "Tax Solutions", icon: Coins },
  { id: 3, title: "Retirement Planning", icon: Banknote },
  { id: 4, title: "Investment Growth", icon: TrendingUp },
];

export default function ServicesSection() {
  return (
    <section className="w-full mt-4 py-16 text-center bg-white dark:bg-black">
      {/* Animated Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-10"
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        We Can Help You Address:
      </motion.h2>

      {/* Animated Service Cards */}
      <div className="flex justify-center gap-8 flex-wrap">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={service.id}
              className="w-40 h-40 md:w-48 md:h-48 hover:bg-gray-200 bg-white dark:bg-gray-800 shadow-lg rounded-full flex flex-col items-center justify-center text-center px-6 py-8"
              variants={circleVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              custom={index}
              whileHover={{ scale: 1.1 }} // Added hover effect
            >
              <IconComponent className="text-blue-600 dark:text-gray-200 w-12 h-12" />
              <p className="text-sm md:text-lg font-semibold text-gray-700 dark:text-white mt-3">
                {service.title}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
