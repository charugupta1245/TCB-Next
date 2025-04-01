"use client";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const NetworkingSolutionsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      comment:
        "Their networking solutions transformed our business operations. Seamless connectivity across all our offices.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Global Solutions",
      comment:
        "The security implementation was flawless. Our data has never been more protected.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Digital Ventures",
      comment:
        "24/7 network monitoring gives us peace of mind. Highly recommend their managed services.",
      rating: 4,
    },
    {
      id: 4,
      name: "David Wilson",
      company: "Enterprise Systems",
      comment:
        "Cloud networking integration was done ahead of schedule. Excellent team to work with.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-blue-200 p-4 md:p-8">
      <Head>
        <title>
          Advanced Networking Solutions | Your Reliable Network Partner
        </title>
        <meta
          name="description"
          content="Comprehensive networking solutions for modern enterprises with cutting-edge technology and expert implementation."
        />
      </Head>

      {/* Header Section */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 py-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-700 hover:text-gray-600 transition duration-300">
          Advanced Networking Solutions
        </h1>
        <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
          Empowering your business with cutting-edge network infrastructure,
          security, and cloud solutions tailored to your needs.
        </p>
      </motion.header>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto">
        {/* Network Infrastructure Section */}
        <motion.section
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Network Infrastructure Design & Implementation
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris. Vivamus hendrerit arcu sed erat molestie
                vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
                porttitor. Ut in nulla enim. Phasellus molestie magna non est
                bibendum non venenatis nisl tempor. Suspendisse dictum feugiat
                nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id
                metus massa, ut blandit odio.
              </p>
              <p className="text-gray-700 mb-4">
                Proin at quam eros. Donec sed lobortis diam. Nulla facilisi.
                Donec egestas ligula vitae odio interdum aliquet. Duis lectus
                turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra
                et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie
                lectus ultrices et. Sed diam urna, egestas ut ipsum vel,
                volutpat volutpat neque. Praesent fringilla tortor arcu.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://itworksdubai.com/wp-content/uploads/2023/11/Network-Solution.jpg"
                alt="Network Infrastructure"
                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 max-h-80 object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Security Solutions Section */}
        <motion.section
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Comprehensive Network Security Solutions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-last lg:order-first">
              <img
                src="https://itworksdubai.com/wp-content/uploads/2023/11/Network-Solution.jpg"
                alt="Network Security"
                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 max-h-80 object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris. Vivamus hendrerit arcu sed erat molestie
                vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
                porttitor. Ut in nulla enim. Phasellus molestie magna non est
                bibendum non venenatis nisl tempor. Suspendisse dictum feugiat
                nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id
                metus massa, ut blandit odio.
              </p>
              <p className="text-gray-700 mb-4">
                Proin at quam eros. Donec sed lobortis diam. Nulla facilisi.
                Donec egestas ligula vitae odio interdum aliquet. Duis lectus
                turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra
                et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie
                lectus ultrices et. Sed diam urna, egestas ut ipsum vel,
                volutpat volutpat neque. Praesent fringilla tortor arcu.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Cloud Networking Section */}
        <motion.section
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Cloud Networking & Hybrid Solutions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris. Vivamus hendrerit arcu sed erat molestie
                vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
                porttitor. Ut in nulla enim. Phasellus molestie magna non est
                bibendum non venenatis nisl tempor. Suspendisse dictum feugiat
                nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id
                metus massa, ut blandit odio.
              </p>
              <p className="text-gray-700 mb-4">
                Proin at quam eros. Donec sed lobortis diam. Nulla facilisi.
                Donec egestas ligula vitae odio interdum aliquet. Duis lectus
                turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra
                et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie
                lectus ultrices et. Sed diam urna, egestas ut ipsum vel,
                volutpat volutpat neque. Praesent fringilla tortor arcu.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://itworksdubai.com/wp-content/uploads/2023/11/Network-Solution.jpg"
                alt="Cloud Networking"
                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 max-h-80 object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Managed Services Section */}
        <motion.section
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            24/7 Managed Network Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-last lg:order-first">
              <img
                src="https://itworksdubai.com/wp-content/uploads/2023/11/Network-Solution.jpg"
                alt="Managed Services"
                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 max-h-80 object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris. Vivamus hendrerit arcu sed erat molestie
                vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
                porttitor. Ut in nulla enim. Phasellus molestie magna non est
                bibendum non venenatis nisl tempor. Suspendisse dictum feugiat
                nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id
                metus massa, ut blandit odio.
              </p>
              <p className="text-gray-700 mb-4">
                Proin at quam eros. Donec sed lobortis diam. Nulla facilisi.
                Donec egestas ligula vitae odio interdum aliquet. Duis lectus
                turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra
                et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie
                lectus ultrices et. Sed diam urna, egestas ut ipsum vel,
                volutpat volutpat neque. Praesent fringilla tortor arcu.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-12">
            Happy Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.comment}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-700">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center py-12 bg-gray-700 rounded-xl shadow-lg mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Network Infrastructure?
          </h2>
          <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
            Our team of networking experts is ready to design, implement, and
            manage the perfect solution for your business needs.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-block bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            Contact Our Team
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
};

export default NetworkingSolutionsPage;
