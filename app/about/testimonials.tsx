"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVision Inc.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    content:
      "The level of innovation and technical expertise they brought to our project was outstanding. They transformed our vision into reality.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateLabs",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    content:
      "Their attention to detail and commitment to excellence has made them our go-to development partner for all our projects.",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Product Manager",
    company: "DigitalFlow",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    content:
      "The team's ability to understand our needs and deliver beyond expectations has been crucial to our success.",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Founder",
    company: "StartupPro",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
    content:
      "Working with them has been a game-changer for our business. Their solutions are innovative, scalable, and future-proof.",
  },
  {
    id: 5,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVision Inc.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    content:
      "The level of innovation and technical expertise they brought to our project was outstanding. They transformed our vision into reality.",
  },
  {
    id: 6,
    name: "Emma Davis",
    role: "Product Manager",
    company: "DigitalFlow",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    content:
      "The team's ability to understand our needs and deliver beyond expectations has been crucial to our success.",
  },
  {
    id: 7,
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateLabs",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    content:
      "Their attention to detail and commitment to excellence has made them our go-to development partner for all our projects.",
  },
];

const MotionQuote = motion(Quote);

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState(testimonials);
  const [isLoading, setIsLoading] = useState(false);
  const [direction, setDirection] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const nextPage = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentPageItems = () => {
    const start = currentPage * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  };

  const loadMoreTestimonials = () => {
    setIsLoading(true);
    setTimeout(() => {
      setItems((prevItems) => [...prevItems, ...testimonials]);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        if (!isLoading) {
          loadMoreTestimonials();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        <MotionQuote
          className="text-primary/20 w-16 h-16 mx-auto mt-6"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="relative">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -1000 : 1000 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {getCurrentPageItems().map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary/10">
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                    <motion.div
                      className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-2"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Quote className="w-4 h-4" />
                    </motion.div>
                  </div>

                  <motion.blockquote
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-gray-700 font-light italic mb-6"
                  >
                    "{item.content}"
                  </motion.blockquote>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="font-semibold text-xl text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-primary font-medium">{item.role}</p>
                    <p className="text-gray-500">{item.company}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center dark:hover:text-black gap-4 mt-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevPage}
            className={cn(
              "bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            )}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextPage}
            className={cn(
              "bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-offset-2 dark:hover:text-black focus:ring-primary"
            )}
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </motion.button>
        </div>
      </div>

      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center mt-8"
        >
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" />
        </motion.div>
      )}
    </div>
  );
}
