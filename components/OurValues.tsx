// components/OurValues.tsx

import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaShieldAlt, FaRegChartBar } from "react-icons/fa"; // Example icons, you can choose different ones

const OurValues = () => {
  const values = [
    {
      title: "Innovation",
      description: "We push boundaries.",
      icon: <FaRocket className="text-4xl text-blue-500 dark:text-white" />,
    },
    {
      title: "Collaboration",
      description: "We work together.",
      icon: <FaUsers className="text-4xl text-blue-500 dark:text-white" />,
    },
    {
      title: "Integrity",
      description: "We do the right thing.",
      icon: <FaShieldAlt className="text-4xl text-blue-500 dark:text-white" />,
    },
    {
      title: "Growth",
      description: "We invest in growth.",
      icon: (
        <FaRegChartBar className="text-4xl text-blue-500 dark:text-white" />
      ),
    },
  ];

  return (
    <section className="text-center py-12 px-4 bg-white dark:bg-black">
      <h2 className="text-4xl font-extrabold text-black dark:text-white mb-8">
        Our Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {values.map((value, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-xl flex flex-col items-center justify-center transform hover:scale-105 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-500"
          >
            <div className="mb-4">{value.icon}</div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              {value.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
