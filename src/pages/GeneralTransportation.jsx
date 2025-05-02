import React from "react";
import Banner from "../components/Banner";
import GradientDivider from "../components/GradientDivider";
import InfoCardImgLeft from "../components/InfoCardImgLeft";
import InfoCardImgRight from "../components/InfoCardImgRight";
import InfoCardDarkBg from "../components/InfoCardDarkBg";
import SixBlockInfoGrid from "../components/SixBlockInfoGrid";
import InfoCardDarkBgImgRight from "../components/InfoCardDarkBgImgRight";

const GeneralTransportation = () => {
  return (
    <div className="">
      <Banner
        heading={"General Transportation"}
        subHeading={
          "Beyond Transportation, We’re Your Freight’s Security Partner"
        }
        imagePath={"/truck_03.jpg"}
      />
      <div className="max-w-3xl mx-auto py-[80px]">
        <h1 className="text-4xl text-gray-800 font-semibold text-center mb-4">
          General Transportation
        </h1>
        <div className="w-[300px] mx-auto mb-3">
          <GradientDivider />
        </div>
        <p className="text-gray-500 text-sm text-center leading-6">
          Renewable logistics is a specialized field that focuses on the
          transportation and distribution of renewable energy resources, such as
          wind, solar, and biofuels. It involves the planning, execution, and
          management of logistics operations to ensure the efficient and
          sustainable delivery of these resources from production sites to
          end-users.
        </p>
      </div>
      <div className="max-w-7xl mx-auto py-8 space-y-14 px-2">
        <InfoCardImgLeft
          imagePath={"/renewable_01.webp"}
          heading={"A Proven Track Record"}
          descriptions={[
            ` With nearing three decades of experience in the industry, we have a proven track record of delivering reliable and successfull transportaiton of millions of tonnes goods across various regions achieving 99.9% on-time delivery. timely transportation services. We handle consignments up to 50 tons and provide 24/7 logistics management to meet your specific requirements.`,
            ` With a fleet of well-maintained vehicles, we’ve built a reputation for handling consignments from 1 MT to 50 MT, 24/7 Logistics management, consistent delivery (even under tight timelines) & Meeting Customer specifications.`,
          ]}
        />
        <InfoCardImgRight
          imagePath={"/renewable_03.webp"}
          heading={"Nationwide Network"}
          descriptions={[
            ` We are proud to offer a nationwide extensive network of control centres, providing seamless transportation solutions to businesses despite of their location. With this extensive coverage, we ensure that our customers can rely on us to handle shipments across all regions—whether it’s a major metropolitan area, remote locations. We also offer GPS Tracking of vehicles for Major Routes.`,
          ]}
          list={[
            "Reach Every Corner of the Country",
            "Streamline Operations",
            "Adapt to Local Needs",
            "Provide Consistent Service",
          ]}
        />

        <InfoCardDarkBg
          imagePath={"/renewable_01.webp"}
          heading={"Wide Range of Services"}
          description={` We are proud to serve a wide range of industries, providing tailored logistics solutions, and comprehensive freight management solutions from origin to consumption that meet the unique needs of each sector, thereby achieving cost-effective services. We serve a diverse range of sectors, including:`}
          list={[
            "Manufacturing and Industrial (Steel, Machine & Material)",
            "Automotive and Parts Distribution",
            "Construction and Heavy Equipment (Over/Odd Dimensional Cargos)",
            "Energy and Utilities (Wind, Solar, Power, Oil and Gas Industries)",
            "FMCG, White Goods (Inc. Container body vehicles)",
          ]}
        />

        <InfoCardDarkBgImgRight
          imagePath={"/renewable_03.webp"}
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

export default GeneralTransportation;
