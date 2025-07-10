import React from "react";
import FooterSection from './FooterSection'; // Your custom footer!

const mediaItems = [
  {
    title: "Market Insights",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Get expert analysis and insights into current market trends and forecasts.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", // Room image
  },
  {
    title: "Press Coverage",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Featured in major publications for our innovative approach and outstanding results.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80", // House image
  },
  {
    title: "Awards & Recognition",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recognized by industry leaders for excellence in customer service and sales performance.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", // Room image
  },
  {
    title: "Podcasts & Interviews",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Listen to our expert discussions on real estate trends and valuable tips for buyers and sellers.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80", // House image
  },
];

function MediaLandingPage() {
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
          In the Media
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
          Discover our latest press coverage, expert insights, and media appearances.
        </p>
      </div>

      {/* Cards Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
          gap: "32px",
          maxWidth: 1200,
          margin: "48px auto",
          justifyItems: "center",
          width: "100%",
          padding: "0 16px", // prevents cards from touching the edges on small screens
        }}
      >
        {mediaItems.map((item, idx) => (
          <div
            key={item.title}
            style={{
              borderRadius: 10,
              boxShadow: "0 4px 24px 0 rgba(16,30,54,0.06)",
              background: "#fff",
              overflow: "hidden",
              maxWidth: 540,
              minWidth: 340,
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

export default MediaLandingPage;