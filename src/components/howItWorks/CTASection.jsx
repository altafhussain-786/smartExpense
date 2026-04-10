import React from "react";
import { catSection } from "../../data";

const CTASection = () => {
  return <div className="bg-[#f7eeea] py-16 px-4 sm:px-6 lg:px-8 text-center">
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#071133] leading-tight max-w-4xl mx-auto">
    {catSection.title}
  </h2>

  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
    <button className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transition duration-300">
      {catSection.button1}
    </button>

    <button className="w-full sm:w-auto px-8 py-4 border border-gray-300 text-[#071133] font-semibold rounded-2xl hover:bg-white transition duration-300">
      {catSection.button2}
    </button>
  </div>
</div>
};

export default CTASection;
