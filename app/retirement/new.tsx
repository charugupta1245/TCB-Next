"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";

const paragraphVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function New() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="w-full flex flex-col md:flex-row items-center md:items-start py-16 px-8 md:px-16 gap-12">
      {/* Left Side - Text */}
      <motion.div
        className="w-full md:w-1/2 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={paragraphVariant}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-200">
          Plan Your retirement with us
        </h2>
        <p
          className={`text-lg md:text-xl leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Whatever your dream is, you need to plan for it now. Because once you
          retire, you will no longer receive a salary/earn regular income. And
          to sustain your daily expenses and live your golden years, you will
          need a financial back-up. The only difference in life post-retirement
          is that you continue living, but you might not have a fixed flow of
          income. And in order to remain independent, you need to save and
          invest for your future now. And mind you, mere savings in the bank
          won't be enough. Mainly because of the inflation bug. Inflation is the
          rise in price of goods and services. And hence the value of your money
          declines because of inflation.
        </p>
        <p
          className={`mt-6 text-lg md:text-xl leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          We firmly believe that it all starts with having a clear vision of
          your unique goals. With this clarity, we combine objective advice and
          experience-led execution to bring the collective vision to life. We
          offer every client true peace of mind. We define peace of mind as a
          deeply rooted confidence that comes from feeling in control and
          knowing your financial plan is built on a foundation of increasing
          self-knowledge and awareness. It is at this critical juncture – the
          intersection of proactive planning and peace of mind – that we believe
          our clients have the highest potential to realize their goals.
        </p>
        <p
          className={`mt-6 text-lg md:text-xl leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          We firmly believe that it all starts with having a clear vision of
          your unique goals. With this clarity, we combine objective advice and
          experience-led execution to bring the collective vision to life. We
          offer every client true peace of mind. We define peace of mind as a
          deeply rooted confidence that comes from feeling in control and
          knowing your financial plan is built on a foundation of increasing
          self-knowledge and awareness. It is at this critical juncture – the
          intersection of proactive planning and peace of mind – that we believe
          our clients have the highest potential to realize their goals.
        </p>
      </motion.div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-end relative">
        <div className="relative w-full max-w-lg">
          <Image
            src="https://plus.unsplash.com/premium_photo-1682434178120-bafe9b318ffe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
            width={600}
            height={400}
            className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 rounded-lg opacity-50" />
        </div>
      </div>
    </section>
  );
}

{
  /* 
          {[
            "Whatever your dream is, you need to plan for it now. Because once you retire, you will no longer receive a salary/earn regular income. And to sustain your daily expenses and live your golden years, you will need a financial back-up. The only difference in life post-retirement is that you continue living, but you might not have a fixed flow of income. And in order to remain independent, you need to save and invest for your future now. And mind you, mere savings in the bank won't be enough. Mainly because of the inflation bug. Inflation is the rise in price of goods and services. And hence the value of your money declines because of inflation.",
            "We firmly believe that it all starts with having a clear vision of your unique goals. With this clarity, we combine objective advice and experience-led execution to bring the collective vision to life. We offer every client true peace of mind. We define peace of mind as a deeply rooted confidence that comes from feeling in control and knowing your financial plan is built on a foundation of increasing self-knowledge and awareness. It is at this critical juncture – the intersection of proactive planning and peace of mind – that we believe our clients have the highest potential to realize their goals.",
            "Our vision as a firm focuses on helping others achieve financial goals, as well as understanding each client's unique purpose, mission, and values. We strive to empower clients by offering education, tools, and resources aimed at facilitating clear communication and bringing definition to their ambitions and objectives. Each client has different ideas about what makes life great. We take the burden out of managing the financial details so clients can enjoy life's journey and live out their unique purpose. We strive to be a force of calm, a navigator in the face of anxiety and uncertainty that all too often accompany financial success.",
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-lg mb-4"
              variants={paragraphVariant}
              initial="hidden"
              animate="visible"
              custom={index + 3}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default New; */
}
