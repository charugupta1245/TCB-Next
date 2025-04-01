"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const StarPerformerCards = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const performers = [
    {
      name: "EVAN SHASHANK LAKRA",
      imageUrl:
        "https://i.pinimg.com/originals/83/10/ab/8310ab709f70727b92fa1a6917897c82.jpg",
    },
    {
      name: "EVAN SHASHANK LAKRA",
      imageUrl:
        "https://i.pinimg.com/originals/83/10/ab/8310ab709f70727b92fa1a6917897c82.jpg",
    },
    {
      name: "EVAN SHASHANK LAKRA",
      imageUrl:
        "https://i.pinimg.com/originals/83/10/ab/8310ab709f70727b92fa1a6917897c82.jpg",
    },
    {
      name: "ROLI SHRIVASTAVA",
      imageUrl:
        "https://assets-global.website-files.com/617a981c6dfee450b8bce955/620159e6a64b71579d30bb12_IMG_6282-p-2000.jpeg",
    },
    {
      name: "RAHUL NAIK",
      imageUrl:
        "https://th.bing.com/th/id/OIP.O_HcEZ3XkQmpERdE2UTIlAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
    },
    {
      name: "RAHUL NAIK",
      imageUrl:
        "https://th.bing.com/th/id/OIP.O_HcEZ3XkQmpERdE2UTIlAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
    },
    {
      name: "RAHUL NAIK",
      imageUrl:
        "https://th.bing.com/th/id/OIP.O_HcEZ3XkQmpERdE2UTIlAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
    },
    {
      name: "RAHUL NAIK",
      imageUrl:
        "https://th.bing.com/th/id/OIP.O_HcEZ3XkQmpERdE2UTIlAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
    },
  ];

  return (
    <div
      className={`py-20 px-6 lg:px-20 overflow-hidden flex flex-col items-center transition-all duration-300 ${
        isDarkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-white to-gray-200 text-gray-900"
      }`}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold text-center mb-12"
      >
        STAR PERFORMER OF THE WEEK
      </motion.h2>

      <div className="relative w-full max-w-6xl overflow-hidden">
        <motion.div
          className="flex space-x-8"
          animate={{ x: ["20%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {performers.map((performer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 20px rgba(255, 0, 0, 0.6)",
              }}
              className={`rounded-lg shadow-lg p-6 relative overflow-hidden transition-all duration-300 w-80 flex-shrink-0 ${
                isDarkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-gray-800 text-white"
              }`}
            >
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-xl font-semibold text-center mt-4 mb-2"
              >
                STAR PERFORMER
              </motion.h3>
              <p className="text-center mb-1">of</p>
              <p className="text-2xl font-bold text-center mb-4">THE WEEK</p>
              <p className="text-center text-lg mb-6">CONGRATULATIONS!</p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex justify-center mb-6"
              >
                <img
                  src={performer.imageUrl}
                  alt={performer.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg"
                />
              </motion.div>

              <p className="text-center text-lg font-semibold mb-6">
                {performer.name}
              </p>

              <div className="absolute bottom-4 left-16">
                <motion.a
                  href="https://www.bridgegroupsolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: "#ff0000" }}
                  className="text-sm hover:text-blue-500 transition"
                >
                  www.bridgegroupsolutions.com
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StarPerformerCards;
