import React from 'react';

const SolutionsWeOffer = () => {
  return (
    
    <div className="bg-[#16324F] rounded-lg overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
      
      {/* Left Side - Text List */}
      <div className="text-white md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          SOLUTIONS WE OFFER
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mb-6"></div>

        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>First and last-mile delivery</li>
          <li>FFEIC Solution</li>
          <li>Cargo Handling</li>
          <li>Chartering</li>
          <li>Stevedoring</li>
          <li>Customs House Agents</li>
          <li>Heavy Haulage and Logistics</li>
          <li>Crane Rental</li>
          <li>3PL / 4PL Logistics</li>
          <li>Factory to Foundation, Erection, Installation & Commissioning</li>
        </ul>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 mt-8 md:mt-0 relative">
        <img
          src="RENEWABLES.webp" // 👈 Replace this with actual image path
          alt="Solutions We Offer"
          className="rounded-tr-[80px] rounded-br-[80px] object-cover w-full h-full"
        />
      </div>

    </div>
  );
};

export default SolutionsWeOffer;
