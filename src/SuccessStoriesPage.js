import React from "react";
import FooterSection from './FooterSection'; // Your custom footer!

const successStories = [
  {
    title: "The Johnson Family",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sold their home 20% above asking price in just 10 days with our strategic marketing approach.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "First-Time Buyers",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Helped Maria and Carlos find their perfect starter home within their budget in a competitive market.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Investment Property",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Secured a multi-family property that generates 12% annual ROI for our investor client.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Luxury Home Sale",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Successfully marketed and sold a $2.5M luxury estate in record time during market uncertainty.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Relocation Specialist",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Assisted a corporate relocation with seamless buying and selling coordination across two states.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Downsizing Success",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Helped empty nesters find the perfect condo while maximizing proceeds from their family home sale.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
  },
];

function SuccessStoriesLandingPage() {
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
          Success Stories
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
          Real clients. Real results. See how we've made a difference for homeowners, buyers, and investors.
        </p>
      </div>

      {/* Cards Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "32px",
          maxWidth: 1200,
          margin: "48px auto",
          justifyItems: "center",
          width: "100%",
          padding: "0 16px", // prevents cards from touching the edges on small screens
        }}
      >
        {successStories.map((item, idx) => (
          <div
            key={item.title}
            style={{
              borderRadius: 10,
              boxShadow: "0 4px 24px 0 rgba(16,30,54,0.06)",
              background: "#fff",
              overflow: "hidden",
              maxWidth: 380,
              minWidth: 300,
              width: "100%",
              transition: "box-shadow .2s, transform .2s",
              display: "flex",
              flexDirection: "column",
              cursor: "default",
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
              <p style={{ fontSize: 14, color: "#444", margin: "0" }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}

export default SuccessStoriesLandingPage;