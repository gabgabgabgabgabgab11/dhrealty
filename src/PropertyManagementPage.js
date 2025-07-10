import React from "react";
import propertyHeroImg from './lease3.jpg'; // Use your new hero/cover img here (update path/filename)
import FooterSection from './FooterSection';

// Property Management Feature Cards (from image 6)
const pmServices = [
  {
    title: "Invoice & Rent Collection",
  },
  {
    title: "Insurance Bidding and Filing",
  },
  {
    title: "Tenant Management",
  },
  {
    title: "Property Maintenance",
  },
  {
    title: "Prepare and Distribute P&L Statements",
  },
  {
    title: "Monthly Property Reports",
  },
  {
    title: "Facilitate Property Tax Filings",
  },
  {
    title: "Bill Pay",
  },
  {
    title: "Prepare 1099 Forms",
  },
];

const PropertyManagementPage = () => (
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
            Property 
          </h1>
          <h2 style={{
            fontWeight: 700,
            fontSize: 40,
            margin: "18px 0 28px 0",
            color: "#1a212b",
            lineHeight: 1
          }}>
            Management
          </h2>
          <p style={{
            fontSize: 17,
            lineHeight: 1.6,
            margin: 0,
            color: "#222",
            maxWidth: 500
          }}>
            Entrust us with your property management needs, so you can focus on your core business activities knowing that your investment is in capable hands. Experience the difference of working with a team that prioritizes your success through clear communication, ethical standards, and customized service.
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
            src={propertyHeroImg}
            alt="Property Management Hero"
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

    {/* PROPERTY MANAGEMENT SERVICES SECTION */}
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
          Get Top Rated House Property Management
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
          Entrust us with your property management needs, you can focus on your core business activities, knowing that your investment is in capable hands. Experience the difference of working with a team that prioritizes your success through clear communication, ethical standards, and customized service.
        </p>
        {/* Service Cards Grid - 3 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px 32px",
            width: "100%",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {pmServices.map((service) => (
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
                minHeight: 120,
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
          Start Your Property Management Journey
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
          Provide your details, and our property management experts will reach out to help you maximize your investment and peace of mind.
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
                Daryll Hamilton LLC is a trusted provider of residential real estate services. We are committed to protecting the personal information you share with us.<br /><br />
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

export default PropertyManagementPage;