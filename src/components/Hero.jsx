import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background-waves">
        <svg className="wave-svg" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,400 C200,300 400,500 600,400 C800,300 1000,500 1200,400 L1200,800 L0,800 Z" fill="rgba(180, 210, 255, 0.15)"/>
          <path d="M0,450 C250,350 450,550 650,450 C850,350 1050,550 1250,450 L1250,800 L0,800 Z" fill="rgba(180, 210, 255, 0.1)"/>
          <path d="M0,500 C300,400 500,600 700,500 C900,400 1100,600 1300,500 L1300,800 L0,800 Z" fill="rgba(180, 210, 255, 0.08)"/>
        </svg>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">AI-Powered</span><br />
            Document Automation<br />
            & Fraud Detection
          </h1>
          <p className="hero-description">
            Enhance security, accuracy, and efficiency with our cutting-edge AI solutions for seamless document processing and fraud prevention.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get a Demo</button>
            <button className="btn-secondary">Explore Solutions</button>
          </div>
        </div>
        
        <div className="hero-image-section">
          <div className="document-mockup">
            {/* Driver's License Card */}
            <div className="license-card">
              <div className="license-header">DRIVING LICENSE</div>
              <div className="license-body">
                <div className="license-photo">
                  <div className="photo-placeholder">👤</div>
                </div>
                <div className="license-info">
                  <div className="info-row"><strong>Name:</strong> LOREM</div>
                  <div className="info-row"><strong>DOB:</strong> DD/MM/YYYY</div>
                  <div className="info-row"><strong>ID:</strong> LOREM IPSUM</div>
                  <div className="info-class">CLASS B1</div>
                </div>
              </div>
              <div className="license-number">01234567</div>
              <div className="barcode">||||||||||||||||||||</div>
            </div>
            
            {/* Document with Chart */}
            <div className="document-chart">
              <div className="chart-header">Financial Document</div>
              <div className="mini-chart">
                <div className="chart-bars">
                  <div className="bar" style={{height: '40%'}}></div>
                  <div className="bar" style={{height: '60%'}}></div>
                  <div className="bar" style={{height: '80%'}}></div>
                  <div className="bar" style={{height: '100%'}}></div>
                  <div className="bar" style={{height: '70%'}}></div>
                </div>
              </div>
            </div>
            
            {/* Orange Badge */}
            <div className="orange-badge">
              <div className="badge-icon">📊</div>
              <div className="badge-text">Verified</div>
            </div>
            
            {/* Table Document */}
            <div className="table-document">
              <div className="table-header">SAMPLE DOCUMENT</div>
              <div className="table-rows">
                <div className="table-row">
                  <span className="row-icon">👤</span>
                  <span className="row-data">Data Entry 1</span>
                </div>
                <div className="table-row">
                  <span className="row-icon">👤</span>
                  <span className="row-data">Data Entry 2</span>
                </div>
                <div className="table-row">
                  <span className="row-icon">👤</span>
                  <span className="row-data">Data Entry 3</span>
                </div>
                <div className="table-row">
                  <span className="row-icon">👤</span>
                  <span className="row-data">Data Entry 4</span>
                </div>
              </div>
              <div className="table-footer">01234567</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
