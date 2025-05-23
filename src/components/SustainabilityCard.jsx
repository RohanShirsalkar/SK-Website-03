import React from "react";
import { Link } from "react-router-dom";

// import "../styles/custom.css";

const SustainabilityCard = () => {
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
    // boxShadow: "0 0 15px rgba(0, 0, 0, 0.05)",
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
    <div className="max-w-6xl mx-auto">
      <section style={sectionStyle}>
        <div style={contentStyle}>
          <h2 style={headingStyle}>Sustainability</h2>
          <hr style={lineStyle} />
          <p style={paragraphStyle}>
          At <strong>SK Road Lines & Transport</strong> , sustainability is a core principle that drives their operations. The company is committed to eco-friendly logistics by prioritizing the transportation of renewable energy components such as wind and solar equipment. With a focus on minimizing environmental impact, they strive for zero emissions, responsible fleet management, and greener practices across all operations. This dedication to sustainability aligns with their mission to deliver safe, punctual, and environmentally conscious logistics solutions nationwide.
          </p>
          <Link to="corporate-compliance" style={buttonStyle}>
            Learn More
          </Link>
        </div>
        <div style={imageContainerStyle}>
          <img
            src="Renewable-Logistics.webp"
            alt="Sustainability"
            style={imageStyle}
          />
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={imageContainerStyle}>
          <img src="wind-energy-fleet-transportation-1.webp" alt="Complex Shipment" style={imageStyle} />
        </div>
        <div style={contentStyle}>
          <h2 style={headingStyle}>Complex Shipment Expertise</h2>
          <hr style={lineStyle} />
          <p style={paragraphStyle}>
            At <strong>SK Road Lines & Transport</strong>, we specialize in handling complex
            and oversized shipments with complete precision. From staging to
            final stowage, our team meticulously plans and executes each move.
            With survey-backed operations and transparent reporting, we ensure
            reliable, safe, and seamless delivery—every time.
          </p>
          <Link to="q&ehs" style={buttonStyle}>
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityCard;
