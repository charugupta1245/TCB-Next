"use client";

import { useState } from "react";
import { Search, ChevronRight, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const services = [
  { id: 1, name: "Taxation", href: "/tax" },
  { id: 2, name: "Business Tax", href: "/tax" },
  { id: 3, name: "Personal Funds", href: "/risk" },
  { id: 4, name: "Insurance", href: "/retirement" },
  { id: 5, name: "Mutual Funds", href: "/risk" },
  { id: 6, name: "SIPs", href: "#" },
];

export default function ConsultationServices() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme, setTheme } = useTheme();

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="absolute top-5 right-5 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-full"
        >
          <div className="sticky top-6">
            <motion.img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
              alt="Consultation Services"
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-gray-900/40 to-gray-900/0 rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent dark:from-gray-300 dark:to-gray-100">
              Consultations
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Type a keyword and hit enter"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2
                         transition-all duration-200 shadow-sm
                         placeholder:text-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-500"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <a
                  href={service.href}
                  className="group block relative overflow-hidden"
                >
                  <motion.div
                    className={`relative z-10 px-4 py-3 rounded-lg border border-gray-100
                      flex items-center justify-between transition-all duration-200 ease-in-out
                      ${
                        hoveredIndex === index
                          ? "bg-gray-50 dark:bg-gray-800"
                          : "bg-white dark:bg-gray-900"
                      }
                    `}
                    whileHover={{ x: 4 }}
                  >
                    <span className="font-medium text-gray-700 group-hover:text-gray-900 dark:text-gray-200 dark:group-hover:text-white">
                      {service.name}
                    </span>
                    <ChevronRight
                      className={`w-5 h-5 transition-all duration-200 ${
                        hoveredIndex === index
                          ? "text-gray-800 dark:text-white"
                          : "text-gray-400 dark:text-gray-500"
                      }`}
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-100/50 to-transparent dark:from-gray-800/50 rounded-lg transition-opacity duration-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
