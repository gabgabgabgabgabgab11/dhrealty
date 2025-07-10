import React from "react";
import img1 from './lease1.jpg'; // use your real images
import img2 from './lease2.jpg';
import img3 from './lease3.jpg';
import leaseHeroImg from './SELLpage.jpg'; // Your hero section image (update path/filename if needed)
import FooterSection from './FooterSection'; // Your custom footer!

// Steps from the image the user provided
const steps = [
  "Consultation and Assessment",
  "Property Evaluation and Market Analysis",
  "Listing and Marketing the Property",
  "Property Showcasing and Tours",
  "Tenant Screening and Selection",
  "Lease Negotiation and Terms Finalization",
  "Preparation and Review of Lease Documents",
  "Lease Execution and Move-in Coordination",
  "Lease Renewal or Termination Assistance",
  "Preparation and Review of Lease Documents"
];

const leasedProperties = [
  {
    img: img1,
    address: "7700-7740 W Colfax Ave, Denver, CO",
    size: "20,150 SF",
    status: "LEASED"
  },
  {
    img: img2,
    address: "4880 Niagara St, Denver, CO",
    size: "3,200 SF",
    status: "LEASED"
  },
  {
    img: img3,
    address: "4868 - 4869 Niagara St, Commerce City, CO",
    size: "8,500 SF",
    status: "LEASED"
  }
];

const LeasePage = () => (
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
            Lease
          </h1>
          <h2 style={{
            fontWeight: 700,
            fontSize: 40,
            margin: "18px 0 28px 0",
            color: "#1a212b",
            lineHeight: 1
          }}>
            Your Property
          </h2>
          <p style={{
            fontSize: 17,
            lineHeight: 1.6,
            margin: 0,
            color: "#222",
            maxWidth: 500
          }}>
            At Darryl Hamilton Website, we specialize in leasing residential and house properties to the right tenants—quickly and efficiently. Whether you own a house, apartment complex, or single family home, we help you secure quality tenants and optimal lease terms that protect your investment and maximize your returns.
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
            src={leaseHeroImg}
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

    {/* PROCESS AND LEASED PROPERTIES SECTION */}
    <div
      style={{
        width: "100vw",
        minHeight: "150vh",
        marginLeft: "calc(50% - 50vw)",
        background: "#13202b",
        boxSizing: "border-box",
        padding: "0 0 64px 0",
        fontFamily: "Montserrat, Arial, sans-serif"
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center", color: "#fff", paddingTop: 40 }}>
        <h2 style={{
          fontSize: 38,
          fontWeight: 700,
          marginBottom: 10,
          marginTop: 0,
          color: "#fff",
          letterSpacing: "-1px"
        }}>
          Our Comprehensive Leasing Services
        </h2>
        <p style={{
          fontSize: 16,
          color: "#e0e6ed",
          marginBottom: 48,
          marginTop: 0,
          lineHeight: 1.6,
          maxWidth: 700,
          marginLeft: "auto",
          marginRight: "auto"
        }}>
         Entrust us with your leasing needs and focus on growing your investments, knowing your property is in expert hands. Experience the difference of partnering with a team that drives results through strategic marketing, expert negotiations, and tailored service—all while prioritizing your success with clear communication and unwavering integrity. 
        </p>
        {/* Steps Grid - 3x2 grid, then last 4 on one row */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 26 }}>
          {/* First 6 steps in a 3x2 grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px 32px",
              width: "100%",
              maxWidth: 1100,
              marginBottom: 32
            }}
          >
            {steps.slice(0, 6).map((step, idx) => (
              <div
                key={step + idx}
                style={{
                  background: "transparent",
                  border: "2px solid #0066cc",
                  borderRadius: 10,
                  padding: "38px 20px",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 120,
                  textAlign: "center",
                  boxSizing: "border-box",
                  transition: "box-shadow 0.2s",
                  boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)"
                }}
              >
                {step}
              </div>
            ))}
          </div>
          {/* Last 4 steps on the same line */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              gap: "32px",
              width: "100%",
              maxWidth: 1100
            }}
          >
            {steps.slice(6, 10).map((step, idx) => (
              <div
                key={step + idx}
                style={{
                  background: "transparent",
                  border: "2px solid #0066cc",
                  borderRadius: 10,
                  padding: "38px 20px",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 120,
                  minWidth: 240,
                  flex: 1,
                  textAlign: "center",
                  boxSizing: "border-box",
                  transition: "box-shadow 0.2s",
                  boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)"
                }}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
        <div style={{ height: 72 }} />
      </div>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h3 style={{
          fontSize: 32,
          fontWeight: 700,
          margin: "0 0 32px 0",
          color: "#fff",
          textAlign: "center",
          letterSpacing: "-1px"
        }}>
          Recently Leased Properties
        </h3>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 36,
          marginBottom: 40,
          flexWrap: "wrap"
        }}>
          {leasedProperties.map((prop, idx) => (
            <div key={idx} style={{
              background: "#fff",
              borderRadius: 14,
              boxShadow: "0 2px 12px 0 rgba(0,0,0,0.07)",
              width: 340,
              minHeight: 340,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden"
            }}>
              <img src={prop.img} alt={prop.address} style={{
                width: "100%",
                height: 170,
                objectFit: "cover"
              }}/>
              <div style={{ padding: "18px 22px 14px 22px" }}>
                <div style={{
                  background: "#0066cc",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 15,
                  borderRadius: 5,
                  padding: "5px 16px",
                  display: "inline-block",
                  marginBottom: 10,
                  letterSpacing: 1
                }}>
                  {prop.status}
                </div>
                <div style={{
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#222",
                  marginBottom: 4
                }}>
                  {prop.address}
                </div>
                <div style={{
                  fontSize: 13,
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
          Start the Process of Leasing Your Property Today
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
                Daryll Hamilton LLC is a trusted provider of residential real estate services. We are committed to protecting the personal information you share with us.<br /><br />
                The personal information we collect is primarily used to respond to your inquiries and provide the services you request.<br /><br />
                We take appropriate measures to keep your information secure and retain it only for as long as necessary for legitimate business or legal purposes. Once no longer needed, we ensure it is deleted safely and securely. For more details on how we handle your personal data, please review our privacy policy.
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* --- New Section Below Contact Form, matches your screenshot and color --- */}
      <div
        style={{
          maxWidth: 1200,
          margin: "60px auto 0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          gap: 48,
          flexWrap: "wrap"
        }}
      >
        {/* Left (text & button) */}
        <div style={{ flex: 1, minWidth: 340, maxWidth: 540 }}>
          <h2 style={{
            fontSize: 36,
            color: "#122032",
            fontWeight: 700,
            margin: "0 0 18px 0",
            lineHeight: 1.15
          }}>
            Is your house lease ending soon?
          </h2>
          <p style={{
            fontSize: 16,
            color: "#444",
            margin: "0 0 28px 0"
          }}>
            Relocate or renew? Let us help you make the right choice for your business needs.
          </p>
          <button
            style={{
              background: "#0066cc",
              color: "#fff",
              fontWeight: 700,
              border: "none",
              borderRadius: 6,
              padding: "16px 32px",
              fontSize: 16,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
            }}
          >
            DOWNLOAD OUR CHECKLIST
          </button>
        </div>
        {/* Right (dark blue card) */}
        <div style={{
          flex: 1,
          minWidth: 340,
          maxWidth: 540,
          background: "#122032",
          borderRadius: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "34px 22px"
        }}>
          <div style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#fff",
            textAlign: "center",
            marginBottom: 18,
            lineHeight: 1.15
          }}>
            RENEW YOUR LEASE OR RELOCATE?
          </div>
          <a
            href="/renew-or-relocate"
            style={{
              display: "inline-block",
              color: "#fff",
              fontSize: 16,
              textDecoration: "underline",
              fontWeight: 500,
              marginTop: 8
            }}
          >
            Weigh Your Options &nbsp; &rarr;
          </a>
        </div>
      </div>
    </div>

    {/* FOOTER SECTION */}
    <FooterSection />
  </>
);

export default LeasePage;