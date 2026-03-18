



// SUCCSES VIDEO EKA THIYENA ,IMAGES 4K THIYENA FROENT END EKE CODE EKA



import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ for navigate(-1)
import { FaArrowLeft } from 'react-icons/fa';   // ✅ for back arrow icon
import './TouristGuidePage.css';
import project1Image from './image/salon1.png';


const TouristGuidePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const img = document.querySelector('.full-width-image img');
      if (img) {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          img.classList.add('show');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on page load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="project-overview-container">
      {/* 👈 Top-Left Back Button */}
      <div className="top-back-button1" onClick={() => navigate(-1)}>
        <FaArrowLeft className="back-icon1" />
        <span>Back</span>
      </div>

      {/* Main Heading */}
      <h1 className="main-heading">
        <span className="part1">Tourist Explora</span><br />
        <span className="part2">Discover the Heart of Sri Lankan Heritage</span>
      </h1>

<div className="video-section">
  <video className="hela-video" controls width="600">
 
    Your browser does not support the video tag.
  </video>
</div>


      {/* Subheading */}
      <div className="deweni-eka">
        <h1 className="main-heading1">
          <span className="topic2">Tourist Explora Sri Lanka - Discover the Heart of Sri Lankan Heritage</span>
        </h1>
      </div>

      {/* Images Section */}
      <div className="images-container">
        <img src={project1Image} alt="Image 1" />
        <img src={project1Image} alt="Image 2" />
        <img src={project1Image} alt="Image 3" />
        <img src={project1Image} alt="Image 4" />
      </div>

      {/* Thank You */}
      <h1 className="thanks-heading">
        <span className="thanks1">THANK YOU!</span><br />
        <span className="thanks2">Discover the Heart of Sri Lankan Heritage</span>
      </h1>
    </div>
  );
};

export default TouristGuidePage;
