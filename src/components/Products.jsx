import React from 'react';
import './Products.css';

// Import images
import product1Image from '../assets/Picture1.png';
import product2Image from '../assets/Picture2.png';
import product3Image from '../assets/Picture3.png';

const Products = () => {
  const products = [
    {
      badge: 'DocPilot',
      badgeColor: '#E67E50',
      title: 'Streamline Document Workflows with Automation',
      features: [
        'Automates document collection, routing, and task assignments.',
        'Real-time tracking with advanced dashboards.',
        'Seamless integration with enterprise systems via APIs.'
      ],
      benefits: [
        'Reduce turnaround times by 50%.',
        'Improve operational efficiency with minimal manual effort.'
      ],
      imagePosition: 'right',
      image: product1Image
    },
    {
      badge: 'Doxtract',
      badgeColor: '#E67E50',
      title: 'Extract, Validate, and Process Documents with Ease',
      features: [
        'OCR and NLP-based data extraction.',
        'Handles unstructured documents across industries.',
        'Validates fields using external data sources.'
      ],
      benefits: [
        'Process 10,000+ documents in minutes.',
        'Achieve 98% data accuracy with AI-driven validation.'
      ],
      imagePosition: 'left',
      image: product2Image
    },
    {
      badge: 'DocSim',
      badgeColor: '#E67E50',
      title: 'AI-Powered Document Similarity Engine',
      features: [
        'Detects near-duplicates and tampered documents.',
        'Identifies fraudulent patterns across large repositories.',
        'Multi-language support for global adaptability.'
      ],
      benefits: [
        'Save 30% time on manual checks.',
        'Reduce document fraud by up to 40%.'
      ],
      imagePosition: 'right',
      image: product3Image
    }
  ];

  return (
    <section className="products" id="products">
      <div className="products-container">
        <p className="products-subtitle">features and benefits.</p>
        <h2 className="products-title">Our Products</h2>
        
        <div className="products-list">
          {products.map((product, index) => (
            <div className={`product-item ${product.imagePosition}`} key={index}>
              {/* Decorative Elements */}
              <div className={`product-decoration ${product.imagePosition === 'left' ? 'decoration-right' : 'decoration-left'}`}>
                <div className="curved-blob"></div>
                <div className="dot-grid"></div>
              </div>

              <div className="product-content">
                <span className="product-badge" style={{background: product.badgeColor}}>
                  {product.badge}
                </span>
                <h3 className="product-title">{product.title}</h3>
                
                <div className="product-details">
                  <div className="product-section">
                    <h4>Features:</h4>
                    <ul>
                      {product.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="product-section">
                    <h4>Benefits:</h4>
                    <ul>
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="product-buttons">
                  <button className="btn-primary">Learn More</button>
                  <button className="btn-secondary">Schedule a Demo</button>
                </div>
              </div>
              
              <div className="product-visual">
                <div className="product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="product-image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
