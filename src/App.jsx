import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import './App.css';

import socialImg from './social-media.png';
import workspaceImg from './workspace.png';
import dashboardImg from './dashboard.png';
import ecommerceImg from './ecommerce.png';
import tictactoeImg from './tictactoe.png';
import chatAiImg from './chat-ai.png';
// Icons import(lucide-react )
import {
  User, Code2, FolderOpen, Briefcase, Mail, Github, Linkedin,
  Smartphone, MessageCircle, Send, ArrowUp, Heart, ChevronDown,
  Layout, Database, Cpu, PhoneCall, MessageSquare, Menu, X
} from 'lucide-react';

function App() {
  const [init, setInit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Menu Function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  // 1. ParticlesEngine Initialization
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // 2. WhatsAp logic for Contact Form
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Whtsaoop URL with pre-filled message
    const whatsappUrl = `https://wa.me/919624332477?text=Hello Darshan,%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-app">
      {/* ૩. Background Particles */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            particles: {
              color: { value: "#8b5cf6" }, // purple color
              links: { color: "#8b5cf6", distance: 150, enable: true, opacity: 0.2, width: 1 },
              move: { enable: true, speed: 1.5, direction: "none" },
              number: { density: { enable: true, area: 800 }, value: 60 },
              opacity: { value: 0.3 },
              size: { value: { min: 1, max: 3 } },
            },
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" } },
            },
          }}
        />
      )}
      {/* 4. NAVBAR - Parth Style ) */}
      <nav className="nav-container">
        <div className="nav-left">
          <div className="nav-logo">DK</div>
          <span className="nav-name">Darshan Kotadiya</span>
        </div>

        {/* Desktop Nav */}
        <div className="nav-right desktop-nav">
          <a href="#about"><User size={18} /> About</a>
          <a href="#skills"><Code2 size={18} /> Skills</a>
          <a href="#projects"><FolderOpen size={18} /> Projects</a>
          <a href="#experience"><Briefcase size={18} /> Experience</a>
          <a href="#contact"><Mail size={18} /> Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={closeMenu}><User size={20} /> About</a>
          <a href="#skills" onClick={closeMenu}><Code2 size={20} /> Skills</a>
          <a href="#projects" onClick={closeMenu}><FolderOpen size={20} /> Projects</a>
          <a href="#experience" onClick={closeMenu}><Briefcase size={20} /> Experience</a>
          <a href="#contact" onClick={closeMenu}><Mail size={20} /> Contact</a>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section id="home" className="hero-sec">
        <div className="avatar-main">DK</div>
        <h1 className="name-title">Darshan Kotadiya</h1>
        <p style={{ fontSize: '24px', margin: '15px 0', fontWeight: '600' }}>Full-Stack Developer | AI Intern</p>
        <p style={{ maxWidth: '700px', color: '#94a3b8', lineHeight: '1.8', fontSize: '16px' }}>
          I build modern, scalable web applications using React, Node.js, Express, MongoDB
          and AI algorithms. I focus on performance, accessibility and delightful UX.
        </p>

        <div style={{ display: 'flex', gap: '30px', marginTop: '30px' }}>
          {/* GITHUB LINK */}
          <a href="https://github.com/darshankotadiya" target="_blank" rel="noopener noreferrer" className="icon-box-about" style={{ textDecoration: 'none' }}>
            <Github size={24} />
          </a>

          {/* LINKEDIN LINK */}
          <a href="https://www.linkedin.com/in/darshan-kotadiya-70416a251/" target="_blank" rel="noopener noreferrer" className="icon-box-about" style={{ textDecoration: 'none' }}>
            <Linkedin size={24} />
          </a>

          {/* MAIL LINK */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=darshankotadiya1010@gmail.com&su=Portfolio%20Contact&body=Hi%20Darshan,%0A%0AI%20saw%20your%20portfolio."
            target="_blank"
            rel="noopener noreferrer"
            className="icon-box-about"
            style={{ textDecoration: 'none' }}
          >
            <Mail size={24} />
          </a>
        </div>

        <button style={{ marginTop: '50px', background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)', color: 'white', border: 'none', padding: '15px 40px', borderRadius: '40px', fontWeight: '800', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
          Explore My Work <ChevronDown size={20} />
        </button>
      </section>

      {/* 2. ABOUT ME - 2 COLUMN LAYOUT */}
      <section id="about">
        <h2 className="section-head">About <span>Me</span></h2>
        <div className="about-grid">
          <div>
            <p style={{ color: '#94a3b8', lineHeight: '2', fontSize: '17px' }}>
              Hello! I'm Darshan Kotadiya, a dedicated Full-Stack Developer specializing in the MERN stack and AI.
              I have hands-on experience building a variety of applications, including AI logic systems like Minimax at Vortex Aziel and CodSoft.
            </p>
            <div style={{ marginTop: '25px' }}>
              <span className="about-pill">MERN Stack</span>
              <span className="about-pill">Python AI</span>
              <span className="about-pill">Database Mgmt</span>
            </div>
          </div>
          <div className="about-cards-grid">
            <div className="info-card"><div className="icon-box-about"><Layout size={20} /></div><h4>Web Development</h4><p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '10px' }}>Creating responsive and interactive UIs with React.js.</p></div>
            <div className="info-card"><div className="icon-box-about"><Database size={20} /></div><h4>Backend Dev</h4><p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '10px' }}>Scalable APIs with Node.js and Express.js.</p></div>
            <div className="info-card"><div className="icon-box-about"><Code2 size={20} /></div><h4>API Integration</h4><p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '10px' }}>Building robust REST APIs and third-party integrations.</p></div>
            <div className="info-card"><div className="icon-box-about"><Cpu size={20} /></div><h4>AI Integration</h4><p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '10px' }}>Implementing smart algorithmic solutions.</p></div>
          </div>
        </div>
      </section>
      {/* TECHNICAL SKILLS SECTION */}
      <section id="skills" style={{ padding: '100px 8%' }}>
        <h2 className="section-head">Technical <span>Skills</span></h2>
        <p style={{ textAlign: 'center', color: '#94a3b8', marginTop: '-30px', fontSize: '15px' }}>
          A concise overview of tools and technologies I use regularly.
        </p>

        {/* Tech Stack Row - Matching image {31573EA7...} */}
        <h3 style={{ textAlign: 'center', marginTop: '50px', fontSize: '22px' }}>Tech Stack</h3>
        <div className="tech-stack-container">
          <div className="tech-tag">React Js</div>
          <div className="tech-tag">Node.js</div>
          <div className="tech-tag">Python</div>
          <div className="tech-tag">MongoDB</div>
          <div className="tech-tag">Express</div>
          <div className="tech-tag">Tailwind</div>
        </div>

        {/* Skills Progress Grid - Matching {3B08B859...} */}
        <div className="skills-main-grid">

          {/* Backend Column */}
          <div className="skill-box">
            <h3>Backend</h3>
            <div className="progress-item">
              <div className="progress-info">Node.js <span>80%</span></div>
              <div className="progress-track"><div className="progress-bar-fill" style={{ width: '80%' }}></div></div>
            </div>
            <div className="progress-item">
              <div className="progress-info">Express.js <span>80%</span></div>
              <div className="progress-track"><div className="progress-bar-fill" style={{ width: '80%' }}></div></div>
            </div>
            <div className="progress-item">
              <div className="progress-info">MongoDB <span>80%</span></div>
              <div className="progress-track"><div className="progress-bar-fill" style={{ width: '80%' }}></div></div>
            </div>
          </div>

          {/* Frontend Column */}
          <div className="skill-box">
            <h3>Frontend</h3>
            <div className="progress-item">
              <div className="progress-info">React Js <span>100%</span></div>
              <div className="progress-track"><div className="progress-bar-fill" style={{ width: '100%' }}></div></div>
            </div>
            <div className="progress-item">
              <div className="progress-info">Tailwind CSS <span>90%</span></div>
              <div className="progress-track"><div className="progress-bar-fill" style={{ width: '90%' }}></div></div>
            </div>
            <div className="progress-item">
              <div className="progress-info">JavaScript <span>90%</span></div>
              <div className="progress-track"><div className="progress-bar-fill" style={{ width: '90%' }}></div></div>
            </div>
          </div>

          {/* Tools & Others Column */}
          <div className="skill-box">
            <h3>Tools & Others</h3>
            <div className="progress-item">
              <div className="progress-info">GitHub <span>80%</span></div>
              <div className="progress-track"><div className="progress-bar-fill" style={{ width: '80%' }}></div></div>
            </div>
            <div className="progress-item">
              <div className="progress-info">Python AI <span>85%</span></div>
              <div className="progress-track"><div className="progress-bar-fill" style={{ width: '85%' }}></div></div>
            </div>
            <div className="progress-item">
              <div className="progress-info">REST APIs <span>85%</span></div>
              <div className="progress-track"><div className="progress-bar-fill" style={{ width: '85%' }}></div></div>
            </div>
          </div>

        </div>
      </section>
    {/* PROJECTS SECTION - 6 Projects with Fixed Variable Names */}
{/* PROJECTS SECTION - Fixed for live images */}
<section id="projects" style={{ padding: '100px 8%' }}>
  <h2 className="section-head">My <span>Projects</span></h2>
  <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginTop: '50px' }}>

    {/* 1. LinkWave - Use {socialImg} variable */}
    <div className="proj-card">
      <img src={socialImg} alt="Social Media" className="proj-img" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '25px' }}>
        <h4 style={{ fontSize: '22px', fontWeight: '700' }}>LinkWave Social</h4>
        <p style={{ color: '#94a3b8', fontSize: '15px', marginTop: '10px', lineHeight: '1.6' }}>A MERN stack social platform with real-time features.</p>
        <div style={{ marginTop: '25px' }}>
          <a href="https://github.com/darshankotadiya/CodeAlpha_Tasks/tree/main/SocialMediaApp" target="_blank" rel="noopener noreferrer" className="tech-tag" style={{ textDecoration: 'none' }}>Source Code</a>
        </div>
      </div>
    </div>

    {/* 2. Elite Master - Use {workspaceImg} variable */}
    <div className="proj-card">
      <img src={workspaceImg} alt="Workspace" className="proj-img" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '25px' }}>
        <h4 style={{ fontSize: '22px', fontWeight: '700' }}>Elite Master Workspace</h4>
        <p style={{ color: '#94a3b8', fontSize: '15px', marginTop: '10px', lineHeight: '1.6' }}>Real-time collaboration tool featuring screen sharing.</p>
        <div style={{ marginTop: '25px' }}>
          <a href="https://github.com/darshankotadiya/CodeAlpha_Tasks/tree/main/Task-4%20Real%20Communication%20App" target="_blank" rel="noopener noreferrer" className="tech-tag" style={{ textDecoration: 'none' }}>Source Code</a>
        </div>
      </div>
    </div>

    {/* 3. ProManager - Use {dashboardImg} variable */}
    <div className="proj-card">
      <img src={dashboardImg} alt="Dashboard" className="proj-img" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '25px' }}>
        <h4 style={{ fontSize: '22px', fontWeight: '700' }}>ProManager Dashboard</h4>
        <p style={{ color: '#94a3b8', fontSize: '15px', marginTop: '10px', lineHeight: '1.6' }}>An interactive project insight dashboard.</p>
        <div style={{ marginTop: '25px' }}>
          <a href="https://github.com/darshankotadiya/CodeAlpha_Tasks/tree/main/Task3-ProjectManagementTool" target="_blank" rel="noopener noreferrer" className="tech-tag" style={{ textDecoration: 'none' }}>Source Code</a>
        </div>
      </div>
    </div>

    {/* 4. CodeAlpha - Use {ecommerceImg} variable */}
    <div className="proj-card">
      <img src={ecommerceImg} alt="E-commerce" className="proj-img" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '25px' }}>
        <h4 style={{ fontSize: '22px', fontWeight: '700' }}>CodeAlpha Store</h4>
        <p style={{ color: '#94a3b8', fontSize: '15px', marginTop: '10px', lineHeight: '1.6' }}>Full-featured e-commerce platform.</p>
        <div style={{ marginTop: '25px' }}>
          <a href="https://github.com/darshankotadiya/CodeAlpha_Tasks/tree/main/Task1-Ecommerce" target="_blank" rel="noopener noreferrer" className="tech-tag" style={{ textDecoration: 'none' }}>Source Code</a>
        </div>
      </div>
    </div>

    {/* 5. Nexus-AI - Use {tictactoeImg} variable */}
    <div className="proj-card">
      <img src={tictactoeImg} alt="AI Game" className="proj-img" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '25px' }}>
        <h4 style={{ fontSize: '22px', fontWeight: '700' }}>Nexus-AI Tic-Tac-Toe</h4>
        <p style={{ color: '#94a3b8', fontSize: '15px', marginTop: '10px', lineHeight: '1.6' }}>A smart game engine built with Minimax algorithm.</p>
        <div style={{ marginTop: '25px' }}>
          <a href="https://github.com/darshankotadiya/CODSOFT/tree/main/Task-2-TicTacToe-AI" target="_blank" rel="noopener noreferrer" className="tech-tag" style={{ textDecoration: 'none' }}>Source Code</a>
        </div>
      </div>
    </div>

    {/* 6. Nexus-AI Assistant - Use {chatAiImg} variable */}
    <div className="proj-card">
      <img src={chatAiImg} alt="AI Chat" className="proj-img" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '25px' }}>
        <h4 style={{ fontSize: '22px', fontWeight: '700' }}>Nexus-AI Assistant</h4>
        <p style={{ color: '#94a3b8', fontSize: '15px', marginTop: '10px', lineHeight: '1.6' }}>A rule-based logic engine for assistant commands.</p>
        <div style={{ marginTop: '25px' }}>
          <a href="https://github.com/darshankotadiya/CODSOFT/tree/main/Task-1-Chatbot" target="_blank" rel="noopener noreferrer" className="tech-tag" style={{ textDecoration: 'none' }}>Source Code</a>
        </div>
      </div>
    </div>

  </div>
</section>
      {/* 5. PROFESSIONAL EXPERIENCE - STRATEGICALLY ORDERED */}
      <section id="experience" style={{ padding: '100px 8%' }}>
        <h2 className="section-head">Professional <span>Experience</span></h2>
        <div className="exp-container" style={{ marginTop: '60px' }}>
          <div className="timeline-line"></div>

          {/* 1. Vortex Aziel - MOST RELEVANT & CURRENT */}
          <div className="timeline-dot" style={{ top: '20px' }}></div>
          <div className="exp-card" style={{ marginBottom: '50px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#8b5cf6', fontWeight: '700', marginBottom: '10px', fontSize: '14px' }}>
              <span>NOV 2025 - PRESENT (3 MONTHS)</span> <span>FULL-TIME INTERN</span>
            </div>
            <h3 style={{ fontSize: '24px', color: '#f0f6fc' }}>MERN Full Stack Developer | Vortex Aziel</h3>
            <p style={{ color: '#94a3b8', marginTop: '15px', lineHeight: '1.8', fontSize: '15px' }}>
              • Leading the development of scalable web applications using **MongoDB, Express.js, React, and Node.js**. <br />
              • Specialized in architecting robust backend APIs and integrating complex AI-driven logic for dynamic user experiences. <br />
              • Focusing on high-performance delivery and seamless frontend-backend synchronization.
            </p>
          </div>

          {/* 2. CodSoft - CURRENT AI SPECIALIZATION */}
          <div className="timeline-dot" style={{ top: '280px' }}></div>
          <div className="exp-card" style={{ marginBottom: '50px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#8b5cf6', fontWeight: '700', marginBottom: '10px', fontSize: '14px' }}>
              <span>JAN 25, 2026 - FEB 25, 2026</span> <span>AI INTERN</span>
            </div>
            <h3 style={{ fontSize: '24px', color: '#f0f6fc' }}>Artificial Intelligence Intern | CodSoft</h3>
            <p style={{ color: '#94a3b8', marginTop: '10px', lineHeight: '1.6', fontSize: '15px' }}>
              • Hands-on development of **intelligent system models** using Python and advanced algorithms. <br />
              • Implementing AI logic to solve real-world problems, enhancing automation and predictive capabilities within web environments.
            </p>
          </div>

          {/* 3. CodeAlpha - FOUNDATIONAL SUCCESS */}
          <div className="timeline-dot" style={{ top: '490px' }}></div>
          <div className="exp-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#8b5cf6', fontWeight: '700', marginBottom: '10px', fontSize: '14px' }}>
              <span>DEC 20, 2024 - JAN 20, 2025</span> <span>COMPLETED</span>
            </div>
            <h3 style={{ fontSize: '24px', color: '#f0f6fc' }}>Full-Stack Web Intern | CodeAlpha</h3>
            <p style={{ color: '#94a3b8', marginTop: '10px', lineHeight: '1.6', fontSize: '15px' }}>
              • Successfully engineered **4+ full-stack applications** using the MERN ecosystem. <br />
              • Key focus on secure backend authentication logic and creating pixel-perfect, responsive UI designs. <br />
              • Gained extensive experience in database management and RESTful API structures.
            </p>
          </div>
        </div>
      </section>
      <section id="contact" style={{ padding: '100px 8%', background: '#0a0a0c' }}>
        <h2 className="section-head">Get In <span>Touch</span></h2>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginTop: '50px' }}>

          {/* Left side content */}
          <div>
            <h3 style={{ fontSize: '28px', color: 'white' }}>Let's Connect</h3>
            <p style={{ color: '#94a3b8', margin: '20px 0', fontSize: '15px' }}>Available for freelance and full-time roles. Reach out via email, LinkedIn or WhatsApp.</p>

            <div className="contact-info-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div className="contact-info-card">
                <div className="icon-box-purple"><Mail size={35} color="white" /></div>
                <div><p className="label">Email</p><p className="value">darshankotadiya1010@gmail.com</p></div>
              </div>

              <div className="contact-info-card">
                <div className="icon-box-purple"><PhoneCall size={35} color="white" /></div>
                <div><p className="label">Phone</p><p className="value">+91 96243 32477</p></div>
              </div>

              <div className="contact-info-card">
                <div className="icon-box-purple"><MessageSquare size={35} color="white" /></div>
                <div><p className="label">WhatsApp</p><p className="value">+91 96243 32477</p></div>
              </div>
            </div>

            {/* Follow Me Section - */}
            <div style={{ marginTop: '50px' }}>
              <p style={{ color: '#f0f6fc', marginBottom: '20px', fontWeight: '600', fontSize: '18px' }}>Follow Me</p>
              <div style={{ display: 'flex', gap: '20px' }}>

                {/* GITHUB */}
                <a href="https://github.com/darshankotadiya" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                  <Github size={22} />
                </a>

                {/* LINKEDIN */}
                <a href="https://www.linkedin.com/in/darshan-kotadiya-70416a251/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                  <Linkedin size={22} />
                </a>

                {/* WHATSAPP/CHAT ICON */}
                <a href="https://wa.me/919624332477" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                  <MessageCircle size={22} />
                </a>

                {/* MAIL */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=darshankotadiya1010@gmail.com&su=Portfolio%20Contact&body=Hi%20Darshan,%0A%0AI%20saw%20your%20portfolio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                >
                  <Mail size={22} />
                </a>

              </div>
            </div>
          </div>
          {/* <a>  <form> & <button> Used */}
          <form className="form-container" onSubmit={handleSubmit}>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
              <div style={{ flex: 1 }}>
                <label>Full Name</label>
                <input className="input-field" name="name" placeholder="Your name" required />
              </div>
              <div style={{ flex: 1 }}>
                <label>Email Address</label>
                <input className="input-field" name="email" type="email" placeholder="your.email@example.com" required />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label>Subject</label>
              <input className="input-field" name="subject" placeholder="Project discussion" required />
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label>Message</label>
              <textarea className="input-field" name="message" placeholder="Tell me about your project..." rows="5" required></textarea>
            </div>

            {/* Submit button check the validation */}
            <button type="submit" className="send-btn" style={{ border: 'none', width: '100%', cursor: 'pointer' }}>
              <Send size={18} /> Send Message on WhatsApp
            </button>
          </form>
        </div>
      </section>
      {/* FOOTER SECTION - EXACT PARTH STYLE */}
      <footer className="footer-main">
        <div className="footer-left">
          <div className="footer-logo-box">DK</div>
          <span>© 2026 Darshan Kotadiya. All rights reserved.</span>
        </div>

        <div className="footer-center">
          Made with <Heart size={16} fill="#ef4444" className="heart-icon" /> by Darshan Kotadiya
        </div>

        <div className="footer-right">
          <button className="scroll-top-btn" onClick={scrollToTop}>
            <ArrowUp size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
