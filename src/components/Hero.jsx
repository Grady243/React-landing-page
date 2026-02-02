import React from 'react'
import PrimaryButton from './PrimaryButton'
import SecondButton from './SecondButton'


function Hero() {
  return (
    <section className="bg-bgMain w-full min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6">
        
        {/* Badge / small text */}
        <span className="text-sm font-medium text-primary uppercase tracking-wide">
          Build modern web experiences
        </span>

        {/* Main title */}
        <h1 className="text-title text-4xl md:text-6xl font-bold leading-tight">
          Create beautiful <br />
          <span className="text-primary">React interfaces</span>
        </h1>

        {/* Description */}
        <p className="text-body max-w-xl text-lg">
          Design and develop clean, responsive and modern user interfaces
          using React and Tailwind CSS.
        </p>

        <div className="flex gap-4 mt-4">
          <PrimaryButton>Get Started</PrimaryButton>
          <SecondButton>Learn More</SecondButton>
        </div>

      </div>
    </section>
  )
}

export default Hero

