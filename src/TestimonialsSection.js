import React from "react";
import FooterSection from './FooterSection'; // Your custom footer!

const testimonials = [
  {
    author: "Benjamin Tillis",
    text: `"With a growing family, I needed a larger house to accommodate everyone. Initially I was undecided between buying a new property or renovating. I worked with John at Sample Site and he helped me make an educated final decision. I decided to buy because it would be a long term investment. We closed on the property in December and I am so happy that we did. Will work with John and his team again."`,
  },
  {
    author: "Mel Stone",
    text: `"Sample Site is a standout in the residential real estate sector, known for their exceptional service and expertise. As a family-owned brokerage, they prioritize building strong relationships and fostering trust with clients and partners. John has gone above and beyond to help me navigate deals. Their personalized approach, honesty and integrity sets them apart, making them a reliable choice for anyone navigating the residential real estate market."`,
  },
  {
    author: "Stephen Steiner",
    text: `"One of our friends introduced me to John from Sample Site, when we decided to upgrade to a larger home. I interviewed several companies large and small before agreeing to work with Sample Site. To say that they hit the ball out of the park is an understatement! Despite the challenging market, they found us a home that is perfectly suited for our family within 60 days. Moving forward, John will be our go-to resource for all our real estate needs."`,
  },
  {
    author: "Sarah Johnson",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sample Site helped us find our dream home in just 3 weeks. Their attention to detail and personalized service made all the difference."`,
  },
  {
    author: "Michael Chen",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Professional, knowledgeable, and always available when we needed them. Highly recommend Sample Site for all your real estate needs."`,
  },
  {
    author: "Emily Rodriguez",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. They sold our house above asking price and helped us find our new home. Couldn't be happier with the service we received."`,
  },
];

function TestimonialLandingPage() {
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
          Testimonials
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
          Hear from our happy clients — why they chose us and what made their experience unforgettable.
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
        {testimonials.map((item, idx) => (
          <div
            key={item.author}
            style={{
              borderRadius: 10,
              boxShadow: "0 4px 24px 0 rgba(16,30,54,0.06)",
              background: "#2d4253",
              overflow: "hidden",
              maxWidth: 380,
              minWidth: 300,
              width: "100%",
              transition: "box-shadow .2s, transform .2s",
              display: "flex",
              flexDirection: "column",
              cursor: "default",
              color: "#fff",
              position: "relative",
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
            <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
              <span style={{
                color: "#0066cc", // Blue color for stars
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 10,
                letterSpacing: 2,
              }}>
                ★★★★★
              </span>
              <p style={{
                fontSize: 15,
                color: "#dbe9f9",
                fontStyle: "italic",
                margin: "0 0 24px 0",
                flex: 1,
              }}>
                {item.text}
              </p>
              <div style={{
                textAlign: "right",
                fontWeight: 600,
                color: "#fff",
                fontSize: 15,
                marginTop: "auto"
              }}>
                — {item.author}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}

export default TestimonialLandingPage;