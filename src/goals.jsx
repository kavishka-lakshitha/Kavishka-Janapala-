// src/Pages/Goal.jsx
import React from 'react';
import './goals.css'; // Import external CSS
import goalsImage from './image/archive1.jpg'; // Your banner image
import projectImage from './image/NITC.jpg'; // Used for all 3 cards
import { FaArrowLeft } from 'react-icons/fa'; // Back icon
import { useNavigate } from 'react-router-dom'; // Navigation hook

const Goal = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="goal-container">
      {/* Back Button */}
     
      {/* Full-width background image with overlay text */}
      <div className="goal-hero">
        <img src={goalsImage} alt="Goals Banner" className="goal-hero-image" />
         <div className="back-button2" onClick={() => navigate(-1)}>
        <FaArrowLeft className="back-icon" />
        <span>Back</span>
      </div>

        <div className="goal-hero-text">
          <h2 className="section-title"></h2>
          <div className="second"></div>
         
        </div>
      </div>

      <h2 className="section-main-heading">Key Goals and Aspirations That Shape Our Future</h2>
      <h2 className="kavishka111">
        " Committed to delivering high-quality, reliable, and user-friendly websites that exceed customer expectations."
      </h2>

      {/* Mission, Vision, Values Grid */}
      <div className="goal-grid">
        {/* Mission */}
        <div className="goal-box">
          <img src={projectImage} alt="Mission" className="goal-image1" />
          <h3 className="goal-title">Empowering Innovation</h3>
          <p>
            <span className="goal-bold">Aim:</span> Be the Canadian leader in sustainable,
            manufacturing and assembly of essential products.
          </p>
        </div>

        {/* Vision */}
        <div className="goal-box">
          <img src={projectImage} alt="Vision" className="goal-image2" />
          <h3 className="goal-title">Delivering Excellence</h3>
          <p>
            <span className="goal-bold">Innovation:</span> Continuous improvement and the search
            for reliable and cost-effective solutions are at the heart of the company’s development
            and stakeholder success.
          </p>
        </div>

        {/* Values */}
        <div className="goal-box">
          <img src={projectImage} alt="Values" className="goal-image1" />
          <h3 className="goal-title">Sustaining Trust & Integrity</h3>
          <p>
            <span className="goal-bold">Respect</span> |{' '}
            <span className="goal-bold">Commitment</span> |{' '}
            <span className="goal-bold">Rigor</span>
          </p>
            <p>
          
          Built on respect, commitment, and rigorous ethics to foster lasting, honest relationships.


          </p>
        </div>
      </div>
    </div>
  );
};

export default Goal;
