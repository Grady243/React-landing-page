import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaDumbbell,
  FaBullhorn,
  FaCamera,
  FaChalkboardTeacher,
  FaPalette,
  FaBriefcase,
} from "react-icons/fa";

function Category() {
  return (
    <section className="bg-bgMain flex justify-center items-center py-20">
      <div className="container flex flex-col items-center justify-center  gap-10 px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-medium text-center text-title">
          Explore Our Categories
        </h2>
        <h3 className="text-text text-justify w-[85%] text-body md:w-[65%] md:text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          fugit id nemo quo tempore maxime perspiciatis ab nobis saepe corrupti
          atque sit ratione eum veniam.
        </h3>

        <div className="flex flex-wrap justify-center  gap-9 md:flex">
    
          <div className="bg-bgSoft  flex flex-col items-center justify-center gap-3 p-6  rounded-xl shadow-xl w-[90%] h-44 md:w-56 md:h-56 hover:scale-105 transition">
            <FaCode className="text-4xl text-primary" />
            <span className="font-medium text-title text-2xl text-center md:text-xl">
              Development
            </span>
          </div>
          <div className="bg-bgSoft  flex flex-col items-center justify-center gap-3 p-6  rounded-xl shadow-xl w-[90%] h-44 md:w-56 md:h-56 hover:scale-105 transition">
            <FaPaintBrush className="text-4xl text-primary" />
            <span className="font-medium text-title text-xl text-center">
              Graphic Design
            </span>
          </div>
          <div className="bg-bgSoft  flex flex-col items-center justify-center gap-3 p-6  rounded-xl shadow-xl w-[90%] h-44 md:w-56 md:h-56 hover:scale-105 transition">
            <FaDumbbell className="text-4xl text-primary" />
            <span className="font-medium text-title text-xl text-center">
              Health Fitness
            </span>
          </div>
          <div className="bg-bgSoft  flex flex-col items-center justify-center gap-3 p-6  rounded-xl shadow-xl w-[90%] h-44 md:w-56 md:h-56 hover:scale-105 transition">
            <FaBullhorn className="text-4xl text-primary" />
            <span className="font-medium text-title text-xl text-center">
              Digital marketing
            </span>
          </div>
          <div className="bg-bgSoft  flex flex-col items-center justify-center gap-3 p-6  rounded-xl shadow-xl w-[90%] h-44 md:w-56 md:h-56 hover:scale-105 transition">
            <FaCamera className="text-4xl text-primary" />
            <span className="font-medium text-title text-xl text-center">
              Photography
            </span>
          </div>
          <div className="bg-bgSoft  flex flex-col items-center justify-center gap-3 p-6  rounded-xl shadow-xl w-[90%] h-44 md:w-56 md:h-56 hover:scale-105 transition">
            <FaChalkboardTeacher className="text-4xl text-primary" />
            <span className="font-medium text-title text-xl text-center">
              Teaching
            </span>
          </div>
          <div className="bg-bgSoft  flex flex-col items-center justify-center gap-3 p-6  rounded-xl shadow-xl w-[90%] h-44 md:w-56 md:h-56 hover:scale-105 transition">
            <FaPalette className="text-4xl text-primary" />
            <span className="font-medium text-title text-xl text-center">
              Painting
            </span>
          </div>
          <div className="bg-bgSoft  flex flex-col items-center justify-center gap-3 p-6  rounded-xl shadow-xl w-[90%] h-44 md:w-56 md:h-56 hover:scale-105 transition">
            <FaBriefcase className="text-4xl text-primary" />
            <span className="font-medium text-title text-xl text-center">
              Business
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
