import React from "react";
import FooterSection from './FooterSection';

function AboutPage() {
  return (
    <div style={{ background: "#fafbfc", minHeight: "100vh", margin: 0, padding: 0 }}>
      {/* Hero Section (Dark background, Full width) */}
      <div
        style={{
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          width: "100vw",
          background: "#0e1a27",
          minHeight: "250px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          padding: "50px 0 30px 0",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "48px",
            margin: 0,
            textAlign: "center",
          }}
        >
          About Sample Site
        </h1>
        <p
          style={{
            color: "#fff",
            fontSize: "18px",
            textAlign: "center",
            marginTop: 20,
            maxWidth: 700,
          }}
        >
          Your trusted partner in residential real estate with over 50 years of combined experience
        </p>
      </div>

      {/* Top Section with White Background */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "60px",
        marginBottom: "40px"
      }}>
        <h1 style={{
          fontSize: "42px",
          fontWeight: 800,
          color: "#151c26",
          margin: 0,
          textAlign: "center",
          letterSpacing: "-1px",
        }}>
          Our Story
        </h1>
        <p style={{
          fontSize: "18px",
          color: "#444",
          marginTop: "18px",
          marginBottom: 0,
          maxWidth: 600,
          textAlign: "center",
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. We are dedicated to<br />
          providing exceptional real estate services.
        </p>
      </div>

      {/* Cards Section */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        maxWidth: "1000px",
        margin: "0 auto",
        paddingBottom: "40px",
        flexWrap: "wrap",
      }}>
        {/* Profile Card */}
        <div style={{
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 24px rgba(16,30,54,0.08)",
          maxWidth: "420px",
          minWidth: "340px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          overflow: "hidden",
        }}>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="John Doe"
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              background: "#f4f4f4",
            }}
          />
          <div style={{ padding: "28px 28px 24px 28px" }}>
            <h2 style={{
              fontSize: "21px",
              fontWeight: 800,
              color: "#151c26",
              margin: "0 0 12px 0",
            }}>
              John Doe - Managing Broker
            </h2>
            <p style={{
              fontSize: "16px",
              color: "#444",
              margin: 0,
              lineHeight: 1.6,
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. With over 25 years of experience in residential real estate, John has helped hundreds of families find their dream homes.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div style={{
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 24px rgba(16,30,54,0.08)",
          maxWidth: "420px",
          minWidth: "340px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          overflow: "hidden",
        }}>
          <div style={{ padding: "28px 28px 24px 28px" }}>
            <h2 style={{
              fontSize: "21px",
              fontWeight: 800,
              color: "#151c26",
              margin: "0 0 12px 0"
            }}>
              Our Mission
            </h2>
            <p style={{
              fontSize: "16px",
              color: "#444",
              marginBottom: "18px",
              lineHeight: 1.6,
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. We believe in putting our clients first and providing honest, transparent service that builds lasting relationships.
            </p>
            <ul style={{
              padding: 0,
              margin: 0,
              listStyle: "none",
            }}>
              {[
                "Client-focused approach",
                "Honest and transparent communication",
                "Expert market knowledge",
                "Innovative marketing strategies"
              ].map((item, i, arr) => (
                <li key={item} style={{
                  fontSize: "16px",
                  color: "#222",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: i !== arr.length - 1 ? "1px solid #ececec" : "none"
                }}>
                  <span style={{
                    color: "#f55c3b",
                    fontWeight: "bold",
                    marginRight: "10px",
                    fontSize: "18px"
                  }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}

export default AboutPage;