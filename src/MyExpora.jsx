import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';  // Import Link, useNavigate and useLocation for navigation
import { FaArrowLeft } from 'react-icons/fa';
import './MyExpora.css';
import profileImage from './image/myexpora.jpg'; // main image
import educationImage from './image/kdu.webp';   // education image

const MyExpora = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="expora-wrapper">
      {/* Top-left back button */}
      {location.pathname !== '/' && (
        <div className="top-back-button1" onClick={() => navigate(-1)}>
          <FaArrowLeft className="back-icon1" />
          <span>Back</span>
        </div>
      )}
      {/* Top Categories */}
      <div className="category-section-new">
        <div className="separator">|</div>
        <div className="category-item">Background & Education</div>
        <div className="separator">|</div>
        <Link to="/skill" className="category-item link">   
          Skills & Experience
        </Link>
        <div className="separator">|</div>
       
      </div>

      {/* About Section */}
      <div className="about-me-section">
        <div className="about-image-container">
          <img src={profileImage} alt="Kavishka Lakshitha" className="about-image" />
        </div>

        <div className="about-description">
          <h2 className="section-titlell">MY BACKGROUND</h2>
          <p>
          I’m Kavishka Lakshitha from Kurunegala, Sri Lanka. I completed my school education at Ibbagamuwa Central College, where I developed a strong interest in information and communication technology.
            <br /><br />
           Currently, I'm a 4th-year IT undergraduate student at General Sir John Kotelawala Defence University (KDU), pursuing a BSc (Hons) in Information Technology. Alongside my academic studies, I have 2 years of hands-on experience as a full-stack developer, working on both front-end and back-end technologies.
            <br /><br />
            With strong dedication and a curious mindset, I am always eager to explore, learn, and
            contribute to innovative digital solutions.
          </p>

          <div className="section-divider"></div>
          <div className="section-divider-icon">⌘</div>
        </div>
      </div>

      {/* Educational Qualifications Section */}
      <div className="education-section">
        <h2 className="edu-title">EDUCATIONAL QUALIFICATIONS</h2>
        <img src={educationImage} alt="KDU" className="education-image" />

        <div className="edu-decorated-heading">
          | University Education at General Sir John Kotelawala Defence University (KDU), Sri Lanka |
        </div>

        <div className="edu-tease-line">| Bachelor of Science (Honours) in Information Technology |</div>
        <div className="edu-tease-line">| Duration: 2023– Present (Currently in 3rd Year) |</div>

        <div className="edu-tease-line">| Academic Highlights & Coursework |</div>
        <ul className="edu-list">
          <li>Software Engineering</li>
          <li>Web Application Development</li>
          <li>Computer Networks</li>
          <li>Database Systems</li>
          <li>Object-Oriented Programming</li>
          <li>Operating Systems</li>
          <li>IT Project Management</li>
        </ul>

        <div className="edu-tease-line">| Activities |</div>
        <ul className="edu-list">
          <li>Participated in hackathons and tech workshops at KDU</li>
          <li>Worked on real-world software development projects</li>
          <li>Passionate about full-stack web technologies</li>
        </ul>
      </div>
    </div>
  );
};

export default MyExpora;
