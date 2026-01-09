import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* DNA/Molecule Structure */}
              <circle cx="20" cy="20" r="3" fill="#4A7BCC"/>
              <circle cx="12" cy="12" r="2.5" fill="#4A7BCC"/>
              <circle cx="28" cy="12" r="2.5" fill="#4A7BCC"/>
              <circle cx="12" cy="28" r="2.5" fill="#4A7BCC"/>
              <circle cx="28" cy="28" r="2.5" fill="#4A7BCC"/>
              <line x1="20" y1="20" x2="12" y2="12" stroke="#4A7BCC" strokeWidth="1.5"/>
              <line x1="20" y1="20" x2="28" y2="12" stroke="#4A7BCC" strokeWidth="1.5"/>
              <line x1="20" y1="20" x2="12" y2="28" stroke="#4A7BCC" strokeWidth="1.5"/>
              <line x1="20" y1="20" x2="28" y2="28" stroke="#4A7BCC" strokeWidth="1.5"/>
              <circle cx="8" cy="20" r="2" fill="#5B8DD8"/>
              <circle cx="32" cy="20" r="2" fill="#5B8DD8"/>
              <line x1="12" y1="12" x2="8" y2="20" stroke="#5B8DD8" strokeWidth="1.5"/>
              <line x1="28" y1="12" x2="32" y2="20" stroke="#5B8DD8" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="logo-text">
            <h2>AADRILA</h2>
            <span className="logo-subtitle">TECHNOLOGIES</span>
          </div>
        </div>
        
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>

        <button className="demo-btn">Get a Demo</button>
        
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
