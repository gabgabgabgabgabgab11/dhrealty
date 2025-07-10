import React from "react";
import tenantHeroImg from './lease4.jpg'; // Use your hero/cover img here (update if needed)
import FooterSection from './FooterSection';

// Tenant Representation Service Features (from image 2)
const tenantServices = [
  {
    title: "Site Selection",
    desc: "We excel in pinpointing sites tailored to your needs, conducting thorough assessments considering factors like location, accessibility, zoning regulations, and growth potential. Our aim is to offer options aligning with your business objectives.",
  },
  {
    title: "Market Analysis",
    desc: "Stay ahead with our market analysis—insights on trends, pricing, and emerging opportunities. Our team conducts thorough research to empower your decisions on residential location and leasing strategy.",
  },
  {
    title: "Lease Negotiation",
    desc: "Negotiating leases is key to our tenant representation. Using our industry know-how, we secure terms meeting immediate needs and allowing flexibility for growth. We advocate for terms that benefit your bottom line, from rental rates to lease terms.",
  },
  {
    title: "Transaction Management",
    desc: "We oversee the entire transaction process, from site visit to lease agreement. Our services cover document preparation, inspection coordination, and ensuring legal compliance—letting you focus on your business while we handle leasing complexities.",
  },
  {
    title: "Space Optimization",
    desc: "We collaborate closely, understanding your operational needs, and design layouts to optimize space. Our space planning expertise ensures every square foot contributes to improved workflow and productivity.",
  },
  {
    title: "Client Advocacy",
    desc: "Your success is our top priority. We work tirelessly to protect your interests throughout the entire leasing process—negotiating on your behalf and advocating challenges. Our dedication ensures a smooth and successful outcome for every client.",
  }
];

const TenantRepresentationPage = () => (
  <>
    {/* HERO / INTRO SECTION */}
    <div
      style={{
        width: "100vw",
        minHeight: "69vh",
        marginLeft: "calc(50% - 50vw)",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "56px 0 0 0",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: 56,
          maxWidth: 1200,
          width: "100%",
          margin: "0 auto",
          background: "transparent",
        }}
      >
        {/* Text Content */}
        <div style={{ flex: 1, minWidth: 360 }}>
          <h1 style={{ color: "#0066cc", fontWeight: 700, fontSize: 44, margin: 0, lineHeight: 1 }}>
            Tenant 
          </h1>
          <h2 style={{
            fontWeight: 700,
            fontSize: 40,
            margin: "18px 0 28px 0",
            color: "#1a212b",
            lineHeight: 1
          }}>
            Representation
          </h2>
          <p style={{
            fontSize: 17,
            lineHeight: 1.6,
            margin: 0,
            color: "#222",
            maxWidth: 500
          }}>
            Let us handle your tenant representation needs so you can focus on growing your business. With our deep market expertise and commitment to your success, we ensure a smooth leasing process and secure the best terms for your goals. Work with a team that values clear communication, integrity, and tailored solutions designed just for you.
          </p>
          <button
            style={{
              background: "#0066cc",
              color: "#fff",
              fontWeight: 700,
              border: "none",
              borderRadius: 6,
              padding: "16px 36px",
              fontSize: 16,
              cursor: "pointer",
              marginTop: 36,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
            }}
          >
            Talk To An Expert
          </button>
        </div>
        {/* Image */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={tenantHeroImg}
            alt="Tenant Representation Hero"
            style={{
              width: 520,
              maxWidth: "100%",
              borderRadius: 12,
              objectFit: "cover",
              boxShadow: "0 2px 12px 0 rgba(0,0,0,0.06)",
            }}
          />
        </div>
      </div>
    </div>

    {/* TENANT REPRESENTATION SERVICES SECTION */}
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        marginLeft: "calc(50% - 50vw)",
        background: "#13202b",
        boxSizing: "border-box",
        padding: "0 0 64px 0",
        fontFamily: "Montserrat, Arial, sans-serif"
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center", color: "#fff", paddingTop: 44 }}>
        <h2 style={{
          fontSize: 38,
          fontWeight: 700,
          marginBottom: 10,
          marginTop: 0,
          color: "#fff",
          letterSpacing: "-1px"
        }}>
          Let's Find the Perfect Space for Your Business
        </h2>
        <p style={{
          fontSize: 16,
          color: "#e0e6ed",
          marginBottom: 48,
          marginTop: 0,
          lineHeight: 1.6,
          maxWidth: 780,
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          Let us handle your tenant representation needs so you can focus on growing your business. With our deep market expertise and commitment to your success, we ensure a smooth leasing process and secure the best terms for your goals. Work with a team that values clear communication, integrity, and tailored solutions designed just for you.
        </p>
        {/* Service Cards Grid - 2 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "38px 38px",
            width: "100%",
            maxWidth: 1120,
            margin: "0 auto",
          }}
        >
          {tenantServices.map((service, idx) => (
            <div
              key={service.title}
              style={{
                background: "transparent",
                border: "2px solid #0066cc",
                borderRadius: 12,
                padding: "34px 26px",
                color: "#fff",
                fontWeight: 700,
                fontSize: 21,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
                minHeight: 180,
                boxSizing: "border-box",
                transition: "box-shadow 0.2s",
                boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
              }}
            >
              <span style={{ fontWeight: 700, marginBottom: 12, color: "#fff", fontSize: 22 }}>
                {service.title}
              </span>
              <span style={{ fontWeight: 400, fontSize: 16, color: "#e0e6ed" }}>
                {service.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: 80 }} />
      {/* Recently Leased Properties REMOVED */}
    </div>
    {/* FOOTER SECTION */}
    <FooterSection />
  </>
);

export default TenantRepresentationPage;