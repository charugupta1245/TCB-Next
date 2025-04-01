"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Briefcase, BarChart, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";

// Card Icon Component
const CardIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-400 text-white shadow-md mb-4 dark:bg-primary">
    <Icon className="w-8 h-8 dark:text-black" />
  </div>
);

// Feature list
const features = [
  {
    title: "Personalized Analysis",
    description:
      "Thorough analysis of your unique personal risk profile and financial needs.",
    icon: Briefcase,
  },
  {
    title: "Tailor-made Solutions",
    description:
      "Specific options and recommendations for strengthening your financial stature.",
    icon: BarChart,
  },
  {
    title: "Experienced Experts",
    description:
      "Get the best advice from young yet experienced and talented advisors in financial domains.",
    icon: Shield,
  },
];

const FeatureCards = () => {
  return (
    <div className="py-16 px-6 max-w-6xl mx-auto text-center">
      {/* Heading Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          We provide the best financial solutions with expert advice, innovative
          tools, and secure strategies.
        </p>
        <Link href="#">
          <button className="mt-4 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 dark:bg-primary dark:hover:bg-gray-400 dark:text-black transition">
            Let's Get Started
          </button>
        </Link>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="w-80 mx-auto hover:shadow-lg transition-shadow duration-300 p-6 relative group bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
              <CardHeader className="flex flex-col items-center text-center">
                <CardIcon icon={feature.icon} />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>

              {/* Right Arrow on Hover */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white shadow-md dark:bg-primary">
                  <ArrowRight className="w-5 h-5 dark:text-black" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
