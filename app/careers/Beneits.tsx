import React from "react";
import { motion } from "framer-motion";
import {
  Laptop,
  Heart,
  TrendingUp,
  DollarSign,
  BookOpen,
  HeartPulseIcon,
} from "lucide-react";

const EmployeeBenefits = () => {
  const benefits = [
    {
      icon: <Laptop className="text-blue-500 dark:text-white" />,
      title: "Remote Work",
      description: "Work from anywhere",
    },
    {
      icon: <Heart className="text-blue-500 dark:text-white" />,
      title: "Health Insurance",
      description: "Medical coverage",
    },
    {
      icon: <TrendingUp className="text-blue-500 dark:text-white" />,
      title: "Career Growth",
      description: "Growth opportunities",
    },
    {
      icon: <HeartPulseIcon className="text-blue-500 dark:text-white" />,
      title: "Unlimited PTO",
      description: "Flexible vacation policy",
    },
    {
      icon: <DollarSign className="text-blue-500 dark:text-white" />,
      title: "Competitive Salary",
      description: "Great pay & benefits",
    },
    {
      icon: <BookOpen className="text-blue-500 dark:text-white" />,
      title: "Learning Budget",
      description: "Courses & books stipend",
    },
  ];

  return (
    <section className="text-center space-y-8">
      <h2 className="text-4xl font-bold">Perks & Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-6 rounded-lg shadow-lg transform hover:scale-110 hover:shadow-xl hover:bg-blue-50 dark:hover:bg-gray-500 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EmployeeBenefits;
