import React from "react";
import GradientDivider from "./GradientDivider";
import {} from "lucide-react";

const SixBlockInfoGrid = ({ items = [], title }) => {
  return (
    <div className="py-12 px-4">
      {/* Heading with underline */}
      <div className="text-center ">
        <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
        <div className="max-w-60 mx-auto mb-6">
          <GradientDivider />
        </div>
      </div>

      {/* Grid layout for strength items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className={`bg-gray-800 hover:bg-sky-400 text-white p-6 flex items-center rounded-sm`}
          >
            <span className="text-2xl mr-4">{item.icon}</span>
            <span className="font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SixBlockInfoGrid;
