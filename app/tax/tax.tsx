"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";

const paragraphVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function Taxsecond() {
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
          Tax - International and Indian
        </h2>
        <p
          className={`text-lg md:text-xl leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Helping with tax challenges, wherever you are in the world. If you’re
          a global business juggling the complex and diverse tax rules of
          multiple markets, it can be hard to stay on top. TCB can help solve
          your tax challenges. We offer in-depth, up-to-date knowledge of the
          relevant local rules and regulations.
        </p>
        <h3 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-gray-200">
          Our Services:
        </h3>
        <ul
          className={`mt-4 space-y-3 text-lg ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <li>✔ Direct tax (Income Tax, Wealth Tax)</li>
          <li>✔ Indirect tax (Customs duties, Central Excise, Service Tax)</li>
          <li>✔ Transfer pricing</li>
          <li>✔ Advisory on taxation and exchange control regulations</li>
          <li>✔ Expatriate taxation advisory services</li>
          <li>✔ Assistance with Goods and Services Tax (GST) transition</li>
        </ul>
        <h3 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-gray-200">
          Why Choose TCB?
        </h3>
        <ul
          className={`mt-4 space-y-3 text-lg ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <li>✔ World’s fastest-growing network of tax and consulting firms</li>
          <li>✔ Extensive experience in tax advisory and compliance</li>
          <li>✔ Dedicated team of highly qualified professionals</li>
        </ul>
      </motion.div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-end relative">
        <div className="relative w-full max-w-lg">
          <Image
            src="https://plus.unsplash.com/premium_photo-1682434178120-bafe9b318ffe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Tax Solutions"
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
