"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";

const taxContent1 = [
  {
    title: "Tax - International and Indian",
    description:
      "Helping with tax challenges globally. We offer seamless advisory and compliance solutions for international and Indian tax.",
    image: "/tax1.webp",
  },
  {
    title: "Service Areas",
    description:
      "We specialize in Direct Tax, Indirect Tax, and Transfer Pricing to provide comprehensive tax solutions.",
    image: "/tax2.jpg",
  },
  {
    title: "Indian Tax System",
    description:
      "The Indian tax system is well-structured, dividing tax levying powers between the Central, State, and local bodies.",
    image: "/tax3.jpg",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CardWithImage = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className={`relative p-8 rounded-2xl shadow-2xl border transition-all duration-500 ease-in-out transform hover:scale-105 overflow-hidden w-full h-96 group 
        ${
          theme === "dark"
            ? "border-gray-700 text-gray-200 bg-gray-800"
            : "border-gray-300 text-gray-900 bg-white"
        }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Image */}
      <motion.img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-700 group-hover:opacity-40"
      />

      {/* Overlay Effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl transition-opacity duration-700 
          ${hovered ? "opacity-80" : "opacity-0"} 
          ${theme === "dark" ? "bg-black/50" : "bg-black/80"}`}
      />

      {/* Content */}
      <motion.div
        className={`relative z-10 flex flex-col items-center justify-center h-full px-6 text-center transition-all duration-700 
          ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
          ${theme === "dark" ? "text-gray-200" : "text-white"}`}
      >
        <h3 className="text-3xl font-bold drop-shadow-lg">{title}</h3>
        <p className="mt-4 text-lg leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export function TaxSection1() {
  const { theme } = useTheme();

  return (
    <motion.div
      whileInView="visible"
      initial="hidden"
      viewport={{ once: false, amount: 0.2 }}
      className={`max-w-7xl mx-auto px-8 py-16 rounded-2xl 
        ${
          theme === "dark" ? "bg-black text-gray-200" : "bg-white text-gray-900"
        }`}
    >
      <motion.h2
        variants={fadeInUp}
        className="text-4xl font-extrabold mb-10 text-center tracking-wide"
      >
        Comprehensive Tax Solutions
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        className="mb-12 text-lg text-center max-w-3xl mx-auto leading-relaxed"
      >
        Navigating complex tax regulations can be challenging. Our expertise in
        international and Indian tax ensures seamless compliance and advisory
        services.
      </motion.p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {taxContent1.map((item, index) => (
          <CardWithImage key={index} {...item} />
        ))}
      </motion.div>
    </motion.div>
  );
}
