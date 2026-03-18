import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import "./Skill.css"; // Import the external CSS

// Import all images in one place
import htmlImg from "./image/Html.png";
import cssImg from "./image/css.png";
import sassImg from "./image/js.jpeg";
import jsImg from "./image/java script.png";
import reactImg from "./image/react.png";
import bootstrapImg from "./image/java1.png";
import gitImg from "./image/python.jpeg";
import figmaImg from "./image/git.png";

import nodeImg from "./image/figma.png";
import mysqlImg from "./image/mysql.png";
import mongoImg from "./image/firebase2.png";
import tsImg from "./image/postgreSQL.png";
import tsImgm from "./image/veu.png";

import cppImg from "./image/tenser.png";
import cImg from "./image/docker.png";
import englishImg from "./image/github.png";
import spanishImg from "./image/vscode.png";



const Skill = () => {
  // All skills stored in an object → easy to update later
  const skills = {
    "USING NOW": [
      { img: htmlImg, name: "HTML" },
      { img: cssImg, name: "CSS" },
      { img: sassImg, name: "Node.js" },
      { img: jsImg, name: "JavaScript" },
      { img: reactImg, name: "React" },
      { img: bootstrapImg, name: "Java" },
      { img: gitImg, name: "Python" },
      { img: figmaImg, name: "Git" },
    ],
    LEARNING: [
      { img: nodeImg, name: "Figma" },
      { img: mysqlImg, name: "MySQL" },
      { img: mongoImg, name: "Firebase" },
      { img: tsImg, name: "PostgreSQL" },
      { img: tsImgm, name: "Veu.js" },
    ],
    "OTHER SKILLS": [
      { img: englishImg, name: "Github" },
      { img: spanishImg, name: "Visual Studio Code" },
      { img: cppImg, name: "TensorFlow" },
      { img: cImg, name: "Docker" },
    ],
  };

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="skills-section">
      {location.pathname !== '/' && (
        <div className="top-back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft className="back-icon" />
          <span>Back</span>
        </div>
      )}
      <div className="skills-title">SKILLS</div>

      {Object.entries(skills).map(([category, items]) => (
        <div className="skills-category" key={category}>
          <h3>{category}</h3>
          <div className="skills-grid">
            {items.map((skill, i) => (
              <div className="skill-item" key={i}>
                <img src={skill.img} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
