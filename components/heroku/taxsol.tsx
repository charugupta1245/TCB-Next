"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function FinancialMarketsAdvisory() {
  const { theme } = useTheme();

  return (
    <section
      className={`flex flex-col md:flex-row items-center w-full min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-4">Tax Solutions</h1>
        <p className="text-lg mb-6">
          Financial Markets Advisory (FMA) provides a differentiated range of
          advisory services by leveraging the firm’s capital markets, data and
          risk analytics, technology, and financial modeling capabilities.
        </p>

        <Link href="/contact">
          <button
            className="px-6 py-3 font-semibold rounded-lg flex items-center transition-colors duration-300
      bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            <span className="mr-2">➤</span> Contact us
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image path
          alt="People climbing a snowy mountain"
          width={800} // Adjust size as needed
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
