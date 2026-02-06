import React from "react";

function CategoriesCard() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-6 bg-bgMain rounded-xl shadow-lg w-36 h-36 md:w-44 md:h-44 hover:scale-105 transition">
      <FaCode className="text-4xl text-primary" />
      <span className="font-medium text-title text-center">Development</span>
    </div>
  );
}

export default CategoriesCard;
