import React from "react";
import GradientDivider from "./GradientDivider";
import { Dot } from "lucide-react";

const InfoCardImgLeft = ({
  imagePath,
  heading,
  descriptions = [],
  list = [],
}) => {
  return (
    <div className="bg-white border border-blue-300 rounded-lg p-2 max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-w lg:gap-8">
      <div className="flex-1 py-4 pl-2 lg:pl-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          {heading}
        </h2>
        <div className="mb-4">
          <GradientDivider />
        </div>
        {descriptions.map((item, index) => (
          <p key={index} className="text-gray-600 mb-4 leading-relaxed">
            {item}
          </p>
        ))}
        <div className="flex items-start">
          <ul className={`space-y-1 ${list.length > 9 ? "w-1/2" : "w-full"}`}>
            {list.slice(0, 9).map((item, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <Dot />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          {list.length > 9 && (
            <ul className="space-y-1 w-1/2">
              {list.slice(9, 19).map((item, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <Dot />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex-1">
        <img
          src={imagePath}
          alt="Wind Equipment Logistics"
          className="rounded-tl-[100px] rounded-br-[100px] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default InfoCardImgLeft;
