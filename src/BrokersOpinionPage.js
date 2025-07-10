import React from "react";
import propertyHeroImg from './lease3.jpg'; // Use your new hero/cover img here (update path/filename)
import FooterSection from './FooterSection';


const BrokersOpinionPage = () => (
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
            Broker's Opinion
          </h1>
          <h2 style={{
            fontWeight: 700,
            fontSize: 40,
            margin: "18px 0 28px 0",
            color: "#1a212b",
            lineHeight: 1
          }}>
          Value
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

export default BrokersOpinionPage;