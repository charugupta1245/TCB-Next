"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";

const riskContent = [
  {
    title: "Enterprise Risk Management",
    description:
      "We help businesses identify, assess, and mitigate risks to ensure operational resilience and long-term success.",
    image:
      "https://th.bing.com/th/id/OIP.xwhVBhYHzNSA33_2whwQiAHaFj?rs=1&pid=ImgDetMain",
  },
  {
    title: "Compliance & Regulatory Risks",
    description:
      "Our team assists in navigating complex regulatory landscapes to maintain compliance and avoid legal issues.",
    image:
      "https://cioaxis.com/wp-content/uploads/2023/09/Altri-Selects-Kyndryl-for-Cybersecurity-Services.jpg",
  },
  {
    title: "Cybersecurity & Data Protection",
    description:
      "Protecting businesses from cyber threats through robust security measures and risk assessment strategies.",
    image:
      "https://th.bing.com/th/id/OIP.rcTMAkGuSrxAIhG92RGMEgHaFQ?rs=1&pid=ImgDetMain",
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
      className={`relative p-8 rounded-xl shadow-lg border text-center overflow-hidden w-full h-80 group transition-all duration-500 ease-in-out transform hover:scale-105
        ${
          theme === "dark"
            ? "border-gray-600 text-gray-200"
            : "border-gray-300 text-gray-900"
        }
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Image */}
      <motion.img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-700"
      />

      {/* Overlay Effect */}
      <motion.div
        className={`absolute inset-0 rounded-xl transition-opacity duration-700
          ${hovered ? "opacity-90" : "opacity-10"}
          ${theme === "dark" ? "bg-black/90" : "bg-white/90"}
        `}
      />

      {/* Content */}
      <motion.div
        className={`relative z-10 flex flex-col items-center justify-center h-full px-4 text-center transition-all duration-700
          ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          ${theme === "dark" ? "text-white" : "text-black"}
        `}
      >
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export function RiskSection() {
  const { theme } = useTheme();

  return (
    <motion.div
      whileInView="visible"
      initial="hidden"
      viewport={{ once: false, amount: 0.2 }}
      className="max-w-5xl mx-auto p-6 mt-4 rounded-2xl"
    >
      <motion.h2
        variants={fadeInUp}
        className={`text-3xl font-bold mb-6 text-center
          ${theme === "dark" ? "text-gray-200" : "text-gray-800"}
        `}
      >
        Risk Management Solutions
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        className={`mb-8 text-center
          ${theme === "dark" ? "text-gray-400" : "text-gray-600"}
        `}
      >
        Managing risks is crucial for business stability. Our expertise in risk
        assessment, compliance, and cybersecurity ensures your organization
        stays protected.
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {riskContent.map((item, index) => (
          <CardWithImage key={index} {...item} />
        ))}
      </motion.div>
    </motion.div>
  );
}
