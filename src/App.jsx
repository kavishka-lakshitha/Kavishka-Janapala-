import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import MyExpora from './MyExpora'; 
import Skill from './Skill'; 

import Services from './Services';
import Projects from './Projects';
import ProjectOverview from './ProjectOverview'; 
import TouristGuidePage from './TouristGuidePage';
import VehicleCentere from './VehicleCentere'; 


function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <Routes>
          {/* ✅ One-page scroll route */}
          <Route
            path="/"
            element={
              <>
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="services"><Services /></section>
                <section id="skill"><Skill /></section>
                <section id="projects"><Projects /></section>
                <section id="contact"><Contact /></section>
                
                
              </>
            }
          />

          {/* ✅ Other separate routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/myexpora" element={<MyExpora />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project/tourist" element={<TouristGuidePage />} />
          <Route path="/project/vehiclecentere" element={<VehicleCentere />} />
          <Route path="/project/:id" element={<ProjectOverview />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
