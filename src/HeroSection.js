import React, { useState } from 'react';
import cityRain from './CityRain.jpg';

const HeroSection = () => {
  // State to track if button is pressed or hovered (for smooth color transition)
  const [buttonPressed, setButtonPressed] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  // Button background color logic
  let buttonBg = '#0066cc'; // normal
  if (buttonPressed) buttonBg = '#004999'; // darkest
  else if (buttonHovered) buttonBg = '#005bb5'; // hover

  return (
    <div style={{
      backgroundImage: `url(${cityRain})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '80vh',
      width: '100vw',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(24, 39, 64, 0.6)'
      }} />
      <div style={{
        position: 'relative',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: 16 }}>
          OUR <span style={{ color: '#0066cc' }}>MILLIONS</span> IN REACH
        </h1>
        <h2 style={{ fontWeight: 600, marginBottom: 32 }}>
          MEANS A <span style={{ color: '#0066cc' }}>GUARANTEED</span> SALE
        </h2>
        <button
          style={{
            background: buttonBg,
            color: 'white',
            border: 'none',
            padding: '14px 32px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            borderRadius: 4,
            cursor: 'pointer',
            transition: 'background 0.18s'
          }}
          onMouseDown={() => setButtonPressed(true)}
          onMouseUp={() => setButtonPressed(false)}
          onMouseLeave={() => { setButtonPressed(false); setButtonHovered(false); }}
          onMouseEnter={() => setButtonHovered(true)}
          onFocus={() => setButtonHovered(true)}
          onBlur={() => { setButtonPressed(false); setButtonHovered(false); }}
        >
          Speak To An Expert Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;