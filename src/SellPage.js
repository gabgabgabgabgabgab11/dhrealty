import React from "react";
import img1 from './lease1.jpg'; // use your real images
import img2 from './lease2.jpg';
import img3 from './lease3.jpg';
import sellHeroImg from './sell.jpg'; // Your hero section image
import FooterSection from './FooterSection'; // Your custom footer!

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

const SellPage = () => (
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
            Sell
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
            At Sample Site, we understand that selling your house property is a significant decision.
            Our team of experienced brokers is dedicated to ensuring you achieve the best possible price,
            backed by tailored marketing strategies designed specifically for your unique asset.
            With over 50 years of combined experience in the local residential real estate market,
            we provide the expertise and dedication needed to navigate the complexities of property sales.
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
            src={sellHeroImg}
            alt="Bright empty room"
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

    {/* PROCESS AND SOLD PROPERTIES SECTION */}
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        marginLeft: "calc(50% - 50vw)",
        background: "#162430",
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
          Sell Your House Property Hassle-Free
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
          Partner with Sample Site to experience a seamless and rewarding sales process. Our commitment to clear communication, ethical standards, and customized service ensures your investment is in capable hands.
        </p>
        {/* Steps Grid */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", gap: 28 }}>
            {steps.slice(0, 3).map((step) => (
              <div key={step} style={{
                border: "2px solid #0066cc",
                borderRadius: 10,
                padding: "50px 32px",
                minWidth: 300,
                color: "#fff",
                fontWeight: 500,
                fontSize: 17,
                background: "#162430",
                marginBottom: 0
              }}>
                {step}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            {steps.slice(3, 6).map((step) => (
              <div key={step} style={{
                border: "2px solid #0066cc",
                borderRadius: 10,
                padding: "50px 32px",
                minWidth: 300,
                color: "#fff",
                fontWeight: 500,
                fontSize: 17,
                background: "#162430",
                marginBottom: 0
              }}>
                {step}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            {steps.slice(6).map((step) => (
              <div key={step} style={{
                border: "2px solid #0066cc",
                borderRadius: 10,
                padding: "50px 32px",
                minWidth: 300,
                color: "#fff",
                fontWeight: 500,
                fontSize: 17,
                background: "#162430",
                marginBottom: 0
              }}>
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
          Start the Process of Selling Your House Property Today
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
    </div>

    {/* FOOTER SECTION */}
    <FooterSection />
  </>
);

export default SellPage;