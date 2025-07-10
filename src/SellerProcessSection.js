import React from "react";
import img1 from './sell.jpg'; // Replace with your images
import img2 from './house2.jpg';
import img3 from './house3.jpg';

const steps = [
  "Initial Consultation and Assessment",
  "Property Valuation and Pricing",
  "Listing and Marketing the Property",
  "Showcasing and Property Viewings",
  "Negotiation with Potential Buyers",
  "Handling Documentation",
  "Post-Sale Services",
  "Networking and Referrals",
  "Closing the Deal",
];

const soldProperties = [
  {
    img: img1,
    address: "7700-7740 W Colfax Ave, Denver, CO",
    size: "20,150 SF",
    status: "SOLD"
  },
  {
    img: img2,
    address: "4880 Niagara St, Denver, CO",
    size: "3,200 SF",
    status: "SOLD"
  },
  {
    img: img3,
    address: "4868 - 4869 Niagara St, Commerce City, CO",
    size: "8,500 SF",
    status: "SOLD"
  }
];

const SellProcessSection = () => (
  <div
    style={{
      width: "100vw",
      minHeight: "100vh",
      marginLeft: "calc(50% - 50vw)",
      background: "#162430",
      boxSizing: "border-box",
      padding: "48px 0 0 0"
    }}
  >
    {/* Sell process */}
    <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center", color: "#fff" }}>
      <h2 style={{
        fontSize: 30,
        fontWeight: 700,
        marginBottom: 14,
        marginTop: 0,
        color: "#fff"
      }}>
        Sell Your House Property Hassle-Free
      </h2>
      <p style={{
        fontSize: 13,
        color: "#cfd8e3",
        marginBottom: 30,
        marginTop: 0,
        lineHeight: 1.6,
        maxWidth: 650,
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        Partner with Sample Site to experience a seamless and rewarding sales process. Our commitment to clear communication, ethical standards, and customized service ensures your investment is in capable hands.
      </p>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        marginBottom: 46
      }}>
        <div style={{ display: "flex", gap: 18 }}>
          {steps.slice(0, 3).map((step, idx) => (
            <div key={step} style={{
              border: "2px solid #0066cc",
              borderRadius: 8,
              padding: "22px 30px",
              minWidth: 230,
              color: "#fff",
              fontWeight: 500,
              fontSize: 15,
              background: "#162430",
              marginBottom: 0,
              transition: "border 0.2s"
            }}>
              {step}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 18 }}>
          {steps.slice(3, 6).map((step, idx) => (
            <div key={step} style={{
              border: "2px solid #0066cc",
              borderRadius: 8,
              padding: "22px 30px",
              minWidth: 230,
              color: "#fff",
              fontWeight: 500,
              fontSize: 15,
              background: "#162430",
              marginBottom: 0,
              transition: "border 0.2s"
            }}>
              {step}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 18 }}>
          {steps.slice(6).map((step, idx) => (
            <div key={step} style={{
              border: "2px solid #0066cc",
              borderRadius: 8,
              padding: "22px 30px",
              minWidth: 230,
              color: "#fff",
              fontWeight: 500,
              fontSize: 15,
              background: "#162430",
              marginBottom: 0,
              transition: "border 0.2s"
            }}>
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Recently Sold Properties */}
    <div style={{ maxWidth: 1200, margin: "0 auto", marginTop: 16 }}>
      <h3 style={{
        fontSize: 28,
        fontWeight: 700,
        margin: "30px 0 32px 0",
        color: "#fff",
        textAlign: "center"
      }}>
        Recently Sold Properties
      </h3>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: 36,
        marginBottom: 40,
        flexWrap: "wrap"
      }}>
        {soldProperties.map((prop, idx) => (
          <div key={idx} style={{
            background: "#fff",
            borderRadius: 10,
            boxShadow: "0 2px 12px 0 rgba(0,0,0,0.06)",
            width: 300,
            minHeight: 340,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          }}>
            <img src={prop.img} alt={prop.address} style={{
              width: "100%",
              height: 160,
              objectFit: "cover"
            }}/>
            <div style={{ padding: "16px 18px 12px 18px" }}>
              <div style={{
                background: "#0066cc",
                color: "#fff",
                fontWeight: 700,
                fontSize: 13,
                borderRadius: 5,
                padding: "3px 14px",
                display: "inline-block",
                marginBottom: 10,
                letterSpacing: 1
              }}>
                {prop.status}
              </div>
              <div style={{
                fontWeight: 600,
                fontSize: 14,
                color: "#222",
                marginBottom: 4
              }}>
                {prop.address}
              </div>
              <div style={{
                fontSize: 12,
                color: "#888"
              }}>
                {prop.size}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SellProcessSection;