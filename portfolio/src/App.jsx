import React, { useState } from 'react'
import './App.css'

function App() {
  const [showEducation, setShowEducation] = useState(false);
  const [activeAchievement, setActiveAchievement] = useState('tcs');
  const [animDir, setAnimDir] = useState('');
  const [certModal, setCertModal] = useState(false);

  const handleAchievementChange = (id) => {
    if (id === activeAchievement) return;
    const tabs = ['tcs', 'naukri', 'leetcode'];
    const currentIndex = tabs.indexOf(activeAchievement);
    const nextIndex = tabs.indexOf(id);
    setAnimDir(nextIndex > currentIndex ? 'slide-left' : 'slide-right');
    setTimeout(() => {
      setActiveAchievement(id);
      setAnimDir('');
    }, 300);
  };

  return (
    <div className="app-container">
      {/* Wrapper for the first page to have the blush background */}
      <div className="hero-page">
        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-brand">Saurabh Nishad</div>
          
          <ul className="nav-links">
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experiences">Experiences</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          
          <div className="nav-actions">
            <a href="#contact" className="btn btn-outline">Hire me</a>
            <a href="#contact" className="btn btn-primary">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="hero-section">
          <div className="hero-content">
            <div className="greeting-box">
              Hello There!
              <div className="corner-tr"></div>
              <div className="corner-bl"></div>
            </div>
            
            <h1 className="hero-title">
              I'm <span className="highlight">Saurabh Nishad,</span><br/>
              Full Stack Developer<br/>
              Based in India.
            </h1>
            
            <p className="hero-subtitle">
I am a Full Stack Developer specializing in building modern, scalable, and user-focused web applications. With 1.5+ years of hands-on development experience and currently pursuing a B.Tech at KNIT Sultanpur, I enjoy transforming ideas into reliable digital products through clean code, thoughtful architecture, and continuous learning.            </p>
            
            <div className="hero-buttons">
              <a href="#about" className="btn btn-portfolio">
                View My Portfolio
                <span className="play-icon">▶</span>
              </a>
              <a href="#contact" className="btn btn-outline">Hire Me</a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            {/* Background shape mainly Blush */}
            <div className="hero-blob"></div>
            <div className="hero-yellow-blob"></div>
            
            {/* Decorative Arrows */}
            <svg className="deco-arrow arrow-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            
            <svg className="deco-arrow arrow-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>

            {/* Profile image */}
            <img 
              src="/Profile.png" 
              alt="Saurabh Nishad" 
              className="hero-person" 
            />


          </div>
        </main>
      </div>

      {/* About Section */}
      <section id="about" className="about-section">
        
        {/* Main About Content */}
        <div className={`about-content ${showEducation ? 'slide-out' : ''}`}>
          <div className="about-header">
            <h2 className="section-title">About <span>Me</span></h2>
            <button className="btn btn-outline" onClick={() => setShowEducation(true)}>
              Education ➔
            </button>
          </div>
          
          <div className="about-body">
            <div className="about-text">
              <h3>Passionate Full Stack Developer building real-world, scalable web applications.</h3>
              <p>
                With 1.5+ years of hands-on development experience, I specialize in creating modern, responsive, and user-focused solutions using React, Next.js, TypeScript, Node.js, PostgreSQL, Prisma, and AWS. I enjoy turning ideas into reliable products through clean architecture, efficient code, and intuitive user experiences.
              </p>
              <p>
                Beyond writing code, I'm constantly exploring new technologies, improving my development skills, and contributing to impactful projects. My goal is to build software that not only performs exceptionally but also delivers meaningful value to businesses and users alike.
              </p>
            </div>
            
            <div className="skills-container">
              <h3>My Skills</h3>
              <div className="skills-list">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Prisma ORM</span>
                <span className="skill-tag">AWS EC2</span>
                <span className="skill-tag">Redux</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Git & GitHub</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">Firebase</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education Overlay layer */}
        <div className={`education-overlay ${showEducation ? 'active' : ''}`}>
          <div className="about-header">
            <button className="btn btn-outline" onClick={() => setShowEducation(false)}>
              🡠 About Me
            </button>
            <h2 className="section-title">My <span>Education</span></h2>
          </div>
          
          <div className="education-body">
            <div className="timeline">

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4>High School</h4>
                <span className="timeline-date">2020</span>
                <p>Secondary Education</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4>Higher Secondary (Intermediate)</h4>
                <span className="timeline-date">2022</span>
                <p>Higher Secondary Education</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4>JEE Main Qualification</h4>
                <span className="timeline-date">2023</span>
                <p>Joint Entrance Examination (JEE Main)</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4>B.Tech in Information Technology</h4>
                <span className="timeline-date">2023 – 2027</span>
                <p>Kamla Nehru Institute of Technology (KNIT), Sultanpur</p>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* Experiences Section */}
      <section id="experiences" className="experiences-section">
        <div className="section-header-center">
          <h2 className="section-title">My <span>Experiences</span></h2>
          <p className="section-subtitle">A summary of my recent roles and professional growth.</p>
        </div>
        
        <div className="experiences-container">
          
          {/* Experience Card 1 */}
          <div className="experience-card">
            <div className="exp-header">
              <div className="exp-title-wrapper">
                <h3>Full Stack Developer & CTO</h3>
                <div className="company-info">
                  <img src="/Srinzo_logo.png" alt="Srinzo Logo" className="company-logo" />
                  <h4>Srinzo (Remote)</h4>
                </div>
              </div>
              <span className="exp-date">Jan 2025 – Present</span>
            </div>
            
            <p className="exp-desc">
              Leading the technical development and product strategy for Srinzo, a startup focused on simplifying hostel, PG, and rental accommodation discovery. Overseeing the complete software development lifecycle, from architecture and backend development to deployment and infrastructure management.
            </p>
            
            <div className="exp-highlights">
              <ul>
                <li>Led backend architecture and scalable database design using PostgreSQL & MongoDB.</li>
                <li>Managed cloud deployment and DevOps infrastructure on AWS EC2, Render, and Hostinger.</li>
                <li>Developed multiple user-facing modules and admin functionalities using React and Next.js.</li>
              </ul>
            </div>
            
            <div className="exp-tech">
              <span>React</span><span>Next.js</span><span>Node.js</span><span>TypeScript</span><span>AWS EC2</span><span>PostgreSQL</span><span>MongoDB</span><span>Prisma</span>
            </div>
          </div>

          {/* Experience Card 2 */}
          
          
        </div>

        <div className="expertise-section-wrapper">
          <div className="expertise-header-small">
            <h2>My <span>Expertise</span></h2>
          </div>
          
          <div className="tree-lines-container">
            <div className="tree-line-vertical-main"></div>
            <div className="tree-line-horizontal"></div>
          </div>
          
          <div className="expertise-grid">
            <div className="expertise-card connected-card">
              <div className="tree-line-drop"></div>
              <div className="node-dot"></div>
              <h3>Technical Expertise</h3>
              <ul>
                <li>Full-Stack Web Development</li>
                <li>REST API Development</li>
                <li>Database Design & Optimization</li>
                <li>Authentication & Authorization</li>
              </ul>
            </div>

            <div className="expertise-card connected-card">
              <div className="tree-line-drop"></div>
              <div className="node-dot"></div>
              <h3>Cloud & DevOps</h3>
              <ul>
                <li>AWS EC2 Deployment & Cloud Infrastructure</li>
                <li>Domain, DNS & SSL Configuration</li>
                <li>Production Deployment & Server Management</li>
              </ul>
            </div>

            <div className="expertise-card connected-card">
              <div className="tree-line-drop"></div>
              <div className="node-dot"></div>
              <h3>Integrations</h3>
              <ul>
                <li>Payment Gateway Integration</li>
                <li>Payment Webhook Implementation</li>
                <li>Mobile OTP Authentication</li>
              </ul>
            </div>

            <div className="expertise-card connected-card">
              <div className="tree-line-drop"></div>
              <div className="node-dot"></div>
              <h3>Startup Experience</h3>
              <ul>
                <li>Startup Product Development</li>
                <li>Git & GitHub Version Control</li>
              </ul>
            </div>
          </div>
        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-header-center">
          <h2 className="section-title">My <span>Projects</span></h2>
          <p className="section-subtitle">A selection of my recent development work.</p>
        </div>
        
        <div className="projects-grid">
          
          <div className="project-card highlight-card">
            <div className="project-content">
              <span className="project-badge">Personal Startup Project ⭐</span>
              <h3>Srinzo</h3>
              <p>Built and led the complete development of a full-stack accommodation booking platform, handling frontend, backend, database design, cloud deployment, authentication, and payment gateway integration.</p>
              
              <ul className="project-feature-list">
                <li>20+ Verified Venues Listed</li>
                <li>60+ Registered Users</li>
                <li>Live Production Platform</li>
                <li>OTP-Based Authentication</li>
                <li>Hosted on AWS EC2</li>
                <li>Google Maps & Location Search</li>
                <li>Actively Growing</li>
              </ul>

              <a href="https://srinzo.co.in" target="_blank" rel="noopener noreferrer" className="project-link">View Project <span>➔</span></a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <span className="project-badge">Professional Internship Project ⭐</span>
              <h3>Soft7 Company Website</h3>
              <p>Developed and enhanced a production-ready company website during a 3-month internship, collaborating with the development team using modern full-stack technologies.</p>
              <a href="https://app.soft7.in/" target="_blank" rel="noopener noreferrer" className="project-link">View Project <span>➔</span></a>
            </div>
          </div>

        </div>
      </section>

      {/* Achievements & Awards Section */}
      <section id="achievements" className="achievements-section">
        <div className="section-header-center">
          <h2 className="section-title">Achievements <span>&amp; Awards</span></h2>
          <p className="section-subtitle">Recognition and milestones from my journey so far.</p>
        </div>

        {/* Tab Switcher */}
        <div className="achievements-tabs">
          <button className={`ach-tab ${activeAchievement === 'tcs' ? 'active' : ''}`} onClick={() => handleAchievementChange('tcs')}>
            <img src="/tcs.png" alt="TCS" className="ach-tab-img" />
            Tata Consultancy Services
          </button>
          <button className={`ach-tab ${activeAchievement === 'naukri' ? 'active' : ''}`} onClick={() => handleAchievementChange('naukri')}>
            <img src="/naukri.png" alt="Naukri" className="ach-tab-img" />
            Naukri Campus
          </button>

          <button className={`ach-tab ${activeAchievement === 'leetcode' ? 'active' : ''}`} onClick={() => handleAchievementChange('leetcode')}>
            <img src="/leetcode.webp" alt="LeetCode" className="ach-tab-img" />
            LeetCode
          </button>
        </div>

        {/* Content Panel */}
        <div className="achievements-panel-wrapper">
          <div className={`achievements-panel ${animDir}`} key={activeAchievement}>

            {/* TCS */}
            {activeAchievement === 'tcs' && (
              <div className="ach-content">
                <div className="ach-icon-wrap tcs-color">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <div className="ach-text">
                  <span className="ach-badge">Offer Letter</span>
                  <h3>Tata Consultancy Services (TCS) — Ninja Offer</h3>
                  <p>Selected for the <strong>TCS Ninja role</strong> through campus recruitment and received an offer for the <strong>Assistant System Engineer Trainee</strong> position — recognizing academic excellence and technical aptitude.</p>
                </div>
              </div>
            )}

            {/* Naukri Campus */}
            {activeAchievement === 'naukri' && (
              <div className="ach-content ach-content-col">
                <div className="ach-top-row">
                  <div className="ach-icon-wrap naukri-color">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <div className="ach-text">
                    <span className="ach-badge">Recognition</span>
                    <h3>Naukri Campus Young Turks 2026 &nbsp;×&nbsp; HCLTech</h3>
                    <p>Achieved <strong>95.41 percentile</strong> securing an <strong>All-India Rank of 18,400</strong> among participants — selected as part of the exclusive <strong>Naukri Campus × HCLTech Young Turks 2026</strong> program recognising top engineering talent across India.</p>
                  </div>
                </div>
                {/* Certificate Preview */}
                <div className="cert-preview-row">
                  <p className="cert-label">Certificate Preview</p>
                  <div className="cert-thumb" onClick={() => setCertModal(true)} title="Click to enlarge">
                    <iframe
                      src="https://drive.google.com/file/d/1Bpo4kRgnLsf4rTAIdDV8gRli48PKAw9e/preview"
                      className="cert-iframe"
                      allow="autoplay"
                      title="Young Turks Certificate"
                    ></iframe>
                    <div className="cert-overlay">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                      <span>Click to expand</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LeetCode */}
            {activeAchievement === 'leetcode' && (
              <div className="ach-content">
                <div className="ach-icon-wrap leet-color">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <div className="ach-text">
                  <span className="ach-badge">Problem Solving</span>
                  <h3>LeetCode — 600+ Problems Solved</h3>
                  <p className="ach-date">🗓️ As of 19 October 2026</p>
                  <p>Solved over <strong>600 coding problems</strong> on LeetCode, consistently strengthening problem-solving skills across Data Structures, Algorithms, Dynamic Programming, and programming proficiency.</p>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Certificate Lightbox Modal */}
      {certModal && (
        <div className="cert-modal-backdrop" onClick={() => setCertModal(false)}>
          <div className="cert-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setCertModal(false)}>✕</button>
            <iframe
              src="https://drive.google.com/file/d/1Bpo4kRgnLsf4rTAIdDV8gRli48PKAw9e/preview"
              className="cert-modal-iframe"
              allow="autoplay"
              title="Young Turks Certificate Full"
            ></iframe>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header-center">
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <p className="section-subtitle">Have a project in mind? Let's work together.</p>
        </div>
        
        <div className="contact-container">
          
          {/* Left Side: Contact Form */}
          <div className="contact-form-wrapper">
            <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
              <input type="hidden" name="access_key" value="87659258-e77f-4a80-b7ac-0abd1e0a48e3" />
              
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" name="name" required placeholder="John Doe" />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" name="email" required placeholder="john@example.com" />
              </div>

              <div className="form-group">
                <label>Company / Organization (Optional)</label>
                <input type="text" name="company" placeholder="Your Company" />
              </div>

              <div className="form-group">
                <label>Subject *</label>
                <input type="text" name="subject" required placeholder="How can I help you?" />
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea name="message" required rows="5" placeholder="Your message here..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn">Send Message</button>
            </form>
          </div>

          {/* Right Side: Contact Details */}
          <div className="contact-details-wrapper">
            <div className="contact-info-card">
              <h3>Contact Information</h3>
              <p>Feel free to reach out to me directly through any of these channels.</p>
              
              <div className="info-item" style={{ width: '100%' }}>
                <span className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 7651837446</p>
                  </div>
                  <a href="https://wa.me/917651837446" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', color: '#25D366', textDecoration: 'none' }} title="Chat on WhatsApp">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  </a>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:bharatnishad.840@gmail.com">bharatnishad.840@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <div>
                  <h4>Location</h4>
                  <p>Sultanpur, UP, India</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </span>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/saurabh-nishad-5ab072325/" target="_blank" rel="noopener noreferrer">saurabh-nishad-5ab072325</a>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </span>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/Saurabh-Nishad-WD" target="_blank" rel="noopener noreferrer">Saurabh-Nishad-WD</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-col-main">
            <h3>Saurabh Nishad</h3>
            <h4>Full Stack Developer</h4>
            <p>Building scalable web applications with modern technologies, focused on performance, user experience, and real-world impact.</p>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experiences">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experiences">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>📧 <a href="mailto:bharatnishad.840@gmail.com">bharatnishad.840@gmail.com</a></li>
              <li>📍 Uttar Pradesh, India</li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com/Saurabh-Nishad-WD" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/saurabh-nishad-5ab072325/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Designed & Developed by Saurabh Nishad ❤️</p>
        </div>
      </footer>
      
    </div>
  )
}

export default App
