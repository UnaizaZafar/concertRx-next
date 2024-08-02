import React from "react";

const About = () => {
  return (
    <>
      <div className="h-screen px-72 py-24 flex flex-col gap-6">
        <h1 className=" font-bold text-5xl text-center text-[#27272A]">
          About Us
        </h1>
        <p className="font-normal text-2xl text-center">
          We are a group of{" "}
          <span className="font-medium italic "> “Passionate healthcare” </span>
          and technology professionals “Committed to building software
          solutions” in the Pharma InfoTech space. We focus our work on
          increasing ”Patient safety” and efficiency in pharmacy.
        </p>
      </div>
    </>
  );
};

export default About;
