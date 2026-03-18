

/*BAR FROENTEND EKA*/






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './ProjectOverview.css';
import project1Image from './image/project1.jpg';

const ProjectOverview = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  // Simple zoom-out animation variants
  const zoomOutVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="project-overview-container">
      {/* Top-Left Back Button */}
      <div className="top-back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft className="back-icon" />
        <span>Back</span>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div className="image-popup-overlay">
          <div className="image-popup-container">
            <button className="close-popup" onClick={closePopup}>
              <FaTimes />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged Hela Product" 
              className="popup-image"
            />
          </div>
        </div>
      )}

      {/* Header */}
      <h1 className="main-heading">
        <span className="part1">121 BAR</span><br />
        <span className="part2">Dine in Luxury, Live the Experience</span>
      </h1>

      {/* Video Section */}
      <div className="video-section1">
        <video className="hela-video1" controls>
          <source src="your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Second Title */}
      <div className="deweni-eka">
        <h1 className="main-heading1">
          <span className="topic2">Hiluxury Bar & Restaurant – Dine in Luxury, Live the Experience</span>
        </h1>
      </div>

     


      {/* Section 1 */}
      <div className="menu-style-section1">
        <div className="menu-image-side">
          <img src={project1Image} alt="Signature Dishes" className="menu-image" />
        </div>
        <div className="menu-text-side">
          <h2 className="menu-heading">Signature Dishes</h2>
          <p className="para">
            Hiluxury Bar & Restaurant serves a carefully curated menu of signature dishes crafted with authentic flavors and fresh ingredients, delivering an unforgettable dining experience.
          </p>
          <button className="marketing-btn">SHOW MORE</button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="menu-style-section1">
        <div className="menu-image-side">
          <img src={project1Image} alt="Cocktail Creations" className="menu-image" />
        </div>
        <div className="menu-text-side">
          <h2 className="menu-heading">Cocktail Creations</h2>
          <p className="para2">
            From timeless classics to modern blends, our expert bartenders craft cocktails that perfectly complement your mood, making every sip a celebration of taste.
          </p>
          <button className="marketing-btn">SHOW MORE</button>
        </div>
      </div>

      {/* Section 3 */}
      <div className="menu-style-section1">
        <div className="menu-image-side">
          <img src={project1Image} alt="Luxurious Ambience" className="menu-image" />
        </div>
        <div className="menu-text-side">
          <h2 className="menu-heading">Luxurious Ambience</h2>
          <p className="para3">
            At Hiluxury, we blend fine dining with a luxurious atmosphere. Whether it’s a family dinner, business meeting, or a night out, we create the perfect setting for every occasion.
          </p>
          <button className="marketing-btn">SHOW MORE</button>
        </div>
      </div>


     
    </div>
  );
};

export default ProjectOverview;