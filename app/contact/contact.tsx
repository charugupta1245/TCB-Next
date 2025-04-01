// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// import { MapPin, Phone, Mail, Globe } from "lucide-react";
// import Contactone from "@/components/Contactone";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     let valid = true;
//     const newErrors = { name: "", email: "", phone: "", message: "" };

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//       valid = false;
//     }

//     if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Valid email is required";
//       valid = false;
//     }

//     if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = "Valid 10-digit phone number required";
//       valid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form submitted:", formData);
//       alert("Your message has been sent!");
//       setFormData({ name: "", email: "", phone: "", message: "" });
//     }
//   };

//   return (
//     <>
//       <div className="bg-gray-100 mt-0 dark:bg-gray-900 min-h-screen flex flex-col items-center p-6">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl font-bold text-black dark:text-white mb-6"
//         >
//           Contact Us
//         </motion.h2>
//         {/* Contact Form Section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
//         >
//           {/* Image Section */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="hidden md:block"
//           >
//             <img
//               src="https://th.bing.com/th/id/OIP.2ZABYoh6jxCX23a5c3kKZAHaFZ?rs=1&pid=ImgDetMain"
//               alt="Contact Illustration"
//               className="w-full h-full object-cover rounded-lg shadow-md"
//             />
//           </motion.div>

//           {/* Form Section */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="w-full"
//           >
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-gray-700 dark:text-gray-300">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full p-3 border rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-gray-500"
//                 />
//                 {errors.name && (
//                   <p className="text-red-500 text-sm">{errors.name}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-gray-700 dark:text-gray-300">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full p-3 border rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-gray-500"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm">{errors.email}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-gray-700 dark:text-gray-300">
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full p-3 border rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-gray-500"
//                 />
//                 {errors.phone && (
//                   <p className="text-red-500 text-sm">{errors.phone}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-gray-700 dark:text-gray-300">
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={4}
//                   className="w-full p-3 border rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-gray-500"
//                 ></textarea>
//                 {errors.message && (
//                   <p className="text-red-500 text-sm">{errors.message}</p>
//                 )}
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="submit"
//                 className="w-full bg-black dark:bg-gray-600 text-white p-3 rounded-md hover:bg-gray-800 dark:hover:bg-gray-500 transition"
//               >
//                 Send Message
//               </motion.button>
//             </form>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mt-10 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-10 w-full max-w-4xl mx-auto text-center"
//         >
//           <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
//             Get in Touch With Us
//           </h3>

//           <div className="text-gray-700 dark:text-gray-300 space-y-5 text-lg">
//             <div className="flex items-center gap-4 justify-center">
//               <MapPin className="text-orange-500 w-6 h-6" />
//               <p>
//                 <strong>Address:</strong> South City 1, Sector 41, Gurugram
//               </p>
//             </div>
//             <div className="flex items-center gap-4 justify-center">
//               <Phone className="text-green-500 w-6 h-6" />
//               <p>
//                 <strong>Phone:</strong> +91 124 428 427
//               </p>
//             </div>
//             <div className="flex items-center gap-4 justify-center">
//               <Mail className="text-blue-500 w-6 h-6" />
//               <p>
//                 <strong>General Enquiry:</strong>{" "}
//                 <a
//                   href="mailto:contactus@thecapitalbox.com"
//                   className="text-orange-500 hover:underline"
//                 >
//                   contactus@thecapitalbox.com
//                 </a>
//               </p>
//             </div>
//             <div className="flex items-center gap-4 justify-center">
//               <Mail className="text-purple-500 w-6 h-6" />
//               <p>
//                 <strong>HR Enquiry:</strong>{" "}
//                 <a
//                   href="mailto:jobs@thecapitalbox.com"
//                   className="text-orange-500 hover:underline"
//                 >
//                   jobs@thecapitalbox.com
//                 </a>
//               </p>
//             </div>
//             <div className="flex items-center gap-4 justify-center">
//               <Globe className="text-indigo-500 w-6 h-6" />
//               <p>
//                 <strong>Website:</strong>{" "}
//                 <a
//                   href="https://TheCapitalBox.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-orange-500 hover:underline"
//                 >
//                   TheCapitalBox.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </>
//   );
// };

// export default ContactUs;
// Full component structure with form and hero section
"use client";

import Head from "next/head";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Contact() {
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
