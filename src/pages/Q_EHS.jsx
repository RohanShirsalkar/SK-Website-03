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

  const buttonStyle = {
    backgroundColor: "#2C4EDB",
    color: "#fff",
    padding: "10px 24px",
    borderRadius: "8px",
    textDecoration: "none",
    border: "none",
    fontWeight: 500,
    display: "inline-block",
    marginTop: "20px",
  };
  return (
    <div className="min-h-screen">
      {/* <HeroBanner /> */}
      <div className="max-w-7xl mx-auto px-4 ">
        <section style={sectionStyle}>
          <div style={contentStyle}>
            <h2 style={headingStyle}>Our Vision for Quality and Safety</h2>
            <hr style={lineStyle} />
            <p style={paragraphStyle}>
              At SK Roadlines & Transport, we envision a company-wide culture
              rooted in quality and safety. Our goal is to align all core and
              support functions with the discipline and structure of an
              ISO-based Quality and EHS framework. Our dedicated Q&EHS team
              plays a pivotal role in maintaining these standards by overseeing
              organizational systems and ensuring unwavering compliance with the
              Integrated Management System (IMS) protocols.
            </p>
            {/* <a href="learnSus.html" style={buttonStyle}>
                Learn More
                </a> */}
          </div>
          <div style={imageContainerStyle}>
            <img
              src="https://images.unsplash.com/photo-1615392478881-f72fcdbd3c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="Sustainability"
              style={imageStyle}
            />
          </div>
        </section>
        <section style={sectionStyle}>
          <div style={contentStyle}>
            <h2 style={headingStyle}>Auditing and Process Standardization</h2>
            <hr style={lineStyle} />
            <p style={paragraphStyle}>
              At SK Roadlines & Transport, we conduct regular internal audits to
              ensure strict compliance with quality, environmental, and
              occupational health and safety standards. Using our custom-built
              Q&EHS Audit Tool, we perform standardized assessments across
              operations, enabling us to swiftly implement corrective and
              preventive actions that strengthen our commitment to continuous
              improvement in safety and quality.
            </p>
            {/* <a href="learnSus.html" style={buttonStyle}>
                Learn More
                </a> */}
          </div>
          <div style={imageContainerStyle}>
            <img
              src="https://images.unsplash.com/photo-1615392478881-f72fcdbd3c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="Sustainability"
              style={imageStyle}
            />
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
