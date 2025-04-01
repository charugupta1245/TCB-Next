"use client";

import React from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useTheme } from "next-themes";

interface AppointmentForm {
  name: string;
  email: string;
  phone: string;
  date: string;
}

const AppointmentForm: React.FC = () => {
  const form = useForm<AppointmentForm>({ mode: "onBlur" });
  const { handleSubmit, register } = form;
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center min-h-screen p-6 gap-8 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src="https://get.pxhere.com/photo/white-collar-worker-job-office-businessperson-employment-sitting-desk-interior-design-business-learning-1557987.jpg"
          alt="Appointment"
          className="w-full h-full max-h-[500px] object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right Side - Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`p-8 rounded-lg shadow-xl w-full md:w-1/2 max-w-lg transition-colors duration-300 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center">
          Book an{" "}
          <span className="text-blue-600 dark:text-gray-400">Appointment</span>
        </h2>
        <p className="text-center text-lg text-black dark:text-gray-200 mt-2">
          Free Consultation
        </p>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={handleSubmit((data) =>
              console.log("Form Submitted:", data)
            )}
            className="space-y-6 mt-6"
          >
            {["name", "email", "phone", "date"].map((field) => (
              <FormField
                key={field}
                control={form.control}
                name={field as keyof AppointmentForm}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block font-medium">
                      {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                    </FormLabel>
                    <FormControl>
                      <input
                        type={
                          field.name === "date"
                            ? "date"
                            : field.name === "email"
                            ? "email"
                            : "text"
                        }
                        {...field}
                        {...register(field.name as keyof AppointmentForm, {
                          required: `${field.name} is required`,
                        })}
                        className={`w-full p-3 border rounded-lg focus:ring-2 transition-colors duration-300 ${
                          isDarkMode
                            ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-400"
                            : "bg-white text-gray-900 border-gray-300 focus:ring-blue-400"
                        }`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 dark:bg-white dark:hover:bg-slate-100 dark:text-black text-white p-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Confirm Appointment
            </motion.button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
};

export default AppointmentForm;
