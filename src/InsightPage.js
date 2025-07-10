import React from "react";
import FooterSection from './FooterSection';

// Example insight data, you can expand as needed
const insights = [
  {
    title: "Market Trends & Analysis",
    desc: "Stay ahead with our latest market research, price trends, and neighborhood insights to make informed real estate decisions.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    tag: "Market",
  },
  {
    title: "Expert Tips",
    desc: "Get practical advice from top real estate professionals on buying, selling, and investing in property.",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
    tag: "Advice",
  },
  {
    title: "Community Spotlights",
    desc: "Discover the best neighborhoods, amenities, and hidden gems with in-depth community profiles.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    tag: "Community",
  },
  {
    title: "Client Success Stories",
    desc: "Read real stories from clients who achieved their real estate goals with our guidance and expertise.",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
    tag: "Success",
  },
];

function InsightPage() {
  return (
    <div style={{ background: "#f6f8fa", minHeight: "100vh", margin: 0 }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(90deg, #e3eefc 0%, #fff 100%)",
          padding: "56px 0 32px 0",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#0e1a27",
            fontWeight: 900,
            fontSize: "56px",
            margin: 0,
            letterSpacing: "-2px",
          }}
        >
          Insights & Resources
        </h1>
        <p
          style={{
            color: "#222",
            fontSize: 21,
            margin: "32px auto 0 auto",
            maxWidth: 600,
            fontWeight: 400,
          }}
        >
          Discover expert advice, in-depth analysis, and real stories to empower your real estate journey.
        </p>
      </section>

      {/* Featured section */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Featured (first) insight, prominent card */}
        <div
          style={{
            margin: "56px 0 48px 0",
            borderRadius: 32,
            overflow: "hidden",
            boxShadow: "0 8px 48px 0 rgba(16,30,54,0.10)",
            display: "flex",
            flexDirection: "row",
            background: "#fff",
            minHeight: 320,
            alignItems: "stretch",
            position: "relative",
          }}
        >
          <div style={{
            flex: 1.3,
            background: `url(${insights[0].image}) center center/cover no-repeat`,
            minWidth: 260,
            maxWidth: 450,
          }} />
          <div style={{
            flex: 2,
            padding: "48px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start"
          }}>
            <span style={{
              background: "#0066cc",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: 1,
              borderRadius: 12,
              padding: "5px 18px",
              marginBottom: 20,
              display: "inline-block",
            }}>
              {insights[0].tag}
            </span>
            <h2 style={{
              fontSize: "32px",
              fontWeight: 800,
              margin: "0 0 14px 0",
              color: "#0e1a27",
            }}>
              {insights[0].title}
            </h2>
            <p style={{
              fontSize: 18,
              color: "#222",
              opacity: 0.92,
              margin: 0,
              lineHeight: 1.6,
              maxWidth: 500,
            }}>
              {insights[0].desc}
            </p>
          </div>
        </div>
      </section>

      {/* Subgrid of remaining insights */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto 80px auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
        }}
      >
        {insights.slice(1).map((item, idx) => (
          <div
            key={item.title}
            style={{
              background: "#fff",
              borderRadius: 18,
              boxShadow: "0 4px 24px 0 rgba(16,30,54,0.06)",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minHeight: 390,
              transition: "box-shadow .2s, transform .2s",
            }}
            onMouseOver={e => {
              e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(0,102,204,0.13)";
              e.currentTarget.style.transform = "translateY(-2px) scale(1.025)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.boxShadow = "0 4px 24px 0 rgba(16,30,54,0.06)";
              e.currentTarget.style.transform = "none";
            }}
          >
            <div style={{ width: "100%", height: 170, background: `url(${item.image}) center center/cover no-repeat` }} />
            <div style={{ padding: "32px 28px 32px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
              <span style={{
                background: "#0066cc",
                color: "#fff",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 1,
                borderRadius: 12,
                padding: "4px 16px",
                marginBottom: 16,
                alignSelf: "flex-start",
                display: "inline-block",
              }}>
                {item.tag}
              </span>
              <h3 style={{
                fontSize: "22px",
                fontWeight: 800,
                color: "#0e1a27",
                margin: "0 0 10px 0",
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 15, color: "#333", opacity: 0.92, margin: 0, lineHeight: 1.7 }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      <FooterSection />
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          section > div[style*="flex-direction: row"] {
            flex-direction: column !important;
            min-height: 320px !important;
          }
          section > div[style*="flex-direction: row"] > div:first-child {
            min-height: 220px !important;
            max-width: none !important;
          }
        }
        @media (max-width: 700px) {
          h1 { font-size: 32px !important; }
          h2 { font-size: 24px !important; }
          section > div[style*="flex-direction: row"] {
            flex-direction: column !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

export default InsightPage;