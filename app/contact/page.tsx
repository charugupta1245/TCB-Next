import React from "react";
import ContactUs from "./contact";
import Contactheroku from "@/components/heroku/contactheroku";
import Two from "./two";

const page = () => {
  return (
    <>
      <Contactheroku />
      <ContactUs />
      <Two />
    </>
  );
};

export default page;
