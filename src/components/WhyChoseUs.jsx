import React from "react";

const WhyChoseUs = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className=" py-12 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/ship.jpeg"
              alt="Why Choose Us"
              className="max-w-xs md:max-w-sm bg-cover bg-center"
            />
          </div>

          {/* Right text content */}
          <div className="w-full md:w-1/2">
            <h4 className="text-blue-700 font-semibold text-sm uppercase mb-2">
              Why Choose Us
            </h4>
            <h2 className="text-3xl font-bold  leading-tight mb-4">
              Reliable, Scalable, and Efficient Logistics Solutions
            </h2>
            <p className="text-gray-300 mb-6">
              With decades of industry experience and a strong nationwide
              network, S K Road Lines and Transport is your trusted partner in
              logistics. We deliver cost-effective, technology-driven, and
              secure transport services across India, ensuring unmatched
              reliability and customer satisfaction.
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>Advanced GPS-Equipped Fleet</li>
              <li>24/7 Dedicated Customer Support</li>
              <li>Customized & Scalable Transport Solutions</li>
              <li>Strong Nationwide Coverage</li>
              <li>Competitive Pricing with Quality Service</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;
