"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Can I retire early?",
    answer: "Retiring early requires careful financial planning.",
  },
  {
    question: "Are my investments working hard enough?",
    answer: "You should evaluate your investment portfolio regularly.",
  },
  {
    question: "What’s a good approach for college savings?",
    answer: "Consider tax-advantaged accounts like 529 plans.",
  },
  {
    question: "What are the elements of a sound estate strategy?",
    answer:
      "A good estate plan includes a will, trusts, and power of attorney.",
  },
  {
    question: "Do I have enough life insurance for my family?",
    answer: "Assess your coverage based on your family's future needs.",
  },
  {
    question: "How can I reduce my tax liability?",
    answer: "Use tax-efficient investments and deductions to optimize savings.",
  },
  {
    question: "Should I invest in stocks or real estate?",
    answer: "Diversify your investments based on risk tolerance and goals.",
  },
  {
    question: "How much should I save for emergencies?",
    answer: "Aim for 3-6 months of living expenses in an emergency fund.",
  },
  {
    question: "What retirement accounts should I use?",
    answer:
      "Consider 401(k), IRA, and Roth IRA options for retirement savings.",
  },
];

export default function FAQ() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-10 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="absolute top-5 right-5 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

      {/* FAQ Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border rounded-lg p-5 bg-white dark:bg-gray-800 shadow-md cursor-pointer"
            onClick={() => toggleFAQ(index)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <span className="text-gray-500 dark:text-gray-400">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <motion.p
                className="mt-2 text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
