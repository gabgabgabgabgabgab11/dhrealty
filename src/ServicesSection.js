
import React, { useState } from "react";
// Replace with your actual image imports
import img1 from './sell.jpg';
import img2 from './buy.jpg';
import img3 from './lease.jpg';
import img4 from './tenant.jpg';
import img5 from './property.jpg';
import img6 from './brokers.jpg';

const serviceCards = [
  { label: "Sell", img: img1 },
  { label: "Buy", img: img2 },
  { label: "Lease", img: img3 },
  { label: "Tenant Representation", img: img4 },
  { label: "Property Management", img: img5 },
  { label: "Broker's Opinion of Value", img: img6 }
];

const ServicesSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        background: "#0e1a27",
        color: "white",
        boxSizing: "border-box",
        padding: "80px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 40,
          maxWidth: 1600,
          margin: "0 auto",
          width: "100%",
          boxSizing: "border-box"
        }}
      >
        <div style={{ flex: "0 0 450px" }}>
          <h2
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              marginBottom: 32,
              lineHeight: 1.1,
            }}
          >
            How Can We<br />Help You<br />Today?
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "white",
              maxWidth: 350,
            }}
          >
            Our experienced team offers comprehensive house property services to meet all your real estate needs.
          </p>
        </div>
        <div
          style={{
            flex: 2,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            width: "100%"
          }}
        >
          {serviceCards.map((card, idx) => (
            <div
              key={card.label}
              style={{
                background: "#fff",
                borderRadius: 8,
                overflow: "hidden",
                boxShadow: hoveredIdx === idx
                  ? "0 8px 32px 0 rgba(0,0,0,0.20)"
                  : "0 2px 10px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                transform: hoveredIdx === idx ? "scale(1.06)" : "scale(1)",
                transition: "transform 0.22s cubic-bezier(.4,2,.6,1), box-shadow 0.18s",
                cursor: "pointer",
                zIndex: hoveredIdx === idx ? 2 : 1
              }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <img
                src={card.img}
                alt={card.label}
                style={{ width: "100%", height: 160, objectFit: "cover" }}
              />
              <div
                style={{
                  background: "#0066cc", // Blue instead of orange
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  padding: "22px 0",
                  textAlign: "center",
                }}
              >
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;