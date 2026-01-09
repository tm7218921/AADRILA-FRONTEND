import React from 'react';
import './Blogs.css';

const Blogs = () => {
  const blogs = [
    {
      title: 'How AI is Revolutionizing Document Management for Enterprises',
      date: 'May 2022',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
    },
    {
      title: 'Top 5 Fraud Prevention Strategies for Financial Institutions',
      date: 'May 2022',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
    },
    {
      title: 'The Future of OCR: From Basic Extraction to AI-Driven Intelligence',
      date: 'May 2022',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
    }
  ];

  return (
    <section className="blogs" id="blog">
      <div className="blogs-container">
        <h2 className="blogs-title">Blogs</h2>
        <p className="blogs-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
          Lorem Ipsum has been the industry's standard.
        </p>
        
        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-date">{blog.date}</div>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
            </div>
          ))}
        </div>
        
        <div className="blogs-navigation">
          <button className="nav-btn prev">‹</button>
          <button className="nav-btn next">›</button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
