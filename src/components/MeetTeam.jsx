import React from 'react';
import './MeetTeam.css';

const MeetTeam = () => {
  return (
    <section className="meet-team">
      <div className="team-container">
        <h2 className="team-title">Meet our team</h2>
        <p className="team-description">
          Meet our passionate and talented team. Committed to delivering exceptional<br />
          results, driving innovation, and transforming your vision into reality.
        </p>
        
        <div className="social-links">
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image">👨‍💼</div>
          </div>
          <div className="team-member featured">
            <div className="member-image">👩‍💼</div>
          </div>
          <div className="team-member">
            <div className="member-image">👨‍💻</div>
          </div>
        </div>
        
        <div className="featured-member">
          <h3 className="featured-name">MANSI SHUKLA</h3>
          <p className="featured-description">
            For this time-constrained and generation-x I am currently, my assistant loved to play outside. We interacted more in our houses than our phones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
