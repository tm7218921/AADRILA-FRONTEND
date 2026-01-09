import React from 'react';
import './Industries.css';

const Industries = () => {
  const industries = [
    {
      title: 'Healthcare',
      description: 'Streamline patient record management and ensure compliance with HIPAA standards.',
      icon: '🏥'
    },
    {
      title: 'Lending',
      description: 'Ensure faster loan approvals with fraud detection and instant verification.',
      icon: '💰'
    },
    {
      title: 'Insurance',
      description: 'Automate claims processing with accurate document validation.',
      icon: '🛡️'
    }
  ];

  return (
    <section className="industries" id="industries">
      {/* Large curved background shape */}
      <div className="curved-background"></div>
      
      {/* Dot pattern decorations */}
      <div className="dot-pattern dot-pattern-top"></div>
      <div className="dot-pattern dot-pattern-bottom"></div>
      
      <div className="industries-container">
        <p className="industries-subtitle">AI-driven innovation for growth.</p>
        <h2 className="industries-title">Industries We Empower</h2>
        
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div 
              className={`industry-card ${index === 0 ? 'card-left' : index === 1 ? 'card-center' : 'card-right'}`} 
              key={index}
            >
              <div className="industry-icon-wrapper">
                <div className="industry-icon">
                  <span className="icon-emoji">{industry.icon}</span>
                </div>
              </div>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
