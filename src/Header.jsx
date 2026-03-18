import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="custom-header">
      <div className="header-container">
        {/* Header Title */}
        <div className="header-title">PORTFOLIO</div>

        <nav className="Header-topic">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/about" className="nav-link">ABOUT US</Link>
          <Link to="/services" className="nav-link">CERTIFICATION</Link>
          <Link to="/projects" className="nav-link">PROJECTS</Link>
          <Link to="/contact" className="nav-link">CONTACT US</Link>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="mobile-toggle">
          <button
            className="toggle-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="toggle-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mobile-nav">
          {/* Animated Names */}
          <div className="animated-names">
            <span>Kavishka</span>
            <span>Lakshitha</span>
            <span>Janapala</span>
          </div>

          <nav className="mobile-nav-links">
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
