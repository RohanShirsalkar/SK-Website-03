import React from "react";

const Banner = ({ heading, subHeading, imagePath }) => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${imagePath}')` }}
      />

      {/* Gradient Overlay - right dark to left transparent */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/80">
        {/* Content Container */}
        <div className="max-w-6xl mx-auto h-full flex items-center justify-start">
          <div className="text-white pr-16 pl-4 md:w-1/2 md:pr-24">
            <h1 className="text-2xl md:text-5xl lg:text-5xl font-semibold mb-4 drop-shadow-lg">
              {heading}
            </h1>
            <p className="text-lg md:text-xl mb-8 drop-shadow-md">
              {subHeading}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
