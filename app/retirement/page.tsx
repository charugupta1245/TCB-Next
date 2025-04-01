"use client";

import ServicesSection from "@/components/aboutsec";
import ConsultationServices from "../about/services";
import Retireherokusec from "@/components/heroku/retiresol";
import New from "./new";

export default function RetirementSolutions() {
  return (
    <>
      <Retireherokusec />
      <New />
      <ConsultationServices />
      <br /> <br /> <br /> <br />
      <ServicesSection /> <br /> <br /> <br />
    </>
  );
}
