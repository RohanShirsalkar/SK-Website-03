import React from "react";
import Banner from "../components/Banner";
import GradientDivider from "../components/GradientDivider";
import InfoCardImgLeft from "../components/InfoCardImgLeft";
import InfoCardImgRight from "../components/InfoCardImgRight";
import InfoCardDarkBg from "../components/InfoCardDarkBg";
import SixBlockInfoGrid from "../components/SixBlockInfoGrid";

const EmployeeSkillTraining = () => {
  return (
    <div className="">
      <Banner
        heading={"TRAINING ACADEMY"}
        subHeading={"Building Tomorrow's Leaders in Logistics Excellence"}
        imagePath={"/truck_03.jpg"}
      />
      <div className="max-w-3xl mx-auto py-[80px]">
        <h1 className="text-4xl text-gray-800 font-semibold text-center mb-4">
        Employability Skills Training
        </h1>
        <div className="w-[300px] mx-auto mb-3">
          <GradientDivider />
        </div>
        <p className="text-gray-500 text-sm text-center leading-6">
          At Sk roadline , the mission of transforming lives by equipping
          professional drivers with skills that meet international standards,
          especially focusing on empowering rural youth for a brighter future.
          Over the past 15 years, NTC Training Academy has emerged as India’s
          premier institute for advanced scientific and technological training,
          offering programs that are recognized globally and tailored to the
          needs of today’s logistics and infrastructure sectors.
        </p>
      </div>
      <div className="max-w-7xl mx-auto py-8 space-y-14 px-2">
        <InfoCardImgLeft
          imagePath={"/13-1.webp"}
          heading={"Our Commitment to Skill Development and Empowerment"}
          descriptions={[
            ` At the forefront of wind energy logistics, our in-house facilities
          enable us to manufacture and customize trailers, including hydraulic
          modular trailers with self-designed bolster systems for wind blades.
          We are equipped to transport the country’s largest wind blades,
          exceeding 83 meters in length, and other over-dimensional cargo.`,
            ` As trailblazers in the industry, we were the first in India to obtain 
          permission for fabricating and using extendable trailers. Our dynamic
          R&D team continues to innovate, producing Quad and Penta axle trailers
          that enhance our capabilities. Additionally, our subsidiary, Maha Auto
          Components (P) Ltd., supports trailer manufacturing services, enabling
          us to customize transport trailers to any dimension.`,
          ]}
        />
        <InfoCardImgLeft
          imagePath={"/15.webp"}
          heading={"Wind Equipment Logistics: Pioneers in Innovation"}
          descriptions={[
            ` At the forefront of wind energy logistics, our in-house facilities
          enable us to manufacture and customize trailers, including hydraulic
          modular trailers with self-designed bolster systems for wind blades.
          We are equipped to transport the country’s largest wind blades,
          exceeding 83 meters in length, and other over-dimensional cargo.`,
            ` As trailblazers in the industry, we were the first in India to obtain 
          permission for fabricating and using extendable trailers. Our dynamic
          R&D team continues to innovate, producing Quad and Penta axle trailers
          that enhance our capabilities. Additionally, our subsidiary, Maha Auto
          Components (P) Ltd., supports trailer manufacturing services, enabling
          us to customize transport trailers to any dimension.`,
          ]}
        />
        <InfoCardDarkBg
          imagePath={"/renewable_01.webp"}
          heading={"SOLUTIONS WE OFFER"}
          list={[
            "First and last-mile delivery",
            "FFEIC Solution",
            "Cargo Handling",
            "Chartering",
            "Stevedoring",
            "Customs House Agents",
            "Heavy Haulage and Logistics",
            "Crane Rental",
            "3PL / 4PL Logistics",
            "Factory to Foundation, Erection, Installation & Commissioning",
          ]}
        />
      </div>
      <div>
        <SixBlockInfoGrid
          title={"OUR STRENGTH"}
          items={[
            {
              icon: "🏭", // Windmill icon (using emoji as placeholder)
              text: "#1 Wind SCM Solutions in India",
              bgColor: "bg-sky-400",
            },
            {
              icon: "🚚", // Truck icon
              text: "12 GW of Machine Transported",
              bgColor: "bg-slate-800",
            },
            {
              icon: "🚛", // Fleet icon
              text: "2000+ Customized Fleet",
              bgColor: "bg-slate-800",
            },
            {
              icon: "🏗️", // Specialized trailer icon
              text: "Specialized Fleet: Blade/Tower Adaptors & Schnabel Trailer",
              bgColor: "bg-slate-800",
            },
            {
              icon: "👥", // Team icon
              text: "Highly Experienced R&D Team",
              bgColor: "bg-slate-800",
            },
            {
              icon: "🏢", // Warehouse icon
              text: "Open Warehouse Facility",
              bgColor: "bg-slate-800",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default EmployeeSkillTraining;
