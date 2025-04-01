"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";

const paragraphVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function Risksecond() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="w-full flex flex-col md:flex-row items-center md:items-start py-16 px-8 md:px-16 gap-12">
      {/* Left Side - Text */}
      <motion.div
        className="w-full md:w-1/2 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={paragraphVariant}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-200">
          Risk Management
        </h2>
        <p
          className={`text-lg md:text-xl leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Whatever your industry, you need to ensure the safe execution and
          maintenance of your projects, operations, and business activities,
          including trade. As the world’s leading provider of risk management
          services, we can help you minimize your risks. Our project specialists
          and technical experts offer you assistance at every stage, for any
          sector, anywhere in the world.
        </p>
        <p
          className={`mt-6 text-lg md:text-xl leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          In today’s highly dynamic business environment due to globalization,
          digitization, competition, and regulatory regimes, managing risks can
          be a constant challenge for the Board of Directors, Shareholders, and
          Senior Management of your organization. While no business is immune to
          risks, identifying and managing them to create a sustainable
          enterprise is a critical task across all industries.
        </p>
        <h3 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-gray-200">
          Our Risk Management Services:
        </h3>
        <ul
          className={`mt-4 space-y-3 text-lg ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <li>✔ Risk management planning</li>
          <li>✔ Risk identification</li>
          <li>✔ Quantitative and qualitative risk analyses</li>
          <li>✔ Risk handling</li>
          <li>✔ Management of residual risk</li>
          <li>
            ✔ Independent third-party research, surveys, and market studies
          </li>
          <li>✔ Equator principles monitoring</li>
          <li>✔ Project monitoring and management</li>
          <li>✔ Product and cargo quality and quantity surveys</li>
          <li>✔ Collateral management</li>
          <li>✔ Trade risk management</li>
        </ul>
      </motion.div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-end relative">
        <div className="relative w-full max-w-lg">
          <Image
            src="https://plus.unsplash.com/premium_photo-1682434178120-bafe9b318ffe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
            width={600}
            height={400}
            className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 rounded-lg opacity-50" />
        </div>
      </div>
    </section>
  );
}
