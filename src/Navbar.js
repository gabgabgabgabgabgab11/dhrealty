import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const services = [
  { label: "Sell", path: "/services/sell" },
  { label: "Buy", path: "/services/buy" },
  { label: "Lease", path: "/services/lease" },
  { label: "Tenant Representation", path: "/services/tenant-representation" },
  { label: "Property Management", path: "/services/property-management" },
  { label: "Broker's Opinion of Value", path: "/services/brokers-opinion-of-value" }
];

const about = [
  { label: "Testimonials", path: "/testimonials" }
];

const media = [
  { label: "Insights", path: "/media/insights" },
  { label: "Press", path: "/media/press" },
  { label: "Recognitions & Milestones", path: "/media/recognitions" },
  { label: "Podcast", path: "/media/podcast" }
];

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeSingle, setActiveSingle] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState({ services: null, about: null, media: null });
  const [phoneClicked, setPhoneClicked] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);
  const navigate = useNavigate();

  const getDropdownItemStyle = (menu, idx) => ({
    ...styles.dropdownItem,
    color: hoveredIndex[menu] === idx ? '#0066cc' : '#333',
    background: hoveredIndex[menu] === idx ? '#f0f7ff' : '#fff',
    textDecoration: 'none'
  });

  const handleDropdownClick = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
    setActiveSingle(null);
  };

  const getLabelStyle = (menu) => ({
    cursor: 'pointer',
    userSelect: 'none',
    color: openDropdown === menu ? '#0066cc' : '#333',
    fontWeight: openDropdown === menu ? 'bold' : 'normal',
    transition: 'color 0.2s'
  });

  const getSingleStyle = (label) => ({
    cursor: 'pointer',
    userSelect: 'none',
    color: activeSingle === label ? '#0066cc' : '#333',
    fontWeight: activeSingle === label ? 'bold' : 'normal',
    transition: 'color 0.2s'
  });

  const handleSingleClick = (label, path) => {
    setActiveSingle(activeSingle === label ? null : label);
    setOpenDropdown(null);
    if (path) navigate(path);
  };

  let buttonBg = styles.button.background;
  if (buttonPressed) buttonBg = "#004999";
  else if (buttonHovered) buttonBg = "#005bb5";
  else buttonBg = "#0066cc";

  return (
    <nav style={styles.nav}>
      <div
        onClick={() => navigate("/")}
        style={{ ...styles.logo, cursor: "pointer" }}
      >
        Darryl Hamilton Website
      </div>
      <ul style={styles.menu}>
        {/* Services Dropdown */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <li
            style={getLabelStyle('services')}
            onClick={() => {
              navigate('/services');
              handleDropdownClick('services');
            }}
          >
            Services
          </li>
          {openDropdown === 'services' && (
            <div style={styles.dropdown}>
              {services.map((service, idx) => (
                <div
                  key={service.label}
                  style={{ ...getDropdownItemStyle('services', idx), display: 'block' }}
                  onMouseEnter={() => setHoveredIndex(h => ({ ...h, services: idx }))}
                  onMouseLeave={() => setHoveredIndex(h => ({ ...h, services: null }))}
                  onClick={() => {
                    setOpenDropdown(null);
                    navigate(service.path);
                  }}
                >
                  {service.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* About Dropdown */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <li
            style={getLabelStyle('about')}
            onClick={() => {
              navigate('/about');
              handleDropdownClick('about');
            }}
          >
            About
          </li>
          {openDropdown === 'about' && (
            <div style={styles.dropdown}>
              {about.map((item, idx) => (
                <div
                  key={item.label}
                  style={getDropdownItemStyle('about', idx)}
                  onMouseEnter={() => setHoveredIndex(h => ({ ...h, about: idx }))}
                  onMouseLeave={() => setHoveredIndex(h => ({ ...h, about: null }))}
                  onClick={() => {
                    setOpenDropdown(null);
                    navigate(item.path);
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Success Stories - single link */}
        <li
          style={getSingleStyle('successStories')}
          onClick={() => handleSingleClick('successStories', '/success-stories')}
        >
          Success Stories
        </li>

        {/* Media Dropdown */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <li
            style={getLabelStyle('media')}
            onClick={() => {
              navigate('/media');
              handleDropdownClick('media');
            }}
          >
            Media
          </li>
          {openDropdown === 'media' && (
            <div style={styles.dropdown}>
              {media.map((item, idx) => (
                <div
                  key={item.label}
                  style={getDropdownItemStyle('media', idx)}
                  onMouseEnter={() => setHoveredIndex(h => ({ ...h, media: idx }))}
                  onMouseLeave={() => setHoveredIndex(h => ({ ...h, media: null }))}
                  onClick={() => {
                    setOpenDropdown(null);
                    navigate(item.path);
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* PHONE: clickable and toggles blue on click */}
        <li
          style={{
            ...styles.phone,
            color: phoneClicked ? '#0066cc' : styles.phone.color,
            cursor: 'pointer',
            transition: 'color 0.2s'
          }}
          onClick={() => setPhoneClicked(clicked => !clicked)}
        >
          (555) 123-4567
        </li>
        {/* BUTTON: hover and active color */}
        <li>
          <button
            style={{
              ...styles.button,
              background: buttonBg,
              transition: "background 0.15s"
            }}
            onMouseDown={() => setButtonPressed(true)}
            onMouseUp={() => setButtonPressed(false)}
            onMouseLeave={() => { setButtonPressed(false); setButtonHovered(false); }}
            onMouseEnter={() => setButtonHovered(true)}
            onFocus={() => setButtonHovered(true)}
            onBlur={() => { setButtonPressed(false); setButtonHovered(false); }}
          >
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#fff',
    padding: '0 40px',
    height: '70px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
    position: 'relative',
    zIndex: 10
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    letterSpacing: '1px'
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    margin: 0,
    padding: 0
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    background: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.07)',
    borderRadius: 5,
    minWidth: 220,
    marginTop: 8,
    zIndex: 20,
    padding: '6px 0'
  },
  dropdownItem: {
    padding: '12px 18px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s',
    whiteSpace: 'nowrap'
  },
  phone: {
    color: '#333',
    fontWeight: 'bold'
  },
  button: {
    background: '#0066cc',
    color: '#fff',
    border: 'none',
    padding: '8px 18px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem'
  }
};

export default Navbar;