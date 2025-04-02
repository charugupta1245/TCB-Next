"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { PhoneCall, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function GetInTouch() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      } py-16 px-6 md:px-20 relative overflow-hidden transition-colors duration-500`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Get in touch</h2>
          <p className="text-lg text-gray-400">
            Want to get in touch? We’d love to hear from you. <br /> Here’s how
            you can reach us.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="lg:w-1/2 mt-10 lg:mt-0 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Support Agent"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div className="absolute top-1/2 left-[-80px] hidden lg:block">
            <div className="w-40 h-40 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-2xl opacity-70" />
          </div>
        </motion.div>
      </div>

      {/* Cards Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Talk to Sales Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className={`rounded-xl shadow-md p-8 flex flex-col items-center text-center cursor-pointer transition ${
            theme === "dark"
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-800"
          }`}
        >
          <PhoneCall
            className={`w-10 h-10 ${
              theme === "dark" ? "text-gray-400" : "text-blue-500"
            } mb-4`}
          />
          <h3 className="text-xl font-semibold mb-2">Talk to Sales</h3>
          <p>
            Interested in HubSpot’s software? Just pick up the phone to chat
            with a member of our sales team.
          </p>
        </motion.div>

        {/* Contact Customer Support Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className={`rounded-xl shadow-md p-8 flex flex-col items-center text-center cursor-pointer transition ${
            theme === "dark"
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-800"
          }`}
        >
          <MessageCircle
            className={`w-10 h-10 ${
              theme === "dark" ? "text-gray-400" : "text-blue-500"
            } mb-4`}
          />
          <h3 className="text-xl font-semibold mb-2">
            Contact Customer Support
          </h3>
          <p className="mb-4">
            Sometimes you need a little help from your friends. Or a HubSpot
            support rep. Don’t worry… we’re here for you.
          </p>

          {/* Contact Support Button */}
          <Link href="/form">
            <button className="bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
              Contact Support
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
