import { Dot } from "lucide-react";
import GradientDivider from "./GradientDivider";

const InfoCardDarkBg = ({ imagePath, heading, list, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-2 max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-2 lg:gap-8">
      <div className="flex-1 py-4 pl-2 lg:pl-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
          {heading}
        </h2>
        <div className="mb-4">
          <GradientDivider />
        </div>
        <p className="text-gray-200 mb-4 leading-relaxed">{description}</p>
        <div className="flex ">
          <ul className={`space-y-1 ${list.length > 9 ? "w-1/2" : "w-full"}`}>
            {list.slice(0, 9).map((item, index) => (
              <li key={index} className="flex items-center text-white">
                <Dot />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          {list.length > 9 && (
            <ul className="space-y-1 w-1/2">
              {list.slice(9, 19).map((item, index) => (
                <li key={index} className="flex items-center text-white">
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

export default InfoCardDarkBg;
