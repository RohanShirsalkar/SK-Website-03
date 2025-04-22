import React from "react";
import Acordion from "../components/Acordion";
import HeroBanner from "../components/HeroBanner";

const accordionItems = [
  {
    title: "Environmental Responsibility: Building a Greener Tomorrow",
    content:
      "At SK Roadlines, we are committed to sustainability and green logistics. We minimize our carbon footprint by adopting eco-friendly practices, maintaining a modern fuel-efficient fleet, and following optimal route planning. Our mission is to reduce emissions, promote energy efficiency, and contribute to a healthier planet for future generations.",
  },
  {
    title: "Social Responsibility: Empowering People and Communities",
    content:
      "We value our people. From skilled workforce development to local community engagement, SK Roadlines prioritizes employee safety, training, and well-being while also supporting regional growth initiatives.",
  },
  {
    title: "Corporate Governance: Strengthening Integrity and Accountability",
    content:
      "Our operations are grounded in ethics, transparency, and regulatory compliance. At SK Roadlines, integrity is not just a value—it's how we build trust with clients and stakeholders.",
  },
  {
    title: "ESG at the Core: Building a Sustainable Future for Generations",
    content:
      "We embed Environmental, Social, and Governance (ESG) principles into every aspect of our strategy to ensure long-term success that benefits people, planet, and profit.We embed Environmental, Social, and Governance (ESG) principles into every aspect of our strategy to ensure long-term success that benefits people, planet, and profit.",
  },
];

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
            <h2 style={headingStyle}>
              Driving Sustainable Progress: Our ESG Pledge
            </h2>
            <hr style={lineStyle} />
            <p style={paragraphStyle}>
              Environmental, Social, and Governance (ESG) principles are at the
              heart of our mission—not just as a business strategy, but as a
              core responsibility. We are dedicated to reaching net-zero
              environmental impact while promoting inclusive socio-economic
              progress, ensuring that our growth is both ethical and sustainable
              for future generations.
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
            <h2 style={headingStyle}>Q&EHS</h2>
            <hr style={lineStyle} />
            <p style={paragraphStyle}>
              At SK Roadlines & Transport, Quality, Environment, Health, and
              Safety are not just priorities — they are foundational values that
              drive our operations. We strive for zero preventable incidents,
              ensuring the safety of our people, the integrity of our processes,
              and the protection of the environment in everything we do.
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

export default CorporateCompliance;
