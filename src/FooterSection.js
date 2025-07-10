import React from "react";
import bgImg from './housefooter.jpg';
import './FooterSection.css';

const socialIcons = [
  { label: "f", alt: "Facebook", url: "#" },
  { label: "in", alt: "LinkedIn", url: "#" },
  { label: "t", alt: "Twitter", url: "#" },
  { label: "ig", alt: "Instagram", url: "#" },
];

const FooterSection = () => (
  <footer
    style={{
      width: "100vw",
      marginLeft: "calc(50% - 50vw)",
      background: "#18304e",
      color: "#fff",
      boxSizing: "border-box",
      padding: "0",
      position: "relative",
      overflow: "hidden"
    }}
  >
    {/* Social section with background image */}
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: 220,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(24, 48, 78, 0.92)",
          zIndex: 1,
          pointerEvents: "none"
        }}
      />
      {/* Content (above overlay) */}
      <div style={{ position: "relative", zIndex: 2, width: "100%", textAlign: "center", padding: "64px 0 32px 0" }}>
        <h2 style={{ fontWeight: "bold", fontSize: "2rem", margin: 0 }}>
          Follow us
        </h2>
        <div style={{ fontSize: "1.3rem", marginBottom: 18 }}>on social media</div>
        <div className="footer-social-row">
          {socialIcons.map((icon, i) => (
            <a
              key={i}
              href={icon.url}
              title={icon.alt}
              className="footer-social-icon"
              aria-label={icon.alt}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon.label}
            </a>
          ))}
        </div>
      </div>
    </div>
    {/* Footer links and copyright (no image) */}
    <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 40,
          padding: "40px 0 24px 0"
        }}
      >
        <div>
          <div style={{ fontWeight: "bold", fontSize: "1.12rem", marginBottom: 10 }}>
           Darryl Hamilton Website
          </div>
        </div>
        <div>
          <div style={{ fontWeight: "bold", fontSize: "1.12rem", marginBottom: 10 }}>
            Quick Links
          </div>
          <div>
            <a href="/services" className="footer-link">Services</a>
            <a href="/about" className="footer-link">About Us</a>
            <a href="/success-stories" className="footer-link">Success Stories</a>
          </div>
        </div>
        <div>
          <div style={{ fontWeight: "bold", fontSize: "1.12rem", marginBottom: 10 }}>
            Resources
          </div>
          <div>
            <a href="/media" className="footer-link">Media</a>
            <a href="/contact" className="footer-link">Contact Us</a>
          </div>
        </div>
        <div>
         
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          padding: "16px 0 22px 0",
          borderTop: "1px solid #30445e",
          fontSize: "0.95rem",
          color: "#c3d2e5",
          opacity: 0.86,
          marginTop: 12
        }}
      >
        <div style={{ marginBottom: 6 }}>
          <a href="/privacy-policy" className="footer-link-inline">Privacy Policy</a>
          <span style={{ color: "#c3d2e5", padding: "0 8px" }}>|</span>
          <a href="/terms-of-service" className="footer-link-inline">Terms of Service</a>
        </div>
        <div>© Copyright Darryl Hamilton Website 2025</div>
      </div>
    </div>
  </footer>
);

export default FooterSection;