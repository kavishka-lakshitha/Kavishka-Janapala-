import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';


// Import your local images (update the paths if your component is in a subfolder)
import project5Image from './image/coffe.png'; 
import project1Image from './image/grilly.png';        // Tourist Guide
import project2Image from './image/shoes.png';        // Hela Sri Lanka
import project3Image from './image/film.png';    
import project4Image from './image/gym.png'; 
import project6Image from './image/pizza.png'; 
   // Vehicle Service Center

const Projects = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

        .project-wrapper {
          text-align: center;
          margin: 100px auto;
          font-family: 'Montserrat', sans-serif;
        }

       

        .category-section {
          background-color: #1A1A1A;
          padding: 15px 10px;
          margin-top: 20px;
          border-radius: 2px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 45px;
          color: white;
          
        }

        .category-item {
          position: relative;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          padding-bottom: 5px;
          color: white;
          transition: color 0.3s;
        }

        .category-item:hover {
          color: #ffcc00;
        }

        .separator {
          color: #ffffff;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
          padding: 0 20px;
        }

        .project-card-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .project-card {
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: 100%;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }

        .project-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .project-title {
          font-size: 1rem;
          font-weight: 600;
          margin: 15px 0 10px;
          text-transform: uppercase;
          color: #333;
        }

        @media (max-width: 768px) {
          .project-header {
            padding: 12px 25px;
            font-size: 13px;
          }

          .category-section {
            gap: 10px;
            flex-wrap: wrap;
            padding: 12px 5px;
          }

          .category-item {
            font-size: 13px;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .project-header {
            padding: 10px 20px;
            font-size: 18px;
          }

          .category-section {
            flex-direction: row;
            gap: 10%;
          }

          .separator {
            display: none;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `
      }</style>

      <div className="project-wrapper">
        <div className="project-header">PROJECTS</div>

        <div className="category-section">
          <div className="category-item">ALL</div>
          <div className="separator">|</div>
          <div className="category-item">CODE</div>
          <div className="separator">|</div>
          <div className="category-item">DESIGN</div>
        </div>

        <div className="projects-grid">
          <div className="project-card-container">
            <div className="project-card">
              <img className="project-image" src={project5Image} alt="Tourist Guide" />
              <h3 className="project-title">Coffie Shop project</h3>
              <a 
                href="http://sri-lanka-coffee.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="explore-btn"
              >
                Explore
              </a>
            </div>
          </div>

          <div className="project-card-container">
            <div className="project-card">
              <img className="project-image" src={project4Image} alt="Hela Sri Lanka" />
              <h3 className="project-title">Fitness Project </h3>
               <a 
                href="http://fitlife-1lib.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="explore-btn"
              >
                Explore
              </a>
            </div>
          </div>

          <div className="project-card-container">
            <div className="project-card">
              <img className="project-image" src={project3Image} alt="Hotel Management System" />
              <h3 className="project-title">FilmLane Project </h3>
               <a 
                href="http://filmlane-master-jade.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="explore-btn"
              >
                Explore
              </a>
            </div>
          </div>

          <div className="project-card-container">
            <div className="project-card">
              <img className="project-image" src={project1Image} alt="Hotel Management System" />
              <h3 className="project-title">Hotel & Resturant Project</h3>
             <a 
                href="http://grilli-sri-lanka-restaurant-new.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="explore-btn"
              >
                Explore
              </a>
            </div>
          </div>

          <div className="project-card-container">
            <div className="project-card">
              <img className="project-image" src={project2Image} alt="Hela Sri Lanka" />
              <h3 className="project-title">Shoe Market Project</h3>
               <a 
                href="http://footcap-website-two.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="explore-btn"
              >
                Explore
              </a>
            </div>
          </div>

          <div className="project-card-container">
            <div className="project-card">
              <img className="project-image" src={project6Image} alt="Vehicle Service Center" />
              <h3 className="project-title">DIGITEL ITEMS PROJECT</h3>
              <Link to="/project/tourist" className="explore-btn">Explore</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
