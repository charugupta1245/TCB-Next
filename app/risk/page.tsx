import React from "react";
import ConsultationServices from "../about/services";
import { RiskSection } from "@/components/Risktwo";
// import TaxSection from "@/components/threetax";
import Testimonials from "../about/testimonials";
import RiskHeroku from "@/components/heroku/risksol";
import Risksecond from "@/components/risksec";

const page = () => {
  return (
    <div>
      <RiskHeroku />
      <br></br>
      <br></br>

      <Risksecond />

      <br></br>
      <br></br>

      {/* <TaxSection /> */}

      <br></br>
      <br></br>
      <RiskSection />

      <br></br>
      <br></br>
      {/* <TaxSection /> */}

      <br></br>
      <br></br>
      <ConsultationServices />

      <br></br>
      <br></br>
      <br />
      <br />
      <Testimonials />
    </div>
  );
};

export default page;
