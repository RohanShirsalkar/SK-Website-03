import React from "react";
import HeroSlider from "../components/HeroSlider";
import CTAForm from "../components/CTAForm";

const certifications = [
  {
    id: 1,
    src: "/certificate_1.jpg",
    alt: "ISO 45001:2018 Certificate",
  },
  {
    id: 2,
    src: "/certificate_2.jpg",
    alt: "ISO 9001:2015 Certificate",
  },
  {
    id: 3,
    src: "/certificate_3.jpg",
    alt: "ISO 14001:2015 Certificate",
  },
];

const Card = ({ title, icon, children }) => (
  <div className="bg-white rounded-2xl p-6 shadow-md transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
    <div className="flex flex-col items-start space-y-4">
      <div className="text-3xl">{icon}</div>
      <h2 className="text-xl font-semibold text-blue-900">{title}</h2>
      <div className="text-gray-700 text-sm">{children}</div>
    </div>
  </div>
);

const AboutUs = () => {
  return (
    <div>
      <HeroSlider />
      <section className="bg-blue-900 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Your Trusted Partner in Logistics Excellence
          </h2>
          <p className="text-lg mb-8">
            S K ROAD LINES AND TRANSPORT formerly known as the familiar brand
            name SKRL an established organization formed by Mr. BASAVARAJ along
            with a group of wind blade transport sector experts with core
            competence in various domains of wind blade transport.
          </p>
          <p className="text-lg mb-8">
            Started way back in 2021, the company is located at Basvana Begawadi
            Karnataka –the main wind logistics of the South Indian state of
            Karnataka.
          </p>
          <p className="text-lg mb-8">
            Our team of professionals drawn from various disciplines of wind
            mill logistics sector carries with them the unmatched valuable
            experience of having worked with the global leaders
          </p>
        </div>
      </section>
      <div className=" bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Driven by Excellence in Transportation
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center">
          At S.K Transports, we are committed to delivering top-tier logistics
          solutions with efficiency, reliability, and integrity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 py-6 max-w-6xl mx-auto">
          <Card title="MISSION" icon="🎯">
            To deliver innovative and reliable logistics solutions that exceed
            customer expectations, ensuring timely and safe transportation
            across India.
          </Card>

          <Card title="VISION" icon="🌐">
            <p>
              To be the leading logistics provider in India, recognized for our
              commitment to excellence, sustainability, and customer
              satisfaction.
            </p>
          </Card>
        </div>
      </div>
      <div className="bg-white py-10 px-4 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-8">
          ISO Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="transition-transform transform hover:scale-105 hover:shadow-xl duration-300 rounded-lg overflow-hidden border"
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-full h-auto object-contain max-w-sm"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100">
        <CTAForm />
      </div>
    </div>
  );
};

export default AboutUs;
