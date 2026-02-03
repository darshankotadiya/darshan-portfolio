import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import './App.css';

// --- FIXED IMAGE IMPORTS (Looking in root folder) ---
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

  const toggleMenu = () => { setIsOpen(!isOpen); };
  const closeMenu = () => { setIsOpen(false); };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const whatsappUrl = `https://wa.me/919624332477?text=Hello Darshan,%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-app">
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            particles: {
              color: { value: "#8b5cf6" },
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

      <nav className="nav-container">
        <div className="nav-left">
          <div className="nav-logo">DK</div>
          <span className="nav-name">Darshan Kotadiya</span>
        </div>

        <div className="nav-right desktop-nav">
          <a href="#about"><User size={18} /> About</a>
          <a href="#skills"><Code2 size={18} /> Skills</a>
          <a href="#projects"><FolderOpen size={18} /> Projects</a>
          <a href="#experience"><Briefcase size={18} /> Experience</a>
          <a href="#contact"><Mail size={18} /> Contact</a>
        </div>

        <div className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <div className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={closeMenu}><User size={20} /> About</a>
          <a href="#skills" onClick={closeMenu}><Code2 size={20} /> Skills</a>
          <a href="#projects" onClick={closeMenu}><FolderOpen size={20} /> Projects</a>
          <a href="#experience" onClick={closeMenu}><Briefcase size={20} /> Experience</a>
          <a href="#contact" onClick={closeMenu}><Mail size={20} /> Contact</a>
        </div>
      </nav>

      <section id="home" className="hero-sec">
        <div className="avatar-main">DK</div>
        <h1 className="name-title">Darshan Kotadiya</h1>
        <p style={{ fontSize: '24px', margin: '15px 0', fontWeight: '600' }}>Full-Stack Developer | AI Intern</p>
        <p style={{ maxWidth: '700px', color: '#94a3b8', lineHeight: '1.8', fontSize: '16px' }}>
          I build modern, scalable web applications using React, Node.js, Express, MongoDB
          and AI algorithms. I focus on performance, accessibility and delightful UX.
        </p>

        <div style={{ display: 'flex', gap: '30px', marginTop: '30px' }}>
          <a href="https://github.com/darshankotadiya" target="_blank" rel="noopener noreferrer" className="icon-box-about">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/darshan-kotadiya-70416a251/" target="_blank" rel="noopener noreferrer" className="icon-box-about">
            <Linkedin size={24} />
          </a>
          <a href="mailto:darshankotadiya1010@gmail.com" className="icon-box-about">
            <Mail size={24} />
          </a>
        </div>

        <button style={{ marginTop: '50px', background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)', color: 'white', border: 'none', padding: '15px 40px', borderRadius: '40px', fontWeight: '800', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
          Explore My Work <ChevronDown size={20} />
        </button>
      </section>

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

      <section id="skills" style={{ padding: '100px 8%' }}>
        <h2 className="section-head">Technical <span>Skills</span></h2>
        <div className="tech-stack-container">
          <div className="tech-tag">React Js</div>
          <div className="tech-tag">Node.js</div>
          <div className="tech-tag">Python</div>
          <div className="tech-tag">MongoDB</div>
          <div className="tech-tag">Express</div>
          <div className="tech-tag">Tailwind</div>
        </div>

        <div className="skills-main-grid">
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

      <section id="projects" style={{ padding: '100px 8%' }}>
        <h2 className="section-head">My <span>Projects</span></h2>
        <div className="projects-grid">
          {/* Using Imported Variables for Images */}
          <div className="proj-card">
            <img src={socialImg} alt="Social Media" className="proj-img" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '25px' }}>
              <h4>LinkWave Social</h4>
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>MERN stack social platform.</p>
              <a href="https://github.com/darshankotadiya/CodeAlpha_Tasks/tree/main/SocialMediaApp" target="_blank" className="tech-tag" style={{ display: 'inline-block', marginTop: '15px' }}>Source Code</a>
            </div>
          </div>

          <div className="proj-card">
            <img src={workspaceImg} alt="Workspace" className="proj-img" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '25px' }}>
              <h4>Elite Master</h4>
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>Real-time collaboration tool.</p>
              <a href="https://github.com/darshankotadiya/CodeAlpha_Tasks/tree/main/Task-4%20Real%20Communication%20App" target="_blank" className="tech-tag" style={{ display: 'inline-block', marginTop: '15px' }}>Source Code</a>
            </div>
          </div>

          <div className="proj-card">
            <img src={dashboardImg} alt="Dashboard" className="proj-img" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '25px' }}>
              <h4>ProManager</h4>
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>Project insight dashboard.</p>
              <a href="https://github.com/darshankotadiya/CodeAlpha_Tasks/tree/main/Task3-ProjectManagementTool" target="_blank" className="tech-tag" style={{ display: 'inline-block', marginTop: '15px' }}>Source Code</a>
            </div>
          </div>

          <div className="proj-card">
            <img src={ecommerceImg} alt="E-commerce" className="proj-img" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '25px' }}>
              <h4>CodeAlpha Store</h4>
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>Full-featured E-commerce.</p>
              <a href="https://github.com/darshankotadiya/CodeAlpha_Tasks/tree/main/Task1-Ecommerce" target="_blank" className="tech-tag" style={{ display: 'inline-block', marginTop: '15px' }}>Source Code</a>
            </div>
          </div>

          <div className="proj-card">
            <img src={tictactoeImg} alt="AI Game" className="proj-img" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '25px' }}>
              <h4>Nexus Tic-Tac-Toe</h4>
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>Minimax logic AI game.</p>
              <a href="https://github.com/darshankotadiya/CODSOFT/tree/main/Task-2-TicTacToe-AI" target="_blank" className="tech-tag" style={{ display: 'inline-block', marginTop: '15px' }}>Source Code</a>
            </div>
          </div>

          <div className="proj-card">
            <img src={chatAiImg} alt="AI Chat" className="proj-img" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '25px' }}>
              <h4>Nexus-AI Assistant</h4>
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>Rule-based logic chatbot.</p>
              <a href="https://github.com/darshankotadiya/CODSOFT/tree/main/Task-1-Chatbot" target="_blank" className="tech-tag" style={{ display: 'inline-block', marginTop: '15px' }}>Source Code</a>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" style={{ padding: '100px 8%' }}>
        <h2 className="section-head">Professional <span>Experience</span></h2>
        <div className="exp-container">
          <div className="timeline-line"></div>
          <div className="timeline-dot" style={{ top: '20px' }}></div>
          <div className="exp-card">
            <h3 style={{ fontSize: '24px', color: '#f0f6fc' }}>MERN Full Stack Developer | Vortex Aziel</h3>
            <p style={{ color: '#94a3b8', marginTop: '10px' }}>Leading the development of scalable web applications using the MERN stack.</p>
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: '100px 8%', background: '#0a0a0c' }}>
        <h2 className="section-head">Get In <span>Touch</span></h2>
        <div className="contact-grid">
          <div>
            <h3 style={{ fontSize: '28px', color: 'white' }}>Let's Connect</h3>
            <div className="contact-info-list">
              <div className="contact-info-card">
                <div className="icon-box-purple"><Mail size={30} color="white" /></div>
                <div><p className="label">Email</p><p className="value">darshankotadiya1010@gmail.com</p></div>
              </div>
              <div className="contact-info-card">
                <div className="icon-box-purple"><PhoneCall size={30} color="white" /></div>
                <div><p className="label">Phone</p><p className="value">+91 96243 32477</p></div>
              </div>
            </div>
          </div>
          <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" name="name" placeholder="Full Name" required />
            <input className="input-field" name="email" type="email" placeholder="Email" required />
            <textarea className="input-field" name="message" placeholder="Message" rows="5" required></textarea>
            <button type="submit" className="send-btn" style={{ border: 'none', cursor: 'pointer' }}>
              <Send size={18} /> Send WhatsApp
            </button>
          </form>
        </div>
      </section>

      <footer className="footer-main">
        <div className="footer-left">
          <div className="footer-logo-box">DK</div>
          <span>© 2026 Darshan Kotadiya. All rights reserved.</span>
        </div>
        <div className="footer-right">
          <button className="scroll-top-btn" onClick={scrollToTop}><ArrowUp size={20} /></button>
        </div>
      </footer>
    </div>
  );
}

export default App;
