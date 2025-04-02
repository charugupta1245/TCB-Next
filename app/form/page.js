"use client";

import Head from "next/head";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function ContactUs() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c0ebc9f1-c129-434b-b44d-4bd16a656536", // Replace with your Web3Forms access key
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | [Your Brand]</title>
        <meta
          name="description"
          content="Get in touch with our team through our contact form."
        />
        <meta property="og:title" content="Contact Us" />
        <meta
          property="og:description"
          content="Contact our support team for inquiries."
        />
      </Head>

      <div
        className={`relative isolate overflow-hidden py-24 px-6 lg:px-8 transition-colors duration-300 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="mx-auto max-w-4xl bg-opacity-50 p-8 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold">
                  Full Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ${
                      isDarkMode
                        ? "bg-gray-800 text-white ring-gray-600 focus:ring-blue-400"
                        : "text-gray-900 ring-gray-300 focus:ring-blue-600"
                    }`}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ${
                      isDarkMode
                        ? "bg-gray-800 text-white ring-gray-600 focus:ring-blue-400"
                        : "text-gray-900 ring-gray-300 focus:ring-blue-600"
                    }`}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold"
                >
                  Subject
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ${
                      isDarkMode
                        ? "bg-gray-800 text-white ring-gray-600 focus:ring-blue-400"
                        : "text-gray-900 ring-gray-300 focus:ring-blue-600"
                    }`}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ${
                      isDarkMode
                        ? "bg-gray-800 text-white ring-gray-600 focus:ring-blue-400"
                        : "text-gray-900 ring-gray-300 focus:ring-blue-600"
                    }`}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className={`rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-all duration-300 ${
                  isDarkMode
                    ? "bg-blue-500 hover:bg-blue-400 text-white"
                    : "bg-blue-600 hover:bg-blue-500 text-white"
                }`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
