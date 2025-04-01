"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

const cards = [
  {
    title: "Financial Growth",
    description: "Helping you build sustainable financial success.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Wealth Management",
    description: "Maximizing your investments with expert strategies.",
    image:
      "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Business Advisory",
    description: "Guiding your business towards greater profitability.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CardRow = () => {
  const { theme } = useTheme();
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, margin: "-100px" });

  return (
    <div
      className={`relative w-full max-w-7xl mx-auto py-20 px-8 text-center ${
        theme === "dark" ? "text-white" : "bg-white text-gray-900"
      }`}
    >
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 50, scale: 0.9 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-extrabold mb-6">Our Reach</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          1000+ Clients and Customers
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.4 }}
            className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer group`}
          >
            {/* Image with dark overlay effect */}
            <div className="relative w-full h-72">
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-50"
              />
              {/* Glassmorphism overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col justify-center items-center bg-white/20 backdrop-blur-lg text-white p-6 text-center opacity-0 group-hover:opacity-100"
              >
                <h3 className="text-2xl font-bold">{card.title}</h3>
                <p className="text-lg mt-2">{card.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

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

export default CardRow;
