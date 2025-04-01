"use client";

import React from "react";
import { useTheme } from "next-themes";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const taxData = [
  {
    title: "Tax Planning",
    description:
      "Optimize your tax savings with expert planning and strategies tailored for your financial growth.",
  },
  {
    title: "Business Taxation",
    description:
      "Ensure compliance and minimize tax liabilities for your business with our professional services.",
  },
  {
    title: "Personal Tax Advisory",
    description:
      "Get personalized advice to manage your income tax effectively and maximize deductions.",
  },
];

const TaxSection = () => {
  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {taxData.map((item, index) => (
        <Card
          key={index}
          className={`relative text-center p-6 hover:shadow-lg transition-all duration-300 group border 
            ${
              theme === "dark"
                ? "bg-gray-900 text-gray-200 border-gray-700"
                : "bg-white text-gray-900 border-gray-300"
            }
          `}
        >
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{item.description}</CardDescription>
          </CardContent>
          {/* Arrow Button on Hover */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowRight className="w-6 h-6 text-primary" />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TaxSection;
