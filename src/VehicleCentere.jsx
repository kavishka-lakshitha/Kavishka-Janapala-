
//Le labo interface eka


import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './VehicleCentere.css'; // Your custom styles
import project1Image from './image/project1.jpg';
import kurudu from "./video/kurudu.mp4";

const BreLorel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const images = document.querySelectorAll('.slide-in');
    images.forEach((img) => {
      img.classList.add('show');
    });
  }, []);

  return (
    <div className="project-overview-container">
      {/* 👈 Back Button at top-left */}
      <div className="top-back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft className="back-icon" />
        <span>Back</span>
      </div>

      <h1 className="main-heading">
        <span className="part1">Le -Labo Products</span><br />
        <span className="part2">Luxury Perfumes for Every Occasion</span>
      </h1>

      {/* Video Section */}
      <div className="video-section">
        <video className="hela-video" controls>
          <source src={kurudu} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Section 1 */}
      <div className="menu-style-section">
        <div className="menu-image-side">
          <img src={project1Image} alt="Perfume Collection" className="menu-image" />
        </div>
        <div className="menu-text-side">
          <h2 className="menu-heading">Signature Fragrances</h2>
          <p className="para">
            Bre Lorel offers a unique collection of signature perfumes crafted with the finest ingredients from around the world. Each fragrance is designed to leave a lasting impression.
          </p>
          <button className="marketing-btn">SHOW MORE</button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="menu-style-section">
        <div className="menu-image-side">
          <img src={project1Image} alt="Elegant Bottles" className="menu-image" />
        </div>
        <div className="menu-text-side">
          <h2 className="menu-heading">Elegant Bottles</h2>
          <p className="para2">
            Our perfumes come in beautifully designed bottles that reflect elegance and luxury. Perfect as gifts or a personal indulgence.
          </p>
          <button className="marketing-btn">SHOW MORE</button>
        </div>
      </div>

      {/* Section 3 */}
      <div className="menu-style-section">
        <div className="menu-image-side">
          <img src={project1Image} alt="Premium Experience" className="menu-image" />
        </div>
        <div className="menu-text-side">
          <h2 className="menu-heading">Premium Experience</h2>
          <p className="para3">
            Bre Lorel provides a premium shopping experience both online and in-store. Enjoy expert recommendations and personalized fragrance consultations to find your perfect scent.
          </p>
          <button className="marketing-btn">SHOW MORE</button>
        </div>
      </div>

      {/* Thank You */}
     
    </div>
  );
};

export default BreLorel;
