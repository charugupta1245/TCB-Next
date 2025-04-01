"use client";

import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.05 },
  }),
};

export default function Contactone() {
  const heading = "Contact Us";

  return (
    <section className="w-full">
      {/* Full-width Image */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[700px]">
        <img
          src="/contact.jpg"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        {/* Animated Heading Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            {heading.split("").map((char, index) => (
              <motion.span key={index} variants={textVariant} custom={index}>
                {char}
              </motion.span>
            ))}
          </h1>
        </motion.div>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
}
