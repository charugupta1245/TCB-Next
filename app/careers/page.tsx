"use client";

import React from "react";
import Head from "next/head";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const CareersPage = () => {
  const { theme } = useTheme();

  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      description:
        "We are looking for a skilled Frontend Developer to join our team building modern web applications with React and Next.js.",
      responsibilities: [
        "Develop and maintain user interfaces using React.js",
        "Optimize applications for maximum performance",
        "Collaborate with designers and backend developers",
        "Implement responsive design principles",
      ],
      requirements: [
        "3+ years of experience with React.js",
        "Proficiency in JavaScript, HTML, and CSS",
        "Experience with Next.js is a plus",
        "Strong problem-solving skills",
      ],
    },
  ];

  const benefits = [
    { icon: "💻", title: "Remote Work", description: "Work from anywhere" },
    { icon: "🏥", title: "Health Insurance", description: "Medical coverage" },
    { icon: "📈", title: "Career Growth", description: "Growth opportunities" },
    {
      icon: "🏖️",
      title: "Unlimited PTO",
      description: "Flexible vacation policy",
    },
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Great pay & benefits",
    },
    {
      icon: "🧠",
      title: "Learning Budget",
      description: "Courses & books stipend",
    },
  ];

  return (
    <div className="p-6 space-y-12 bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-300">
      <Head>
        <title>Careers | Join Our Team</title>
        <meta
          name="description"
          content="Explore career opportunities and join our growing team"
        />
      </Head>

      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 text-black dark:text-white text-center py-16 rounded-xl shadow-lg transition-all duration-300"
      >
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
          Build the Future with Us
        </h1>
        <p className="text-lg mb-6">
          We're looking for talented people to join our mission.
        </p>
        <a
          href="#openings"
          className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full shadow-md hover:scale-105 transition duration-300"
        >
          View Open Positions
        </a>
      </motion.header>
      <br></br>
      <br></br>

      <br></br>
      {/* Our Values Section */}
      <section className="text-center space-y-8">
        <h2 className="text-4xl font-bold">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Innovation", "Collaboration", "Integrity", "Growth"].map(
            (value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{value}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value === "Innovation"
                    ? "We push boundaries."
                    : value === "Collaboration"
                    ? "We work together."
                    : value === "Integrity"
                    ? "We do the right thing."
                    : "We invest in growth."}
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>
      <br></br>
      <br></br>

      <br></br>
      {/* Benefits Section */}
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
              className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <br></br>
      <br></br>

      <br></br>

      {/* Job Openings Section */}
      <section id="openings" className="space-y-8">
        <h2 className="text-4xl font-bold text-center">Current Openings</h2>
        <div className="space-y-6">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-300"
            >
              <h3 className="text-2xl font-bold">{job.title}</h3>
              <br></br>
              <div className="flex space-x-4 text-gray-600 dark:text-gray-300">
                <span>{job.department}</span>
                <span>{job.type}</span>
                <span>{job.location}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {job.description}
              </p>
              <br></br>
              <a
                href={`/apply?position=${encodeURIComponent(job.title)}`}
                className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md hover:scale-200 transition duration-300"
              >
                Apply Now
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
