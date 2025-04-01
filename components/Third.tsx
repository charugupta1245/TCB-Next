"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

const slides = [
  {
    title: "Our Mission",
    description:
      "Empowering businesses and individuals with innovative financial solutions that drive success and stability.",
    image:
      "https://www.weather.gov/images/epz/OfficeHistoryPix/EPZoffice2003.jpg",
  },
  {
    title: "Our Vision",
    description:
      "To be the leading provider of cutting-edge financial tools, helping people achieve their dreams through smart investments.",
    image:
      "https://wallpapers.com/images/hd/office-pictures-o18phx25lgau3xvi.jpg",
  },
  {
    title: "Our Values",
    description:
      "Integrity, innovation, and excellence define our approach to creating sustainable financial growth.",
    image:
      "https://i.pinimg.com/originals/26/eb/c8/26ebc8a8c8d3ea4e5290d7c58901b4ab.jpg",
  },
];

const MissionVisionValues = () => {
  const [index, setIndex] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto py-20 px-8 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 leading-snug">
        We Always Fight For You to Win The Financial Battle in All Life Stages.
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
        We partner with clients in long-term, trusted financial advisory
        relationships.
      </p>

      {/* Slider Container */}
      <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white dark:bg-gray-800 p-12 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex flex-col md:flex-row items-center gap-12 w-full"
          >
            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-2/3 lg:w-1/2">
              <Image
                src={slides[index].image}
                alt={slides[index].title}
                width={700}
                height={450}
                className="rounded-xl shadow-lg object-cover w-full h-[400px]"
              />
            </div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2 text-left"
            >
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {slides[index].title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {slides[index].description}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="mt-8 flex justify-center space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-4 w-4 rounded-full transition-all ${
              index === i
                ? "bg-black dark:bg-white w-6"
                : "bg-gray-400 dark:bg-gray-500"
            }`}
          />
        ))}
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-10 flex justify-center">
        <Link href="#">
          <button className="px-8 py-4 bg-blue-700 dark:bg-white text-white dark:text-black text-lg font-semibold rounded-full hover:bg-blue-800 dark:hover:bg-gray-300 transition flex items-center gap-2 shadow-lg">
            Get Started
            <span className="w-7 h-7 flex items-center justify-center bg-white dark:bg-black text-gray-600 dark:text-white rounded-full transition-transform duration-300">
              ➜
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MissionVisionValues;
