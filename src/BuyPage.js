import React from "react";
import buyHeroImg from './lease4.jpg'; // Use your own image for the hero section
import FooterSection from './FooterSection';

const propertyMgmtSteps = [
  "Invoice & Rent Collection",
  "Insurance Bidding and Filing",
  "Tenant Management",
  "Property Maintenance",
  "Prepare and Distribute P&L Statements",
  "Monthly Property Reports",
  "Facilitate Property Tax Filings",
  "Bill Pay",
  "Prepare 1099 Forms"
];

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
  gap: "32px",
  maxWidth: 1200,
  margin: "0 auto",
  padding: "40px 16px 0 16px"
};

const boxStyle = {
  background: "#162430",
  color: "#fff",
  border: "2px solid #2196f3",
  borderRadius: "14px",
  minHeight: 50,
  minWidth: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 20,
  fontWeight: 700,
  textAlign: "center",
  padding: "38px 28px"
};

const BuyPage = () => (
  <>
    {/* HERO / INTRO SECTION */}
    <div
      style={{
        width: "100vw",
        minHeight: "60vh",
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
            Buy
          </h1>
          <h2 style={{
            fontWeight: 700,
            fontSize: 40,
            margin: "18px 0 28px 0",
            color: "#1a212b",
            lineHeight: 1
          }}>
            Your Next Property
          </h2>
          <p style={{
            fontSize: 17,
            lineHeight: 1.6,
            margin: 0,
            color: "#222",
            maxWidth: 500
          }}>
            At Daryll Hamilton Website, we are dedicated to helping you find your ideal property. Our knowledgeable team offers personalized guidance and access to a wide selection of homes to match your needs and budget. With decades of experience in the local real estate market, we ensure a smooth and rewarding buying experience from start to finish.
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
            src={buyHeroImg}
            alt="Modern living room"
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

    {/* PROPERTY MANAGEMENT SECTION */}
    <div
      style={{
        width: "100vw",
        background: "#162430",
        marginLeft: "calc(50% - 50vw)",
        boxSizing: "border-box",
        padding: "0 0 64px 0",
        fontFamily: "Montserrat, Arial, sans-serif"
      }}
    >
      {/* Section Title and Description */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        textAlign: "center",
        color: "#fff",
        paddingTop: 40,
        paddingBottom: 24
      }}>
        <h2 style={{
          fontSize: 38,
          fontWeight: 700,
          marginBottom: 18,
          marginTop: 0,
          color: "#fff",
          letterSpacing: "-1px"
        }}>
          Buy Your House Property Hassle-Free
        </h2>
        <p style={{
          fontSize: 16,
          color: "#e0e6ed",
          marginBottom: 0,
          marginTop: 0,
          lineHeight: 1.6,
          maxWidth: 700,
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          Partner with Sample Site to experience a seamless and rewarding sales process.
          Our commitment to clear communication, ethical standards, and customized service
          ensures your investment is in capable hands.
        </p>
      </div>
      {/* Property Management Grid */}
      <div style={gridStyle}>
        {propertyMgmtSteps.map((step, idx) => (
          <div key={idx} style={boxStyle}>
            {step}
          </div>
        ))}
      </div>
      <div style={{ height: 40 }} />
    </div>

    {/* CONTACT FORM SECTION */}
    <div
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        background: "#f6f7f8",
        boxSizing: "border-box",
        padding: "0 0 72px 0",
        fontFamily: "Montserrat, Arial, sans-serif"
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", color: "#212121", paddingTop: 60 }}>
        <h2 style={{
          fontSize: 28,
          fontWeight: 700,
          marginBottom: 10,
          marginTop: 0,
          color: "#1a212b",
          letterSpacing: "-1px"
        }}>
          Ready to Buy? Let's Find Your Next Property!
        </h2>
        <p style={{
          fontSize: 14,
          color: "#767676",
          marginBottom: 38,
          marginTop: 0,
          lineHeight: 1.6,
          maxWidth: 480,
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          Provide your details, and our residential real estate experts will reach out to assist you.
        </p>
        {/* Contact Form Card */}
        <div style={{
          background: "#fff",
          borderRadius: 8,
          padding: 32,
          boxShadow: "0 2px 12px 0 rgba(0,0,0,0.07)",
          textAlign: "left"
        }}>
          <form autoComplete="off">
            <div style={{ marginBottom: 18 }}>
              <label style={{ fontWeight: 500, fontSize: 13 }}>Name *</label>
              <input type="text" placeholder="Your Name" style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: 4,
                border: "1px solid #ddd",
                marginTop: 6,
                marginBottom: 0,
                fontSize: 15
              }}/>
            </div>
            <div style={{ marginBottom: 18 }}>
              <label style={{ fontWeight: 500, fontSize: 13 }}>Message *</label>
              <textarea placeholder="Enter Your Message Here..." rows={3} style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: 4,
                border: "1px solid #ddd",
                marginTop: 6,
                marginBottom: 0,
                fontSize: 15,
                resize: "vertical"
              }}/>
            </div>
            <div style={{ marginBottom: 18 }}>
              <label style={{ fontWeight: 500, fontSize: 13 }}>Phone *</label>
              <input type="text" placeholder="Phone Number" style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: 4,
                border: "1px solid #ddd",
                marginTop: 6,
                marginBottom: 0,
                fontSize: 15
              }}/>
            </div>
            <div style={{ marginBottom: 18 }}>
              <label style={{ fontWeight: 500, fontSize: 13 }}>Email *</label>
              <input type="email" placeholder="Email Address" style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: 4,
                border: "1px solid #ddd",
                marginTop: 6,
                marginBottom: 0,
                fontSize: 15
              }}/>
            </div>
            <div style={{ textAlign: "right", marginBottom: 24 }}>
              <button type="submit" style={{
                background: "#0066cc",
                color: "#fff",
                fontWeight: 600,
                border: "none",
                borderRadius: 4,
                padding: "12px 36px",
                fontSize: 16,
                cursor: "pointer",
                marginTop: 8,
                minWidth: 180
              }}>
                Send Message
              </button>
            </div>
            <div style={{
              background: "#f6f7f8",
              borderRadius: 6,
              padding: "16px 14px",
              marginTop: 10
            }}>
              <strong style={{ fontSize: 13 }}>PRIVACY NOTICE</strong>
              <div style={{ fontSize: 12, color: "#555", marginTop: 4 }}>
                Daryll Hamilton Website LLC is a trusted provider of residential real estate services. We are committed to protecting the personal information you share with us.<br /><br />
                The personal information we collect is primarily used to respond to your inquiries and provide the services you request.<br /><br />
                We take appropriate measures to keep your information secure and retain it only for as long as necessary for legitimate business or legal purposes. Once no longer needed, we ensure it is deleted safely and securely. For more details on how we handle your personal data, please review our privacy policy.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    {/* FOOTER SECTION */}
    <FooterSection />
  </>
);

export default BuyPage;