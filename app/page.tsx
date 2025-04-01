"use client";

import AppointmentForm from "@/components/book";
import CardRow from "@/components/Fourth";
import ClientTestimonials from "@/components/Testimonial";
import MissionVisionValues from "@/components/Third";
// import { Button } from "@/components/ui/button";
import First from "@/components/ui/First";
import FeatureCards from "@/components/ui/Second";
import StarPerformerCards from "@/components/ui/Starperformerslider";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <First />
      <FeatureCards />
      <MissionVisionValues />
      <CardRow />
      <StarPerformerCards />
      <AppointmentForm />
      <ClientTestimonials />
    </>
  );
}
// return (
//     <main>
//       <section className="relative">
//         <div className="container mx-auto px-4 py-32">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-3xl"
//           >
//             <h1 className="text-5xl font-bold mb-6">
//               Unlock Your Financial Potential with The Capital Box
//             </h1>
//             <p className="text-xl text-muted-foreground mb-8">
//               Expert financial solutions tailored to your needs. We help you grow, protect, and manage your wealth with confidence.
//             </p>
//             <Button size="lg" className="group">
//               Get Started
//               <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Button>
//           </motion.div>
//         </div>
//         <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
//       </section>

//       <section className="py-24 bg-muted/50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           >
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="p-6 rounded-lg bg-card"
//               >
//                 <feature.icon className="h-12 w-12 mb-4 text-primary" />
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-muted-foreground">{feature.description}</p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   )
// }

// const features = [
//   {
//     title: "Expert Guidance",
//     description: "Get personalized financial advice from our team of experienced professionals.",
//     icon: ArrowRight,
//   },
//   {
//     title: "Innovative Solutions",
//     description: "Access cutting-edge financial products and investment opportunities.",
//     icon: ArrowRight,
//   },
//   {
//     title: "Secure Future",
//     description: "Build long-term wealth with our proven strategies and risk management.",
//     icon: ArrowRight,
//   },
// ]
