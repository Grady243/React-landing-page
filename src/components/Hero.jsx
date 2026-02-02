import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondButton from "./SecondButton";
import heroImage from "../assets/hero-image.webp";

function Hero() {
  return (
    <section className="px-6 bg-bgMain w-full min-h-[100vh] flex flex-col-reverse items-center justify-center gap-8">
      {/* LEFT SIDE — TEXT */}
      <div className="w-full flex flex-col justify-center items-center ">
        <h1 className="text-title text-4xl font-bold leading-tight">
          Create beautiful <br />
          <span className="text-primary">React interfaces</span>
        </h1>

        <p className="text-body max-w-md text-lg mt-4 text-center">
          Design and develop clean, responsive and modern user interfaces using
          React and Tailwind CSS.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <PrimaryButton>Get Started</PrimaryButton>
          <SecondButton>Learn More</SecondButton>
        </div>
      </div>

      {/* RIGHT SIDE — VISUAL */}
      <div className="w-full  flex justify-center items-center ">
        <div className="w-64 h-64 bg-bgSoft rounded-full">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover"
          />{" "}
        </div>
      </div>
    </section>
  );
}

export default Hero;
