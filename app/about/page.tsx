import ServicesSection from "@/components/aboutsec";
import AboutUs from "@/components/aboutus";
import FaqSection from "@/components/ques";
import React from "react";
import ConsultationServices from "./services";
import Testimonialslide from "./testimonials";
import FinanceHero from "@/components/heroku";
// import Testimonialslide from "./testimonials";

const page = () => {
  return (
    <div>
      <FinanceHero />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <AboutUs />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ServicesSection />
      <FaqSection />
      {/* <Testimonialslide /> */}
      <br></br>
      <br></br>
      <ConsultationServices />
      <br></br>
      <br></br>
      <Testimonialslide />
    </div>
  );
};

export default page;
