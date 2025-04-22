import React from "react";
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
            ESG (Environmental, Social, and Governance) principles are
            redefining the metrics of business success in today’s rapidly
            evolving world. At NTC, we are devoted to sustainable growth and
            long-term prosperity, embracing ESG not merely as a strategic
            decision but as a moral responsibility.
          </p>
          <a href="learnSus.html" style={buttonStyle}>
            Learn More
          </a>
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
        <div style={imageContainerStyle}>
          <img src="imgleft.png" alt="Complex Shipment" style={imageStyle} />
        </div>
        <div style={contentStyle}>
          <h2 style={headingStyle}>Complex Shipment Expertise</h2>
          <hr style={lineStyle} />
          <p style={paragraphStyle}>
            At <strong>SK Road Lines</strong>, we specialize in handling complex
            and oversized shipments with complete precision. From staging to
            final stowage, our team meticulously plans and executes each move.
            With survey-backed operations and transparent reporting, we ensure
            reliable, safe, and seamless delivery—every time.
          </p>
          <a href="learnSus.html" style={buttonStyle}>
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityCard;
