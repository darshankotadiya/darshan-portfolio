import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import './App.css';

// Project images
import socialImg from '../public/social-media.png';
import workspaceImg from '../public/workspace.png';
import dashboardImg from '../public/dashboard.png';
import ecommerceImg from '../public/ecommerce.png';
import tictactoeImg from '../public/tictactoe.png';
import chatAiImg from '../public/chat-ai.png';

import {
  User, Code2, FolderOpen, Briefcase, Mail, Github, Linkedin,
  MessageCircle, Send, ArrowUp, Heart, ChevronDown, Layout,
  Database, Cpu, PhoneCall, MessageSquare, Menu, X,
} from 'lucide-react';

function App() {
  const [init, setInit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // EMAIL LOGIC (Nodemailer Backend Connection)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message Sent to Email Successfully!");
        e.target.reset();
      } else {
        alert("Failed to send email. Check if your Vercel/API is running.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className='portfolio-app'>
      {/* Home Page Background Particles */}
      {init && (
        <Particles
          id='tsparticles'
          options={{
            background: { color: { value: 'transparent' } },
            fullScreen: { enable: true, zIndex: -1 },
            fpsLimit: 120,
            particles: {
              color: { value: '#8b5cf6' },
              links: { color: '#8b5cf6', distance: 150, enable: true, opacity: 0.2, width: 1 },
              move: { enable: true, speed: 1.5, direction: 'none' },
              number: { density: { enable: true, area: 800 }, value: 60 },
              opacity: { value: 0.3 },
              size: { value: { min: 1, max: 3 } },
            },
            interactivity: {
              events: { onHover: { enable: true, mode: 'repulse' } },
            },
          }}
        />
      )}

      {/* NAVBAR */}
      <nav className='nav-container'>
        <div className='nav-left'>
          <div className='nav-logo'>DK</div>
          <span className='nav-name'>Darshan Kotadiya</span>
        </div>
        <div className='nav-right desktop-nav'>
          <a href='#about'><User size={18} /> About</a>
          <a href='#skills'><Code2 size={18} /> Skills</a>
          <a href='#projects'><FolderOpen size={18} /> Projects</a>
          <a href='#experience'><Briefcase size={18} /> Experience</a>
          <a href='#contact'><Mail size={18} /> Contact</a>
        </div>
        <div className='mobile-menu-btn' onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        <div className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`}>
          <a href='#about' onClick={closeMenu}><User size={20} /> About</a>
          <a href='#skills' onClick={closeMenu}><Code2 size={20} /> Skills</a>
          <a href='#projects' onClick={closeMenu}><FolderOpen size={20} /> Projects</a>
          <a href='#experience' onClick={closeMenu}><Briefcase size={20} /> Experience</a>
          <a href='#contact' onClick={closeMenu}><Mail size={20} /> Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id='home' className='hero-sec'>
        <div className='avatar-main'>DK</div>
        <h1 className='name-title'>Darshan Kotadiya</h1>
        <p style={{ fontSize: '24px', margin: '15px 0', fontWeight: '600' }}>Full-Stack Developer | AI Intern</p>
        <p style={{ maxWidth: '700px', color: '#94a3b8', lineHeight: '1.8', fontSize: '16px' }}>I build modern web apps with React, Node.js, and AI.</p>
        <div style={{ display: 'flex', gap: '30px', marginTop: '30px' }}>
          <a href='https://github.com/darshankotadiya' target='_blank' className='icon-box-about'><Github size={24} /></a>
          <a href='https://www.linkedin.com/in/darshan-kotadiya-70416a251/' target='_blank' className='icon-box-about'><Linkedin size={24} /></a>
          <a href='mailto:darshankotadiya1010@gmail.com' className='icon-box-about'><Mail size={24} /></a>
        </div>
        <a href='#about'><button className='explore-btn'>Explore My Work <ChevronDown size={20} className='bounce-icon' /></button></a>
      </section>

      {/* ABOUT SECTION */}
      <section id='about'>
        <h2 className='section-head'>About <span>Me</span></h2>
        <div className='about-grid'>
          <div>
            <p style={{ color: '#94a3b8', lineHeight: '2', fontSize: '17px' }}>Hello! I'm Darshan Kotadiya, a dedicated Full-Stack Developer specializing in the MERN stack and AI.</p>
            <div style={{ marginTop: '25px' }}>
              <span className='about-pill'>MERN Stack</span><span className='about-pill'>Python AI</span>
            </div>
          </div>
          <div className='about-cards-grid'>
            <div className='info-card'><h4>Web Dev</h4><p>Creating responsive UIs with React.</p></div>
            <div className='info-card'><h4>Backend</h4><p>Scalable APIs with Node.js.</p></div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id='skills'>
        <h2 className='section-head'>Technical <span>Skills</span></h2>
        <div className='skills-main-grid'>
          <div className='skill-box'>
            <h3>Stack</h3>
            <div className='progress-item'><div className='progress-info'>React Js <span>100%</span></div><div className='progress-track'><div className='progress-bar-fill' style={{ width: '100%' }}></div></div></div>
            <div className='progress-item'><div className='progress-info'>Node.js <span>80%</span></div><div className='progress-track'><div className='progress-bar-fill' style={{ width: '80%' }}></div></div></div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id='projects'>
        <h2 className='section-head'>My <span>Projects</span></h2>
        <div className='projects-grid'>
          <div className='proj-card'>
            <img src={socialImg} alt='Social' className='proj-img' />
            <div style={{ padding: '25px' }}><h4>LinkWave Social</h4><a href='https://github.com/darshankotadiya/CodeAlpha_Tasks/tree/main/SocialMediaApp' target='_blank' className='tech-tag'>Code</a></div>
          </div>
          <div className='proj-card'>
            <img src={workspaceImg} alt='Workspace' className='proj-img' />
            <div style={{ padding: '25px' }}><h4>Elite Workspace</h4><a href='https://github.com/darshankotadiya/CodeAlpha_Tasks/tree/main/Task-4%20Real%20Communication%20App' target='_blank' className='tech-tag'>Code</a></div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id='experience'>
        <h2 className='section-head'>Experience</h2>
        <div className='exp-container'>
          <div className='timeline-line'></div>
          <div className='exp-card'>
            <h3 style={{ color: '#8b5cf6' }}>MERN Developer | Vortex Aziel</h3>
            <p>Leading the development of scalable web applications.</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - Live, Balanced, Left Start */}
      <section id='contact' className="contact-live-bg-section">
        {/* Live Constellation (Particles) for Contact */}
        {init && (
          <Particles
            id="contact-particles"
            className="particles-overlay-fixed"
            options={{
              fullScreen: { enable: false },
              particles: {
                number: { value: 45 },
                color: { value: "#8b5cf6" },
                links: { enable: true, distance: 130, color: "#8b5cf6", opacity: 0.25 },
                move: { enable: true, speed: 1.2 },
                size: { value: 1.5 }
              }
            }}
          />
        )}

        <div className="contact-main-wrapper">
          <h2 className='section-head'>Get In <span>Touch</span></h2>
          <div className='contact-balanced-grid'>
            {/* Left Info - Always Left Aligned */}
            <div className="contact-left-details">
              <h3 style={{ fontSize: '28px', color: 'white' }}>Let's Connect</h3>
              <p style={{ color: '#94a3b8', margin: '20px 0' }}>Available for freelance roles. Reach out via email or WhatsApp.</p>
              <div className='contact-info-list-fixed'>
                <div className='contact-card-modern'>
                  <div className='icon-box-purple-round'><Mail size={24} /></div>
                  <div><p className='label'>Email</p><p className='value'>darshankotadiya1010@gmail.com</p></div>
                </div>
                <div className='contact-card-modern'>
                  <div className='icon-box-purple-round'><MessageSquare size={24} /></div>
                  <div><p className='label'>WhatsApp</p><p className='value'>+91 96243 32477</p></div>
                </div>
              </div>
              <div style={{ marginTop: '40px' }}>
                <p style={{ color: '#f0f6fc', marginBottom: '15px', fontWeight: '600' }}>Follow Me</p>
                <div className="social-row-left">
                  <a href='https://github.com/darshankotadiya' target='_blank' className='social-icon-circle'><Github size={20} /></a>
                  <a href='https://www.linkedin.com/in/darshan-kotadiya-70416a251/' target='_blank' className='social-icon-circle'><Linkedin size={20} /></a>
                </div>
              </div>
            </div>

            {/* Right Form - Email Backend */}
            <form className='form-container-balanced' onSubmit={handleSubmit}>
              <div className="input-row-mobile-fix">
                <input className='input-field-custom' name='name' placeholder='Name' required />
                <input className='input-field-custom' name='email' type='email' placeholder='Email' required />
              </div>
              <input className='input-field-custom' name='subject' placeholder='Subject' required />
              <textarea className='input-field-custom' name='message' rows='5' placeholder='Message' required></textarea>
              <button type='submit' className='send-btn-final'><Send size={18} /> Send Email</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='footer-main'>
        <div className='footer-left'><div className='footer-logo-box'>DK</div><span>© 2026 Darshan Kotadiya</span></div>
        <div className='footer-center'>Made with <Heart size={16} fill='#ef4444' /> by Darshan</div>
        <div className='footer-right'><button className='scroll-top-btn' onClick={scrollToTop}><ArrowUp size={20} /></button></div>
      </footer>
    </div>
  );
}
export default App;
