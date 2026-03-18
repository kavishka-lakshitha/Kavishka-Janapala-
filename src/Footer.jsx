import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaTelegram, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-overlay">
        <div className="footer-content">
          <div className="footer-left">
            <h2 className="footer-logo">Kavishka Lakshitha</h2>
            <p className="footer-copy">© 2026 Kavishka Lakshitha. All rights reserved.</p>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h4>About</h4>
              <ul>
                <li>Who I Am</li>
                <li>Education</li>
                <li>Experience</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Skills</h4>
              <ul>
                <li>React.js</li>
                <li>Firebase</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Projects</h4>
              <ul>
                <li>Hotel System</li>
                <li>Auto Service App</li>
                <li>Portfolio Website</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li>Email</li>
                <li>LinkedIn</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Horizontal line */}
        <hr className="footer-divider" />

        {/* Social media icons section */}
        <div className="footer-socials">
          <a href="mailto:kavishkalakshitha13@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/kavishka-janapala-6868a9272" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/kavishka-lakshitha" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://wa.me/yourwhatsappphonenumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://t.me/yourtelegramusername" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <FaTelegram />
          </a>
          <a href="tel:+yourphonenumber" aria-label="Call">
            <FaPhone />
          </a>
        </div>
      </div>

      {/* Orange Spotlights */}
      <div className="spotlight left"></div>
      <div className="spotlight right"></div>
    </div>
  );
};

export default Footer;
