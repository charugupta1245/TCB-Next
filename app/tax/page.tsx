// import Tax from "@/components/onetax";

import React from "react";
import ConsultationServices from "../about/services";
import { TaxSection1 } from "@/components/twotax";
import Testimonials from "../about/testimonials";
import TaxSection from "@/components/threetax";
import FinancialMarketsAdvisory from "@/components/heroku/taxsol";

const page = () => {
  return (
    <div>
      <FinancialMarketsAdvisory />
      {/* <Tax /> */}
      <TaxSection1 />
      <br />
      <br />
      <br />
      <ConsultationServices />
      <br />
      <br />
      <br />
      <TaxSection />

      <br />
      <br />
      <Testimonials />
    </div>
  );
};

export default page;
