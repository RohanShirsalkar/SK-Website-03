import React from "react";

const OurIndustries = () => {
  const industries = [
    {
      title: "Renewable Energy - Wind & Solar",
      image: "/tata01.webp",
      description:
        "Pioneering sustainable solutions through wind and solar technologies to drive the global transition to clean energy.",
    },
    {
      title: "Oil and Gas",
      image: "/oil-and-gas.webp",
      description:
        "Optimizing extraction, processing, and distribution while implementing eco-friendly practices for a balanced energy portfolio.",
    },
    {
      title: "Power Transmission & Distribution",
      image: "/Power-Transmission-Distribution.webp",
      description:
        "Building resilient grid infrastructure with smart technologies to ensure reliable power delivery across communities.",
    },
    {
      title: "Engineering & Manufacturing",
      image: "/Engineering-Manufacturing.webp",
      description:
        "Transforming production processes with automation and precision engineering for superior quality and efficiency.",
    },
    {
      title: "Mobility",
      image: "/Mobility-metro.webp",
      description:
        "Revolutionizing transportation networks with integrated solutions that enhance connectivity and reduce environmental impact.",
    },
    {
      title: "Consumer Durables",
      image: "/Consumer-Durables.webp",
      description:
        "Creating long-lasting products that combine functionality, aesthetics, and sustainability for modern households.",
    },
    {
      title: "Auto & Auto Components",
      image: "/auto-1.webp",
      description:
        "Advancing automotive excellence through precision-engineered components and next-generation vehicle technologies.",
    },
    {
      title: "E-Commerce",
      image: "/E-Commerce-1.webp",
      description:
        "Empowering digital retail experiences with innovative platforms that connect consumers with products seamlessly.",
    },
    {
      title: "Pharmaceuticalse",
      image: "/Pharmaceuticals-1.webp",
      description:
        "Innovating healthcare access with smart platforms that ensure safe, efficient, and connected pharmaceutical distribution.",
    },
    {
      title: "FMCG",
      image: "/FMCG-2.webp",
      description:
        "Transforming everyday consumer engagement with agile digital solutions that drive convenience, loyalty, and rapid market reach.",
    },
  ];
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <h2 className="text-4xl font-bold text-center mb-6">
          Industries We Focus
        </h2>

        <p className="text-center mb-12 max-w-4xl mx-auto">
          SK Road Lines & Transport is dedicated to driving progress across
          various industries, harnessing our expertise to deliver innovative
          solutions and transformative results. Our focus extends beyond
          traditional boundaries, addressing emerging trends and opportunities
          in various sectors to ensure comprehensive growth and advancement.
        </p>

        {/* Industries Grid: 4x2 with hover effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative overflow-hidden group mb-4 h-64"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover"
              />

              {/* Static title overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-50 p-4 transition-all duration-500 ease-in-out cursor-pointer">
                <p className="font-medium text-white">{industry.title}</p>
              </div>

              {/* Hover description overlay - slides up from bottom */}
              <div className="absolute inset-0 bg-blue-800 text-gray-100 bg-opacity-90 p-6 flex flex-col justify-center items-center text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                <p className="text-sm">{industry.description}</p>
                {/* <button className="mt-4 px-4 py-2 bg-white text-blue-800 font-medium rounded hover:bg-blue-100 transition-colors duration-200">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurIndustries;
