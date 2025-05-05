import React from 'react';
import Sidebar from './components/Sidebar';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';

export default function App(){
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '0px', marginLeft: '300px' }}>
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="resume"><Resume /></div>
        <div id="contact"><Contact /></div>
      </div>
    </div>
  );
};