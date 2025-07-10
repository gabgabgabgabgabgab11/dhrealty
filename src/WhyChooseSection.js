import React, { useState } from "react";
import img1 from "./lease1.jpg";
import img2 from "./lease2.jpg";
import img3 from "./lease3.jpg";

const properties = [
  {
    status: "LEASED",
    address: "123 Main Street, Sample City, SC",
    size: "4,500 SF",
    img: img1,
  },
  {
    status: "LEASED",
    address: "456 Oak Avenue, Sample City, SC",
    size: "3,200 SF",
    img: img2,
  },
  {
    status: "LEASED",
    address: "789 Pine Lane, Sample City, SC",
    size: "5,100 SF",
    img: img3,
  },
];

const WhyChooseSection = () => {
  // Track hover and active (mouse down) states
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Determine button background color
  let buttonBg = "#0066cc"; // default
  if (isActive) buttonBg = "#004999";
  else if (isHovered) buttonBg = "#004999";

  return (
    <section
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        background: "#fff",
        boxSizing: "border-box",
        padding: "80px 0 60px 0",
        overflow: "hidden"
      }}
    >
      <div style={{
        maxWidth: 1300,
        margin: "0 auto",
        padding: "0 20px"
      }}>
        <h2 style={{
          fontSize: "2.6rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 24
        }}>
          Why Choose <span style={{ color: "#0066cc" }}>Darryl Hamilton Website</span>?
        </h2>
        <p style={{
          color: "#444",
          fontSize: "1.23rem",
          textAlign: "center",
          margin: "0 auto 48px auto",
          maxWidth: 680,
          lineHeight: 1.7
        }}>
          Darryl Hamilton Website is one of the most experienced residential real estate companies in the area. We use our multi-generational skills and connections, combined with over 50 years of experience in the local residential real estate market to save our clients time and money.
        </p>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 36,
          marginBottom: 32
        }}>
          {properties.map((prop, i) => (
            <div
              key={i}
              style={{
                background: "#f9f9fb",
                borderRadius: 10,
                boxShadow: "0 2px 14px rgba(40,56,85,0.11)",
                maxWidth: 350,
                minWidth: 320,
                flex: "1 1 320px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <img
                src={prop.img}
                alt={prop.address}
                style={{
                  width: "100%",
                  height: 170,
                  objectFit: "cover",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
              <div style={{ padding: "22px 20px 18px 20px", flex: 1 }}>
                <div
                  style={{
                    display: "inline-block",
                    background: "#0066cc",
                    color: "#fff",
                    borderRadius: 4,
                    padding: "4px 15px",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    marginBottom: 14,
                    marginRight: 0,
                    letterSpacing: 0.5,
                  }}
                >
                  {prop.status}
                </div>
                <div style={{ fontWeight: "bold", marginTop: 10, marginBottom: 4 }}>
                  {prop.address}
                </div>
                <div style={{ color: "#555", fontSize: "1.05rem" }}>{prop.size}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              background: buttonBg,
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "16px 38px",
              fontWeight: "bold",
              fontSize: "1.15rem",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
              transition: "background 0.16s"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); setIsActive(false); }}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
          >
            Meet Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;