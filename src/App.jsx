import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import './App.css';

// Project images (Make sure paths are correct)
import socialImg from '../public/social-media.png';
import workspaceImg from '../public/workspace.png';
import dashboardImg from '../public/dashboard.png';
import ecommerceImg from '../public/ecommerce.png';
import tictactoeImg from '../public/tictactoe.png';
import chatAiImg from '../public/chat-ai.png';

import {
  User,
  Code2,
  FolderOpen,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  Send,
  ArrowUp,
  Heart,
  ChevronDown,
  Layout,
  Database,
  Cpu,
  PhoneCall,
  MessageSquare,
  Menu,
  X,
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

  // 2. WHATSAPP LOGIC (No Backend Required)
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // 1. Extract Data
    const { name, email, subject, message } = data;

    // 2. Format the Message for WhatsApp
    // %0a creates a new line
    const whatsappMessage =
      `*New Portfolio Inquiry* %0a` +
      `*Name:* ${name} %0a` +
      `*Email:* ${email} %0a` +
      `*Subject:* ${subject} %0a` +
      `----------------------- %0a` +
      `*Message:* %0a ${message}`;

    // 3. Your Phone Number (Include Country Code, No + sign)
    const phoneNumber = '919624332477';

    // 4. Create the URL
    const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // 5. Open WhatsApp in new tab
    window.open(url, '_blank');

    // Optional: Reset form after sending
    e.target.reset();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='portfolio-app'>
      {/* Background Particles */}
      {init && (
        <Particles
          id='tsparticles'
          options={{
            background: { color: { value: 'transparent' } },
            fullScreen: { enable: true, zIndex: -1 },
            fpsLimit: 120,
            particles: {
              color: { value: '#8b5cf6' },
              links: {
                color: '#8b5cf6',
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
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
          <a href='#about'>
            <User size={18} /> About
          </a>
          <a href='#skills'>
            <Code2 size={18} /> Skills
          </a>
          <a href='#projects'>
            <FolderOpen size={18} /> Projects
          </a>
          <a href='#experience'>
            <Briefcase size={18} /> Experience
          </a>
          <a href='#contact'>
            <Mail size={18} /> Contact
          </a>
        </div>

        <div className='mobile-menu-btn' onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <div className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`}>
          <a href='#about' onClick={closeMenu}>
            <User size={20} /> About
          </a>
          <a href='#skills' onClick={closeMenu}>
            <Code2 size={20} /> Skills
          </a>
          <a href='#projects' onClick={closeMenu}>
            <FolderOpen size={20} /> Projects
          </a>
          <a href='#experience' onClick={closeMenu}>
            <Briefcase size={20} /> Experience
          </a>
          <a href='#contact' onClick={closeMenu}>
            <Mail size={20} /> Contact
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id='home' className='hero-sec'>
        <div className='avatar-main'>DK</div>
        <h1 className='name-title'>Darshan Kotadiya</h1>
        <p style={{ fontSize: '24px', margin: '15px 0', fontWeight: '600' }}>
          Full-Stack Developer | AI Intern
        </p>
        <p
          style={{
            maxWidth: '700px',
            color: '#94a3b8',
            lineHeight: '1.8',
            fontSize: '16px',
          }}
        >
          I build modern, scalable web applications using React, Node.js,
          Express, MongoDB and AI algorithms. I focus on performance,
          accessibility and delightful UX.
        </p>

        <div style={{ display: 'flex', gap: '30px', marginTop: '30px' }}>
          <a
            href='https://github.com/darshankotadiya'
            target='_blank'
            rel='noopener noreferrer'
            className='icon-box-about'
          >
            <Github size={24} />
          </a>
          <a
            href='https://www.linkedin.com/in/darshan-kotadiya-70416a251/'
            target='_blank'
            rel='noopener noreferrer'
            className='icon-box-about'
          >
            <Linkedin size={24} />
          </a>
          <a
            href='mailto:darshankotadiya1010@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Darshan,'
            className='icon-box-about'
          >
            <Mail size={24} />
          </a>
        </div>

        <a href='#about' style={{ textDecoration: 'none' }}>
          <button className='explore-btn'>
            Explore My Work <ChevronDown size={20} className='bounce-icon' />
          </button>
        </a>
      </section>

      {/* ABOUT ME */}
      <section id='about'>
        <h2 className='section-head'>
          About <span>Me</span>
        </h2>
        <div className='about-grid'>
          <div>
            <p style={{ color: '#94a3b8', lineHeight: '2', fontSize: '17px' }}>
              Hello! I'm Darshan Kotadiya, a dedicated Full-Stack Developer
              specializing in the MERN stack and AI. I have hands-on experience
              building a variety of applications, including AI logic systems
              like Minimax at Vortex Aziel and CodSoft.
            </p>
            <div style={{ marginTop: '25px' }}>
              <span className='about-pill'>MERN Stack</span>
              <span className='about-pill'>Python AI</span>
              <span className='about-pill'>Database Mgmt</span>
            </div>
          </div>
          <div className='about-cards-grid'>
            <div className='info-card'>
              <div className='icon-box-about'>
                <Layout size={20} />
              </div>
              <h4>Web Development</h4>
              <p
                style={{
                  fontSize: '13px',
                  color: '#94a3b8',
                  marginTop: '10px',
                }}
              >
                Creating responsive and interactive UIs with React.js.
              </p>
            </div>
            <div className='info-card'>
              <div className='icon-box-about'>
                <Database size={20} />
              </div>
              <h4>Backend Dev</h4>
              <p
                style={{
                  fontSize: '13px',
                  color: '#94a3b8',
                  marginTop: '10px',
                }}
              >
                Scalable APIs with Node.js and Express.js.
              </p>
            </div>
            <div className='info-card'>
              <div className='icon-box-about'>
                <Code2 size={20} />
              </div>
              <h4>API Integration</h4>
              <p
                style={{
                  fontSize: '13px',
                  color: '#94a3b8',
                  marginTop: '10px',
                }}
              >
                Building robust REST APIs and third-party integrations.
              </p>
            </div>
            <div className='info-card'>
              <div className='icon-box-about'>
                <Cpu size={20} />
              </div>
              <h4>AI Integration</h4>
              <p
                style={{
                  fontSize: '13px',
                  color: '#94a3b8',
                  marginTop: '10px',
                }}
              >
                Implementing smart algorithmic solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section id='skills' style={{ padding: '100px 8%' }}>
        <h2 className='section-head'>
          Technical <span>Skills</span>
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: '#94a3b8',
            marginTop: '-30px',
            fontSize: '15px',
          }}
        >
          A concise overview of tools and technologies I use regularly.
        </p>

        <h3
          style={{ textAlign: 'center', marginTop: '50px', fontSize: '22px' }}
        >
          Tech Stack
        </h3>
        <div className='tech-stack-container'>
          <div className='tech-tag'>React Js</div>
          <div className='tech-tag'>Node.js</div>
          <div className='tech-tag'>Python</div>
          <div className='tech-tag'>MongoDB</div>
          <div className='tech-tag'>Express</div>
          <div className='tech-tag'>Tailwind</div>
        </div>

        <div className='skills-main-grid'>
          {/* Backend Column */}
          <div className='skill-box'>
            <h3>Backend</h3>
            <div className='progress-item'>
              <div className='progress-info'>
                Node.js <span>80%</span>
              </div>
              <div className='progress-track'>
                <div
                  className='progress-bar-fill'
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>
            <div className='progress-item'>
              <div className='progress-info'>
                Express.js <span>80%</span>
              </div>
              <div className='progress-track'>
                <div
                  className='progress-bar-fill'
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>
            <div className='progress-item'>
              <div className='progress-info'>
                MongoDB <span>80%</span>
              </div>
              <div className='progress-track'>
                <div
                  className='progress-bar-fill'
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Frontend Column */}
          <div className='skill-box'>
            <h3>Frontend</h3>
            <div className='progress-item'>
              <div className='progress-info'>
                React Js <span>100%</span>
              </div>
              <div className='progress-track'>
                <div
                  className='progress-bar-fill'
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
            <div className='progress-item'>
              <div className='progress-info'>
                Tailwind CSS <span>90%</span>
              </div>
              <div className='progress-track'>
                <div
                  className='progress-bar-fill'
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>
            <div className='progress-item'>
              <div className='progress-info'>
                JavaScript <span>90%</span>
              </div>
              <div className='progress-track'>
                <div
                  className='progress-bar-fill'
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Tools & Others Column */}
          <div className='skill-box'>
            <h3>Tools & Others</h3>
            <div className='progress-item'>
              <div className='progress-info'>
                GitHub <span>80%</span>
              </div>
              <div className='progress-track'>
                <div
                  className='progress-bar-fill'
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>
            <div className='progress-item'>
              <div className='progress-info'>
                Python AI <span>85%</span>
              </div>
              <div className='progress-track'>
                <div
                  className='progress-bar-fill'
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
            <div className='progress-item'>
              <div className='progress-info'>
                REST APIs <span>85%</span>
              </div>
              <div className='progress-track'>
                <div
                  className='progress-bar-fill'
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id='projects' style={{ padding: '100px 8%' }}>
        <h2 className='section-head'>
          My <span>Projects</span>
        </h2>
        <div
          className='projects-grid'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            marginTop: '50px',
          }}
        >
          <div className='proj-card'>
            <img
              src={socialImg}
              alt='Social Media'
              className='proj-img'
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '25px' }}>
              <h4 style={{ fontSize: '22px', fontWeight: '700' }}>
                LinkWave Social
              </h4>
              <p
                style={{
                  color: '#94a3b8',
                  fontSize: '15px',
                  marginTop: '10px',
                  lineHeight: '1.6',
                }}
              >
                A MERN stack social platform with real-time posting, liking, and
                commenting features.
              </p>
              <div style={{ marginTop: '25px' }}>
                <a
                  href='https://github.com/darshankotadiya/CodeAlpha_Tasks/tree/main/SocialMediaApp'
                  target='_blank'
                  className='tech-tag'
                  style={{ textDecoration: 'none' }}
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className='proj-card'>
            <img
              src={workspaceImg}
              alt='Workspace'
              className='proj-img'
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '25px' }}>
              <h4 style={{ fontSize: '22px', fontWeight: '700' }}>
                Elite Master Workspace
              </h4>
              <p
                style={{
                  color: '#94a3b8',
                  fontSize: '15px',
                  marginTop: '10px',
                  lineHeight: '1.6',
                }}
              >
                Real-time collaboration tool featuring screen sharing and
                instant messaging.
              </p>
              <div style={{ marginTop: '25px' }}>
                <a
                  href='https://github.com/darshankotadiya/CodeAlpha_Tasks/tree/main/Task-4%20Real%20Communication%20App'
                  target='_blank'
                  className='tech-tag'
                  style={{ textDecoration: 'none' }}
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className='proj-card'>
            <img
              src={dashboardImg}
              alt='Dashboard'
              className='proj-img'
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '25px' }}>
              <h4 style={{ fontSize: '22px', fontWeight: '700' }}>
                ProManager Dashboard
              </h4>
              <p
                style={{
                  color: '#94a3b8',
                  fontSize: '15px',
                  marginTop: '10px',
                  lineHeight: '1.6',
                }}
              >
                An interactive project insight dashboard to track tasks and team
                productivity.
              </p>
              <div style={{ marginTop: '25px' }}>
                <a
                  href='https://github.com/darshankotadiya/CodeAlpha_Tasks/tree/main/Task3-ProjectManagementTool'
                  target='_blank'
                  className='tech-tag'
                  style={{ textDecoration: 'none' }}
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className='proj-card'>
            <img
              src={ecommerceImg}
              alt='E-commerce'
              className='proj-img'
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '25px' }}>
              <h4 style={{ fontSize: '22px', fontWeight: '700' }}>
                CodeAlpha Store
              </h4>
              <p
                style={{
                  color: '#94a3b8',
                  fontSize: '15px',
                  marginTop: '10px',
                  lineHeight: '1.6',
                }}
              >
                Full-featured e-commerce platform with inventory status and
                shopping cart.
              </p>
              <div style={{ marginTop: '25px' }}>
                <a
                  href='https://github.com/darshankotadiya/CodeAlpha_Tasks/tree/main/Task1-Ecommerce'
                  target='_blank'
                  className='tech-tag'
                  style={{ textDecoration: 'none' }}
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className='proj-card'>
            <img
              src={tictactoeImg}
              alt='AI Game'
              className='proj-img'
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '25px' }}>
              <h4 style={{ fontSize: '22px', fontWeight: '700' }}>
                Nexus-AI Tic-Tac-Toe
              </h4>
              <p
                style={{
                  color: '#94a3b8',
                  fontSize: '15px',
                  marginTop: '10px',
                  lineHeight: '1.6',
                }}
              >
                A smart game engine built with Minimax algorithm for unbeatable
                logic.
              </p>
              <div style={{ marginTop: '25px' }}>
                <a
                  href='https://github.com/darshankotadiya/CODSOFT/tree/main/Task-2-TicTacToe-AI'
                  target='_blank'
                  className='tech-tag'
                  style={{ textDecoration: 'none' }}
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className='proj-card'>
            <img
              src={chatAiImg}
              alt='AI Chat'
              className='proj-img'
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '25px' }}>
              <h4 style={{ fontSize: '22px', fontWeight: '700' }}>
                Nexus-AI Assistant
              </h4>
              <p
                style={{
                  color: '#94a3b8',
                  fontSize: '15px',
                  marginTop: '10px',
                  lineHeight: '1.6',
                }}
              >
                A rule-based logic engine developed to respond to developer
                commands.
              </p>
              <div style={{ marginTop: '25px' }}>
                <a
                  href='https://github.com/darshankotadiya/CODSOFT/tree/main/Task-1-Chatbot'
                  target='_blank'
                  className='tech-tag'
                  style={{ textDecoration: 'none' }}
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section id='experience' style={{ padding: '100px 8%' }}>
        <h2 className='section-head'>
          Professional <span>Experience</span>
        </h2>
        <div className='exp-container' style={{ marginTop: '60px' }}>
          <div className='timeline-line'></div>

          <div className='timeline-dot' style={{ top: '20px' }}></div>
          <div className='exp-card' style={{ marginBottom: '50px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: '#8b5cf6',
                fontWeight: '700',
                marginBottom: '10px',
                fontSize: '14px',
              }}
            >
              <span>NOV 2025 - PRESENT (3 MONTHS)</span>{' '}
              <span>FULL-TIME INTERN</span>
            </div>
            <h3 style={{ fontSize: '24px', color: '#f0f6fc' }}>
              MERN Full Stack Developer | Vortex Aziel
            </h3>
            <p
              style={{
                color: '#94a3b8',
                marginTop: '15px',
                lineHeight: '1.8',
                fontSize: '15px',
              }}
            >
              • Leading the development of scalable web applications using
              **MongoDB, Express.js, React, and Node.js**. <br />
              • Specialized in architecting robust backend APIs and integrating
              complex AI-driven logic for dynamic user experiences. <br />•
              Focusing on high-performance delivery and seamless
              frontend-backend synchronization.
            </p>
          </div>

          <div className='timeline-dot' style={{ top: '280px' }}></div>
          <div className='exp-card' style={{ marginBottom: '50px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: '#8b5cf6',
                fontWeight: '700',
                marginBottom: '10px',
                fontSize: '14px',
              }}
            >
              <span>JAN 25, 2026 - FEB 25, 2026</span> <span>AI INTERN</span>
            </div>
            <h3 style={{ fontSize: '24px', color: '#f0f6fc' }}>
              Artificial Intelligence Intern | CodSoft
            </h3>
            <p
              style={{
                color: '#94a3b8',
                marginTop: '10px',
                lineHeight: '1.6',
                fontSize: '15px',
              }}
            >
              • Hands-on development of **intelligent system models** using
              Python and advanced algorithms. <br />• Implementing AI logic to
              solve real-world problems, enhancing automation and predictive
              capabilities within web environments.
            </p>
          </div>

          <div className='timeline-dot' style={{ top: '490px' }}></div>
          <div className='exp-card'>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: '#8b5cf6',
                fontWeight: '700',
                marginBottom: '10px',
                fontSize: '14px',
              }}
            >
              <span>DEC 20, 2024 - JAN 20, 2025</span> <span>COMPLETED</span>
            </div>
            <h3 style={{ fontSize: '24px', color: '#f0f6fc' }}>
              Full-Stack Web Intern | CodeAlpha
            </h3>
            <p
              style={{
                color: '#94a3b8',
                marginTop: '10px',
                lineHeight: '1.6',
                fontSize: '15px',
              }}
            >
              • Successfully engineered **4+ full-stack applications** using the
              MERN ecosystem. <br />
              • Key focus on secure backend authentication logic and creating
              pixel-perfect, responsive UI designs. <br />• Gained extensive
              experience in database management and RESTful API structures.
            </p>
          </div>
        </div>
      </section>

    <section id='contact' className="constellation-bg">
  {/* લાઈવ એનિમેટેડ તારા મંડળ લેયર */}
  <div className="stars-animation"></div>
  
  <div className="contact-inner-container">
    <h2 className='section-head'>Get In <span>Touch</span></h2>
    {/* બાકીનો અંદરનો કોડ ડાબી બાજુ સેટ કરેલો છે */}
    <div className='contact-grid-left'>
       {/* તારી વિગતો અહીં આવશે */}
    </div>
        {/* CONTACT SECTION માં આ લાઈન શોધો અને બદલો */}
{/* CONTACT SECTION માં આ લાઈન શોધો અને બદલો */}
<div
  className='contact-grid'
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // અહીં 280px કરી નાખવું
    gap: '40px',
    marginTop: '50px',
  }}
>
          {/* Left side content */}
          <div>
            <h3 style={{ fontSize: '28px', color: 'white' }}>Let's Connect</h3>
            <p style={{ color: '#94a3b8', margin: '20px 0', fontSize: '15px' }}>
              Available for freelance and full-time roles. Reach out via email,
              LinkedIn or WhatsApp.
            </p>

            <div
              className='contact-info-list'
              style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
            >
              <div className='contact-info-card'>
                <div className='icon-box-purple'>
                  <Mail size={35} color='white' />
                </div>
                <div>
                  <p className='label'>Email</p>
                  <a
                    href='mailto:darshankotadiya1010@gmail.com'
                    className='value'
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    darshankotadiya1010@gmail.com
                  </a>
                </div>
              </div>

              <div className='contact-info-card'>
                <div className='icon-box-purple'>
                  <PhoneCall size={35} color='white' />
                </div>
                <div>
                  <p className='label'>Phone</p>
                  <a
                    href='tel:+919624332477'
                    className='value'
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    +91 96243 32477
                  </a>
                </div>
              </div>

              <div className='contact-info-card'>
                <div className='icon-box-purple'>
                  <MessageSquare size={35} color='white' />
                </div>
                <div>
                  <p className='label'>WhatsApp</p>
                  <a
                    href='https://wa.me/919624332477'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='value'
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    +91 96243 32477
                  </a>
                </div>
              </div>
            </div>

            {/* Follow Me Section */}
            <div style={{ marginTop: '50px' }}>
              <p
                style={{
                  color: '#f0f6fc',
                  marginBottom: '20px',
                  fontWeight: '600',
                  fontSize: '18px',
                }}
              >
                Follow Me
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <a
                  href='https://github.com/darshankotadiya'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='footer-social-icon'
                >
                  <Github size={22} />
                </a>
                <a
                  href='https://www.linkedin.com/in/darshan-kotadiya-70416a251/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='footer-social-icon'
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href='https://wa.me/919624332477'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='footer-social-icon'
                >
                  <MessageCircle size={22} />
                </a>
                <a
                  href='mailto:darshankotadiya1010@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Darshan,%0A%0AI%20saw%20your%20portfolio...'
                  className='icon-box-about'
                  style={{ textDecoration: 'none' }}
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - CHANGED TO SEND ON WHATSAPP DIRECTLY */}
          <form className='form-container' onSubmit={handleSubmit}>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
              <div style={{ flex: 1 }}>
                <label>Full Name</label>
                <input
                  className='input-field'
                  name='name'
                  placeholder='Your name'
                  required
                />
              </div>
              <div style={{ flex: 1 }}>
                <label>Email Address</label>
                <input
                  className='input-field'
                  name='email'
                  type='email'
                  placeholder='your.email@example.com'
                  required
                />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label>Subject</label>
              <input
                className='input-field'
                name='subject'
                placeholder='Project discussion'
                required
              />
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label>Message</label>
              <textarea
                className='input-field'
                name='message'
                placeholder='Tell me about your project...'
                rows='5'
                required
              ></textarea>
            </div>

            <button
              type='submit'
              className='send-btn'
              style={{ border: 'none', width: '100%', cursor: 'pointer' }}
            >
              <Send size={18} /> Send Message on WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className='footer-main'>
        <div className='footer-left'>
          <div className='footer-logo-box'>DK</div>
          <span>© 2026 Darshan Kotadiya. All rights reserved.</span>
        </div>

        <div className='footer-center'>
          Made with <Heart size={16} fill='#ef4444' className='heart-icon' /> by
          Darshan Kotadiya
        </div>

        <div className='footer-right'>
          <button className='scroll-top-btn' onClick={scrollToTop}>
            <ArrowUp size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
