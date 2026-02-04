import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondButton from "./SecondButton";
import pana from "../assets/pana.png";

function Hero() {
  return (
<section className="px-10 bg-bgMain w-full min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:px-20">
  {/* LEFT SIDE — TEXT */}
  <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
    <h1 className="text-title text-4xl md:text-7xl font-bold leading-tight">
      Let's Started Your
      <span className="text-primary">Online Lesson</span>With us
    </h1>

    <p className="text-body max-w-md text-m mt-4">
      Accédez à des cours pratiques et orientés projet pour développer des compétences en technologie, design et innovation, à votre rythme et depuis n’importe où.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <PrimaryButton>Get Started</PrimaryButton>
      <SecondButton>Learn More</SecondButton>
    </div>
  </div>

  {/* RIGHT SIDE — VISUAL */}
  <div className="w-full md:w-1/2 flex justify-center items-center">
    <img
        src={pana}
        alt="Hero"
        className=" h-auto object-cover"      />
  </div>
</section>
  );
}

export default Hero;
