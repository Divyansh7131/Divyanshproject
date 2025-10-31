import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import './contact.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <div className="container">
          <h1 className="header-title">Get In Touch</h1>
          <p className="header-subtitle">We'd love to hear from you. Send us a message!</p>
        </div>
      </div>

      <div className="container main-content">
        <div className="info-cards-grid">
          {/* Contact Info Cards */}
          <div className="info-card">
            <div className="icon-wrapper">
              <Phone size={24} />
            </div>
            <h3 className="card-title">Phone</h3>
            <p className="card-text">+1 (555) 123-4567</p>
            <p className="card-text">+1 (555) 765-4321</p>
          </div>

          <div className="info-card">
            <div className="icon-wrapper">
              <Mail size={24} />
            </div>
            <h3 className="card-title">Email</h3>
            <p className="card-text">support@foodie.com</p>
            <p className="card-text">orders@foodie.com</p>
          </div>

          <div className="info-card">
            <div className="icon-wrapper">
              <Clock size={24} />
            </div>
            <h3 className="card-title">Hours</h3>
            <p className="card-text">Mon-Fri: 9AM - 10PM</p>
            <p className="card-text">Sat-Sun: 10AM - 11PM</p>
          </div>
        </div>

        <div className="content-grid">
          {/* Contact Form */}
          <div className="form-section">
            <h2 className="section-title">Send us a Message</h2>
            
            {submitted ? (
              <div className="success-message">
                <CheckCircle className="success-icon" size={64} />
                <h3 className="success-title">Message Sent!</h3>
                <p className="success-text">Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <div className="form-wrapper">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="form-input form-textarea"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <button onClick={handleSubmit} className="submit-button">
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </div>
            )}
          </div>

          {/* Map and Additional Info */}
          <div className="side-content">
            <div className="location-section">
              <h2 className="section-title">Visit Our Location</h2>
              
              <div className="location-info">
                <MapPin className="location-icon" size={24} />
                <div>
                  <p className="location-line primary">123 Foodie Street</p>
                  <p className="location-line">Downtown District</p>
                  <p className="location-line">City, State 12345</p>
                </div>
              </div>

              {/* Mock Map */}
              <div className="map-placeholder">
                <div className="map-content">
                  <MapPin className="map-icon" size={48} />
                  <p className="map-text">Map Location</p>
                </div>
              </div>
            </div>

            <div className="support-card">
              <h3 className="support-title">Need Immediate Help?</h3>
              <p className="support-text">Our customer support team is available 24/7 for urgent inquiries.</p>
              <button className="support-button">Chat with Support</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}