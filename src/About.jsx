import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import aboutMeImage from './image/aboutme.jpg';

const AboutMe = () => {
  const serviceRefs = useRef([]);
  const introRef = useRef(null); // Ref for intro text

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Add animation
          } else {
            entry.target.classList.remove('animate'); // Remove to allow re-animation
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe all service blocks
    serviceRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Observe intro text
    if (introRef.current) observer.observe(introRef.current);

    return () => {
      serviceRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
      if (introRef.current) observer.unobserve(introRef.current);
    };
  }, []);

  const services = [
    {
      title: 'DESIGN',
      description:
        'Craft intuitive, visually compelling interfaces for web, mobile, print, and digital platforms that enhance user experience and reinforce brand identity.',
    },
    {
      title: 'DEVELOPMENT',
      description:
        'Build scalable, responsive, and efficient web applications using cutting-edge front-end and back-end technologies, ensuring optimal performance and maintainability.',
    },
    {
      title: 'MAINTENANCE',
      description:
        'Deliver proactive website management including security updates, performance tuning, bug fixes, and content refreshes to ensure continuous, seamless operation.',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; min-height: 100vh; padding: 40px 20px; color: #333; background: #ffffff; }

        .about-center { text-align: center; padding: 60px 40px; max-width: 1000px; margin: 0 auto; }
        .header { border: 2px solid #333; display: inline-block; padding: 15px 40px; margin-bottom: 40px; background: #fff; letter-spacing: 3px; font-weight: 600; font-size: 14px; text-transform: uppercase; transition: all 0.3s ease; font-family: 'Montserrat', sans-serif; }
        .header:hover { background: #333; color: #fff; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); }

        .intro-text { font-size: 16px; line-height: 1.8; color:#000; margin-bottom: 40px; width: 100%; max-width: 1000px; margin-left: auto; margin-right: auto; text-align: center; opacity: 0; transform: translateY(20px); transition: all 0.6s ease; }
        .intro-text.animate { opacity: 2; transform: translateY(0); }

        .explore-btn { display: inline-block; padding: 12px 30px; border: 1px solid #999; background: transparent; color: #666; text-decoration: none; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; transition: all 0.3s ease; margin-bottom: 20px; }
        .explore-btn:hover { background: #333; color: #fff; border-color: #333; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); }

        .divider { display: flex; align-items: center; justify-content: center; margin: 50px 0; }
        .divider::before, .divider::after { content: ''; flex: 1; height: 2px; background: #ddd; border: 1px solid #000; }
        .divider-icon { margin: 0 20px; font-size: 20px; color: #000; }

        .services { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 50px; max-width: 1000px; margin-left: auto; margin-right: auto; }
        .service { text-align: center; padding: 30px; background: transparent; opacity: 0; transform: scale(0.8); transition: all 0.6s ease; }
        .service.animate { animation: popup 0.6s ease forwards; }

        @keyframes popup {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .service h3 { font-size: 18px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 15px; color: #000; }
        .service p { font-size: 14px; line-height: 1.6; color: #666; }

        .maintenance { grid-column: 1 / -1; text-align: center; padding: 40px; }

        @media (max-width: 768px) {
          .services { grid-template-columns: 1fr; gap: 30px; }
          .header { padding: 12px 30px; font-size: 12px; }
          .intro-text { font-size: 14px; margin: 0 -8px; }
          .explore-btn{margin-top: 30px;}
        }
      `}</style>

      <div className="about-center">
        <div className="header">ABOUT ME</div>

        <p ref={introRef} className="intro-text">
         I am an undergraduate pursuing a Bachelor of Science (Hons) in Information Technology at General Sir John Kotelawala Defence University, with a strong focus on full-stack software development. I have developed solid competencies in designing and building scalable web applications, working across both front-end and back-end technologies.Through hands-on academic and personal projects, I have gained practical experience in developing responsive user interfaces, implementing RESTful APIs, and managing databases to deliver complete, end-to-end solutions. I am comfortable working with modern development tools and frameworks, and I follow structured development practices to write clean, maintainable, and efficient code.
        </p>

        <Link to="/myexpora" className="explore-btn">EXPLORE</Link>
      </div>

      <div className="divider">
        <span className="divider-icon">⌘</span>
      </div>

      <div className="services">
        {services.map((service, index) => (
          <div
            key={index}
            ref={el => (serviceRefs.current[index] = el)}
            className={`service ${service.title === 'MAINTENANCE' ? 'maintenance' : ''}`}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="divider">
        <span className="divider-icon">⌘</span>
      </div>

      <img
        src={aboutMeImage}
        alt="About Me"
        style={{
          display: 'block',
          margin: '40px auto',
          width: '100%',
          maxWidth: '2800px',
          borderRadius: '0px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        }}
      />
    </>
  );
};

export default AboutMe;
