import React from "react";

const GradientDivider = () => {
  return (
    <div className="relative w-full h-[2px]">
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
};

export default GradientDivider;
