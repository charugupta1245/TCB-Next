import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "next-themes";
import Link from "next/link";

const First = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <main>
      <section className="relative">
        <div className="container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-xl text-muted-foreground mb-8">
              Money and Peace Together
            </p>
            <h1 className="text-5xl font-bold mb-6">
              We are your personal CFO <br />
              <span className={isDarkMode ? "text-white" : "text-blue-500"}>
                <Typewriter
                  words={[" Investments", " Consultation", " Taxation"]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={160}
                  deleteSpeed={80}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We have helped hundreds of clients to realize their financial
              goals. Our services have provided them with time they can enjoy
              with their family without getting worried.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className={`group 
      bg-blue-700 text-white hover:bg-blue-800 
      dark:bg-white dark:text-black dark:hover:bg-gray-300`}
              >
                Get Financial Advice
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </section>
    </main>
  );
};

export default First;
