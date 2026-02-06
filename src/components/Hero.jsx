import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondButton from "./SecondButton";
import pana from "../assets/pana.png";

function Hero() {
  return (
    <section className="bg-bgMain min-h-[90vh] flex items-center justify-between">
      <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 md:px-24">
        
        {/* LEFT SIDE — TEXT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-5 items-center md:items-start text-center md:text-left">
          <h1 className="text-title text-5xl md:text-6xl font-bold leading-tight">
            Let's Started Your{" "}
            <span className="text-primary">Online Lesson</span> With us
          </h1>

          <p className="text-body max-w-md text-justify text-base mt-4 md:text-left">
            Unlock hands-on, project-based courses designed to boost your skills in technology, design, and innovation—learn at your own pace, anytime, anywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <PrimaryButton>Get Started</PrimaryButton>
            <SecondButton>Learn More</SecondButton>
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={pana}
            alt="Hero illustration"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
