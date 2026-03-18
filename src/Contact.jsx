import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import './Contact.css';
import contactMeImage from './image/contact.jpg';
import emailjs from '@emailjs/browser'; // ✅ Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ Only one handleSubmit using EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      'service_jrfna6b',    // Replace with your EmailJS service ID
      'template_h2xbmhj',   // Replace with your EmailJS template ID
      formData,             // The form data to send
      'bmkIXr2YcbCe5u1l8'     // Replace with your EmailJS public key
    ).then(
      (result) => {
        console.log('Email sent:', result.text);
        setIsLoading(false);
        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', message: '' });
        }, 3000);
      },
      (error) => {
        console.error('Email send error:', error.text);
        setIsLoading(false);
      }
    );
  };

  return (
    <>
      <img
        src={contactMeImage}
        alt="About Me"
        className="aboutme-image"
      />

      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-header">
            <h1 className="contact-title">CONTACT ME</h1>

            <p className="contact-description">
              If you have any questions, suggestions, or need help, feel free to reach out. Just fill out the form below and I’ll get back to you as soon as possible!
            </p>

            <div className="contact-divider">
              <div className="divider-line"></div>
              <div className="divider-icon">
                <Mail size={20} />
              </div>
              <div className="divider-line"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="ENTER YOUR NAME*"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ENTER YOUR EMAIL*"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="PHONE NUMBER"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="YOUR MESSAGE*"
                required
                rows="6"
                className="form-textarea"
              ></textarea>
            </div>

            <div className="form-submit">
              <button
                type="submit"
                disabled={isSubmitted || isLoading}
                className={`submit-btn ${isSubmitted ? 'submitted' : ''} ${isLoading ? 'loading' : ''}`}
              >
                {isLoading ? 'SENDING...' : isSubmitted ? 'SENT!' : 'SUBMIT'}
              </button>
            </div>

            {isSubmitted && (
              <div className="success-message">
                <p>Thank you for your message! We'll get back to you soon.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;