import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    inquiryType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      companyName: '',
      inquiryType: '',
      message: ''
    });
  };

  return (
    <section className="contact-us" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p className="contact-intro">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's
          </p>
          
          <div className="office-info">
            <div className="office">
              <h3>📍 U.S. Office</h3>
              <p>Aadrila Technologies Inc.</p>
              <p>4 The Green Ste R, In the City of Dover County of Kent Zip Code 19901</p>
            </div>
            
            <div className="office">
              <h3>📍 India Office</h3>
              <p>Aadrila Technologies Private Limited</p>
              <p>Unit 201, Lotus Trade Centre, Sarjapur-Marathalli Road, HSR 4th Sector, Near KTX Nagar, Kundalahalli West, Bangalore 560103</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-row">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            
            <input
              type="text"
              name="inquiryType"
              placeholder="Inquiry Type"
              value={formData.inquiryType}
              onChange={handleChange}
              className="full-width"
            />
            
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="full-width"
              required
            ></textarea>
            
            <button type="submit" className="submit-btn">Send Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
