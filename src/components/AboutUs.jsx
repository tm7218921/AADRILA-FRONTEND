import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-tagline">Meet the Minds Shaping Document Automation.</p>
        
        <div className="vision-mission">
          <div className="vision-card">
            <div className="icon-wrapper vision-icon">
              <span className="icon-text">👁️</span>
            </div>
            <div className="card-content">
              <h3>Our Vision</h3>
              <p>To redefine document management with cutting-edge technology that ensures productivity, efficiency, and trust.</p>
            </div>
          </div>
          
          <div className="mission-card">
            <div className="icon-wrapper mission-icon">
              <span className="icon-text">🎯</span>
            </div>
            <div className="card-content">
              <h3>Our Mission</h3>
              <p>To enable the document management with cutting-edge technology that ensures productivity, efficiency, and trust.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
