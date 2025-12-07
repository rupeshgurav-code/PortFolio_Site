import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <div className="section-badge">Let's Connect</div>
          <h2 className="section-title">
            Get In <span className="highlight">Touch</span>
          </h2>
          <p className="section-description">
            I'd love to hear from you! Whether it's a question, feedback, or just a hello.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              <span>Name</span>
            </label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <span>Email</span>
            </label>
            <input 
              type="email" 
              id="email" 
              placeholder="your.email@example.com" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              <span>Message</span>
            </label>
            <textarea 
              id="message" 
              rows="6" 
              placeholder="Type your message here..." 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            <span>Send Message</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3.33334 10L16.6667 10M16.6667 10L11.6667 5M16.6667 10L11.6667 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;