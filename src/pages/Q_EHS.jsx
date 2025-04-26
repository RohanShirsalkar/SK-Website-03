import React from "react";
import Acordion from "../components/Acordion";

const accordionItems = [
  {
    title: "QUALITY SERVICE",
    content:
      "We are committed to delivering consistent, reliable, and high-quality logistics solutions that exceed customer expectations. Every process is aligned with rigorous quality standards to ensure operational excellence across our operations.",
  },
  {
    title: "BE SAFE",
    content:
      "Safety is embedded in our culture. We foster a safe working environment through continuous training, proactive risk management, and strict adherence to safety protocols, ensuring the well-being of our employees, partners, and stakeholders.",
  },
  {
    title: "BE GREEN",
    content:
      "We embrace eco-conscious practices aimed at reducing our environmental footprint. From fuel-efficient transport to responsible waste management, we are committed to building a cleaner, more sustainable future.",
  },
];

const Q_EHS = () => {
  const sectionStyle = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    border: "3px solid ",
    borderColor: " #6AB7FF",
    borderRadius: "16px",
    overflow: "hidden",
    margin: "40px 0",
  };

  const contentStyle = {
    flex: "1 1 50%",
    padding: "40px",
    backgroundColor: "#fff",
  };

  const imageContainerStyle = {
    flex: "1 1 50%",
    minHeight: "300px",
    maxHeight: "500px",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderTopLeftRadius: "16px",
    borderBottomLeftRadius: "16px",
  };

  const headingStyle = {
    color: "#132577",
    fontWeight: 700,
    fontSize: "1.5rem",
  };

  const lineStyle = {
    width: "80px",
    height: "3px",
    background: "linear-gradient(to right, #2C4EDB, #6AB7FF)",
    border: "none",
    borderRadius: "3px",
    margin: "16px 0",
  };

  const paragraphStyle = {
    color: "#444",
    lineHeight: 1.7,
    fontSize: "1rem",
  };
  return (
    <div className="min-h-screen">
      {/* <HeroBanner /> */}
      <div className="max-w-6xl mx-auto">
      <section style={sectionStyle}>
        <div style={contentStyle}>
          <h2 style={headingStyle}>Our Vision for Quality and Safety</h2>
          <hr style={lineStyle} />
          <p style={paragraphStyle}>
          We aim to establish a strong culture of quality and safety throughout our organization by aligning all core and support functions with the structure and discipline of an ISO-based Quality and Environmental Health & Safety (EHS) framework. Our Q&EHS team plays a vital role in upholding these standards by managing enterprise-wide systems and ensuring strict adherence to Integrated Management System (IMS) protocols. </p>
        </div>
        <div style={imageContainerStyle}>
          <img
            src="QEHS-3-1.webp"
            alt="Sustainability"
            style={imageStyle}
          />
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={imageContainerStyle}>
          <img src="QEHS-3.webp" alt="Complex Shipment" style={imageStyle} />
        </div>
        <div style={contentStyle}>
          <h2 style={headingStyle}>Auditing and Process Standardization</h2>
          <hr style={lineStyle} />
          <p style={paragraphStyle}>
          We conduct regular internal audits to ensure alignment with quality, environmental, and occupational health & safety standards. Using our custom-developed Q&EHS Audit Tool, we perform consistent and standardized evaluations across all departments. When required, we implement corrective and preventive actions promptly to strengthen and enhance our safety and quality management systems.          </p>
         
        </div>
      </section>
    </div>
      <div className="max-w-7xl mx-auto px-4 ">
        <Acordion items={accordionItems} title={"FAQ"} />
      </div>
    </div>
  );
};

export default Q_EHS;
