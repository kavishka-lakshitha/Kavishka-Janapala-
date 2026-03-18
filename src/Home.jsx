import React, { useEffect } from 'react';
import './Home.css';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Download } from 'lucide-react';
import image1 from './image/profile1.png';
import cvFile from './assets/Kavishka Lakshitha CV.pdf'; // <-- add your CV here

const Home = () => {

  // Scroll-triggered word-by-word animation
  useEffect(() => {
    const elements = document.querySelectorAll('.build-text');

    elements.forEach(el => {
      const words = el.innerText.split(' ');
      el.innerHTML = words
        .map((word, i) => `<span class="word" style="--i:${i}">${word}</span>`)
        .join(' ');
    });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-wrapper">

      {/* Top Section */}
      <div className="top-padding">
        <div className="main-content">

          <div className="left-info">
            <div className="info-text">

              <p className="sub-heading">Hi, I am</p>
              <h1 className="main-heading">Kavishka Lakshitha</h1>

              <div className="role-rolling-container">
                <div className="role-rolling">
                  <span>Front-end Developer</span>
                  <span>Back-end Developer</span>
                  <span>Data Analytics</span>
                  <span>Full Stack Web Developer</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="social-icons">
                <a href="https://github.com/kavishka-lakshitha" target="_blank" rel="noopener noreferrer" className="icon-btn">
                  <Github className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/kavishka-janapala-6868a9272" target="_blank" rel="noopener noreferrer" className="icon-btn">
                  <Linkedin className="icon" />
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="icon-btn">
                  <Twitter className="icon" />
                </a>
              </div>

              {/* Contact Info */}
              <div className="contact-info">
                <div className="info-item"><Mail className="icon1" /><span>kavishkalakshitha13@email.com</span></div>
                <div className="info-item"><Phone className="icon1" /><span>+94-715494268</span></div>
                <div className="info-item"><MapPin className="icon1" /><span>Ambanpola, Melsiripura</span></div>
              </div>

              {/* ✅ Download CV Button */}
              <div style={{ marginTop: '20px' }}>
                <a href={cvFile} download="Kavishka_Lakshitha_CV.pdf" className="download-btn">
                  <Download size={18} style={{ marginRight: '8px' }} />
                  Download CV
                </a>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="right-photo">
            <div className="photo-wrapper">
              <img src={image1} alt="Kavishka Lakshitha Profile" className="profile-image" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="bottom-content">

          <div className="it">| IT BERRIES |</div>

          <p className="description build-text">
            Hi, I'm passionate full-stack developer with 2 years of hands-on experience building dynamic, responsive, and scalable web applications.
            I specialize in both front-end development using technologies like React.js, HTML, CSS, and JavaScript, and back-end development with tools such as Node.js, Express.js, and Spring Boot.
          </p>

          <button className="read-more-btn">READ MORE</button>

        </div>
        <div className="watermark">IT</div>
      </div>

    </div>
  );
};

export default Home;