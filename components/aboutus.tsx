"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";

const paragraphVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function AboutUs() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="w-full flex flex-col md:flex-row items-center md:items-start py-12 px-6">
      {/* Left Side - Text */}
      <motion.div
        className="w-full md:w-1/2 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={paragraphVariant}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">About Us</h2>
        <p
          className={`text-lg md:text-xl leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Since July 14, 2016, the day we were founded, integrity has been our
          core value. We at “The Capital Box” design personal solutions to
          protect our clients’ unique lifestyles and offer lasting peace of
          mind. We strive to build long-lasting relationships with clients
          through attention to detail and commitment to superior service.
          <br />
          <br />
          We provide unparalleled consulting services, financial products and
          risk management strategies to individuals, families and businesses,
          specializing in niche markets and portfolios with complex needs. We
          firmly believe that it all starts with having a clear vision of your
          unique goals.
        </p>
      </motion.div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-end">
        <Image
          src="https://plus.unsplash.com/premium_photo-1682434178120-bafe9b318ffe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About Us"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
