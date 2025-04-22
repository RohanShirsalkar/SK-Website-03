import React from "react";

const ClientsSection = () => {
  const clients = [
    { name: "Fox Wind", logo: "clientOne.jpeg" },
    { name: "Inox Wind", logo: "ClientTwo.jpeg" },
    { name: "Sainath Green Power", logo: "ClientThree.jpeg" },
    { name: "Repowering India", logo: "ClientFour.jpeg" },
    { name: "Vayulo Energy", logo: "ClientFive.jpeg" },
  ];

  const sectionStyle = {
    padding: "60px 0",
    // backgroundColor: "#f8f9fa",
  };

  const headingStyle = {
    color: "#132577",
    textAlign: "center",
    marginBottom: "40px",
    fontWeight: "400",
    fontSize: "36px",
  };

  const rowStyle = {
    display: "flex",
    // justifyContent: "space-evenly",
    // alignItems: "center",
    flexWrap: "wrap",
    gap: "30px",
    padding: "0 40px",
  };

  const logoContainerStyle = {
    flex: "1 1 18%", // About 5 in a row
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const logoStyle = {
    maxHeight: "100px",
    maxWidth: "100%",
    transition: "filter 0.3s ease, transform 0.3s ease",
    objectFit: "contain",
  };

  const logoHoverStyle = {
    filter: "grayscale(0%)",
    transform: "scale(1.05)",
  };

  return (
    <div className="max-w-full mx-auto px-4">
      <section style={sectionStyle} id="clients">
        <div className=" text-center">
          <h2 style={headingStyle}>Trusted By</h2>
          <div style={rowStyle}>
            {clients.map((client, index) => (
              <div key={index} style={logoContainerStyle}>
                <img
                  src={client.logo}
                  alt={client.name}
                  style={logoStyle}
                  onMouseOver={(e) => {
                    e.currentTarget.style.filter = logoHoverStyle.filter;
                    e.currentTarget.style.transform = logoHoverStyle.transform;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.filter = logoStyle.filter;
                    e.currentTarget.style.transform = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsSection;
