import React from "react";
import FooterSection from './FooterSection'; // Your custom footer!

const services = [
  {
    title: "Sell Your Property",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our expert team ensures you get the best value for your property with our proven marketing strategies and extensive network.",
    features: [
      "Professional property valuation",
      "Strategic marketing campaigns",
      "Expert negotiation",
      "Fast closing process",
    ],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    path: "/services/sell",
  },
  {
    title: "Buy Your Dream Home",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Find your perfect home with our comprehensive buying services and personalized approach to real estate.",
    features: [
      "Personalized property search",
      "Market analysis and insights",
      "Financing assistance",
      "Inspection coordination",
    ],
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
    path: "/services/buy",
  },
  {
    title: "Lease & Rental Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Whether you’re looking to lease out your property or find the perfect rental, we’ve got you covered.",
    features: [
      "Tenant screening process",
      "Lease agreement preparation",
      "Property marketing",
      "Ongoing support",
    ],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    path: "/services/lease",
  },
  {
    title: "Property Management",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Full-service property management to maximize your investment returns while minimizing your workload.",
    features: [
      "24/7 maintenance support",
      "Rent collection services",
      "Regular property inspections",
      "Financial reporting",
    ],
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
    path: "/services/property-management",
  },
];

function ServicesLandingPage() {
  return (
    <div style={{ background: "#fafbfc", minHeight: "100vh", margin: 0, padding: 0 }}>
      {/* Hero Section (Full-width, no side gaps) */}
      <div
        style={{
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          width: "100vw",
          minHeight: "250px",
          background: "#0e1a27",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 0",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "48px",
            textAlign: "center",
            margin: 0,
          }}
        >
          Our Services
        </h1>
        <p
          style={{
            color: "#fff",
            fontSize: "17px",
            textAlign: "center",
            marginTop: 20,
            maxWidth: 900,
          }}
        >
          Comprehensive house property solutions tailored to your real estate needs
        </p>
      </div>

      {/* Cards Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: "32px",
          maxWidth: 1100,
          margin: "48px auto",
          justifyItems: "center",
          width: "100%",
          padding: "0 16px", // prevents cards from touching the edges on small screens
        }}
      >
        {services.map((item, idx) => (
          <a
            href={item.path}
            key={item.title}
            style={{
              textDecoration: "none",
              color: "inherit",
              borderRadius: 10,
              boxShadow: "0 4px 24px 0 rgba(16,30,54,0.06)",
              background: "#fff",
              overflow: "hidden",
              maxWidth: 500,
              minWidth: 340,
              width: "100%",
              transition: "box-shadow .2s, transform .2s",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
            onMouseOver={e =>
              (e.currentTarget.style.boxShadow =
                "0 8px 32px 0 rgba(16,30,54,0.14)")
            }
            onMouseOut={e =>
              (e.currentTarget.style.boxShadow =
                "0 4px 24px 0 rgba(16,30,54,0.06)")
            }
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: 140,
                objectFit: "cover",
                background: "#f4f4f4",
              }}
            />
            <div style={{ padding: 24, flex: 1 }}>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  margin: "0 0 10px 0",
                  color: "#222",
                }}
              >
                {item.title}
              </h2>
              <p style={{ fontSize: 14, color: "#444", margin: "0 0 16px 0" }}>
                {item.desc}
              </p>
              <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                {item.features.map(f => (
                  <li
                    key={f}
                    style={{
                      fontSize: 14,
                      color: "#222",
                      marginBottom: 8,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#f55c3b",
                        fontWeight: "bold",
                        marginRight: 8,
                        fontSize: 17,
                        lineHeight: 1,
                      }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}

export default ServicesLandingPage;