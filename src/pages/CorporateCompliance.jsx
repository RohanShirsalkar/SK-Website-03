import React from "react";

const CorporateCompliance = () => {
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

   return (
      <div className="max-w-6xl mx-auto">
        <section style={sectionStyle}>
          <div style={contentStyle}>
            <h2 style={headingStyle}>Commitment to Corporate Governance and Compliance</h2>
            <hr style={lineStyle} />
            <p style={paragraphStyle}>
            We are dedicated to maintaining the highest standards of corporate governance and compliance by following a strong framework of ethical values and regulatory guidelines. Our well-established compliance system ensures transparency, accountability, and the integration of sustainable practices throughout every level of our organization. </p>
          </div>
          <div style={imageContainerStyle}>
            <img
              src="compliance.webp"
              alt="Sustainability"
              style={imageStyle}
            />
          </div>
        </section>
  
        <section style={sectionStyle}>
          <div style={imageContainerStyle}>
            <img src="integrity-honesty.webp" alt="Complex Shipment" style={imageStyle} />
          </div>
          <div style={contentStyle}>
            <h2 style={headingStyle}>Integrity at the Core</h2>
            <hr style={lineStyle} />
            <p style={paragraphStyle}>
            We are firmly committed to integrity and ethical conduct, which guide our internal policies and shape our relationships with clients, partners, and stakeholders. Adhering to local and international laws, industry standards, and governance principles is central to our approach to responsible and sustainable growth.
            </p>
           
          </div>
        </section>
      </div>
    );
};

export default CorporateCompliance;
