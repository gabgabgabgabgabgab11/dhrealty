import React, { useState } from "react";
import newsletterImg from "./lease4.jpg"; // Use your actual image path

const NewsletterSection = () => {
  const [buttonPressed, setButtonPressed] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  let buttonBg = "#0066cc";
  if (buttonPressed) buttonBg = "#004999";
  else if (buttonHovered) buttonBg = "#005bb5";

  return (
    <section
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        background: "#18304e",
        color: "white",
        boxSizing: "border-box",
        padding: "72px 0",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          maxWidth: 1300,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 60,
          padding: "0 32px",
          flexWrap: "wrap"
        }}
      >
        <div style={{ flex: 1, minWidth: 320 }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: 0 }}>
            Our
          </h2>
          <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", marginTop: 0, color: "#0066cc" }}>
            House Properties Newsletter
          </h2>
          <p style={{ margin: "18px 0 30px 0", fontSize: "1.12rem" }}>
            Be the first to know about residential real estate in your area!
          </p>
          <button
            style={{
              background: buttonBg,
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "14px 30px",
              fontWeight: "bold",
              fontSize: "1.08rem",
              cursor: "pointer",
              transition: "background 0.15s"
            }}
            onMouseDown={() => setButtonPressed(true)}
            onMouseUp={() => setButtonPressed(false)}
            onMouseLeave={() => { setButtonPressed(false); setButtonHovered(false); }}
            onMouseEnter={() => setButtonHovered(true)}
            onFocus={() => setButtonHovered(true)}
            onBlur={() => { setButtonPressed(false); setButtonHovered(false); }}
          >
            Subscribe
          </button>
        </div>
        <div style={{ flex: 1, minWidth: 320, display: "flex", justifyContent: "center" }}>
          <img
            src={newsletterImg}
            alt="Newsletter feature"
            style={{
              width: "100%",
              maxWidth: 390,
              borderRadius: 10,
              boxShadow: "0 2px 16px 0 rgba(0,0,0,0.13)",
              objectFit: "cover",
              margin: "auto"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;