"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "next-themes";

interface Testimonial {
  name: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jyotika Raymond",
    text: "A place where you find better opportunities of Investment. Comfortable and helping environment.",
    image:
      "https://th.bing.com/th/id/OIP.gxCrcJ9wcnuS-hppF4l8ggHaHa?w=286&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Iravadi Sharma",
    text: "Good organization with good services and employees who are always ready to help their customers.",
    image:
      "https://th.bing.com/th/id/OIP.XllGVaGoGnAMdcz2pR_tMwAAAA?w=149&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Bhumika Arora",
    text: "I had wonderful internship experience with the organization.",
    image:
      "https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg",
  },
];

interface TestimonialItemProps {
  name: string;
  text: string;
  image: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({
  name,
  text,
  image,
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-center md:items-start mb-8 last:mb-0 w-full p-6 rounded-lg transition-shadow shadow-lg ${
        theme === "dark"
          ? "bg-gray-800 text-white hover:shadow-gray-600"
          : "bg-white text-gray-900 hover:shadow-xl"
      }`}
    >
      <div className="flex justify-center md:justify-start w-full md:w-1/4">
        <div className="p-4 bg-gradient-to-r from-black to-gray-700 rounded-full shadow-md flex items-center justify-center w-24 h-24">
          <motion.img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full border-4 border-white shadow-md"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      <motion.div
        className="w-full md:w-3/4 text-center md:text-left px-6"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p className="text-base md:text-lg leading-relaxed italic">{text}</p>
        <h4 className="font-semibold mt-3 text-lg">{name}</h4>
      </motion.div>
    </motion.div>
  );
};

const ClientTestimonials: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-start px-6 md:px-12 py-12 transition-colors ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900"
      }`}
    >
      <motion.h2
        className="uppercase text-2xl md:text-3xl font-bold tracking-widest text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        What Our Clients Say
      </motion.h2>
      <motion.div
        className="relative w-full max-w-3xl space-y-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {testimonials.map((item, index) => (
          <TestimonialItem key={index} {...item} />
        ))}
      </motion.div>
    </div>
  );
};

export default ClientTestimonials;
