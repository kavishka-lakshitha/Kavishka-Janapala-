import React, { useEffect, useRef } from 'react';
import './Services.css';
import project1Image from './image/uniathena.png';
import oracleImage from './image/oracle.png';
// use the .jpeg variant (Skill.jsx also uses python.jpeg) to avoid mismatched imports
import pythonImage from './image/python.jpg';
import irc from './image/irc.png';
import cisco from './image/cisco.jpg';

const services = [      
  {
    title: 'Basics of Machine Learning Algorithms',
    description: 'Successfully completed this course to gain basic knowledge and a clear understanding of key concepts. This learning experience helped me build a strong foundation, improve my analytical and technical skills, and enhance my understanding of practical applications. The knowledge gained through this course will support my academic growth and future career development.',
    image: project1Image,
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate',
    description: ' I’m pleased to share that I have successfully completed the Oracle Cloud Infrastructure 2025 AI Foundations Associate certificationThis program strengthened my understanding of AI fundamentals, machine learning concepts, and Oracle Cloud Infrastructure, and how AI solutions are designed and deployed in cloud environments.I look forward to applying this knowledge in AI, ML, cloud-based, and full-stack development projects as I continue to grow my career in the IT field.',
    image: oracleImage,
  },
  {
    title: 'Python for Beginners Certificate',
    description: '"Excited to share that I have completed the "Python for Beginners" course taught by University of Moratuwa in Sri Lanka. This achievement is more than just a certificate, its a foundational step toward my goal of becoming a software engineer. Grateful for the knowledge gained and eager to apply it to real-world projects. Onwards and upwards! ',
    image: pythonImage,
  },
  {
    title: 'CCNAv7: Introduction to Networks',
    description: 'Successfully completed the CCNAv7: Introduction to Networks course, gaining a strong foundation in networking concepts, protocols, and basic configuration and troubleshooting skills.',
    image: cisco,
  },
  {
    title: '18th International Research Conference, General Sir John Kotelawala Defence University ',
    description: 'Presented and published research on “The Psychological Impact of Long-Term Exposure to Online Gender Harassment in Adolescents” at the Kotelawala Defence University International Research Conference (KDU IRC) 2024–2025',
    image: irc,
  },
  
 
];

const MyServices = () => {
  const timelineRefs = useRef([]);

  useEffect(() => {
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

    const refs = timelineRefs.current;
    refs.forEach(el => el && observer.observe(el));
    return () => {
      refs.forEach(el => el && observer.unobserve(el));
    };
  }, []);

  return (
    <div className="services-section">
      <h2 className="Service-header">Certifications</h2>
      <p className="services-description">
        A collection of certificates earned through online and academic learning, demonstrating my commitment to developing strong technical skills and staying up to date with modern IT technologies.
      </p>
      <div className="timeline">
        {services.map((service, index) => (
          <div
            key={index}
            className="timeline-row"
            ref={el => (timelineRefs.current[index] = el)}
          >
            {index % 2 === 0 ? (
              <>
                <div className="timeline-text left">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="timeline-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = project1Image; }}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="timeline-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = project1Image; }}
                  />
                </div>
                <div className="timeline-text right">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
