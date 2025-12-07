import './skill.css';
import React, { useEffect, useRef } from 'react';
import Skilllist from './Skilllist';

const Skill = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.fade-in');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className='skill' ref={sectionRef}>
      <div className="intro fade-in">
        <div className="section-badge">Skills & Expertise</div>
        <h2 className="section-title">
          Crafting Digital <span className="highlight">Solutions</span>
        </h2>
        <p className="section-description">
          A dedicated developer with expertise in C++, Python, and Web Development.
          I enjoy building efficient systems, writing clean code, and creating user-friendly web experiences.
          My passion lies in solving problems through technology and continuously learning new tools and techniques.
        </p>
      </div>

      <Skilllist />

      <div className="tech-stack fade-in">
        <h3 className="tech-title">Technologies I Work With</h3>
        <div className="tech-grid">
          <div className="tech-item">
            <div className="tech-icon">HTML</div>
            <div className="tech-bar">
              <div className="tech-progress" style={{ width: '90%' }}></div>
            </div>
          </div>

         
          <div className="tech-item">
            <div className="tech-icon">C++</div>
            <div className="tech-bar">
              <div className="tech-progress" style={{ width: '90%' }}></div>
            </div>
          </div>
         
          
          <div className="tech-item">
            <div className="tech-icon">CSS</div>
            <div className="tech-bar">
              <div className="tech-progress" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="tech-item">
            <div className="tech-icon">JavaScript</div>
            <div className="tech-bar">
              <div className="tech-progress" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="tech-item">
            <div className="tech-icon">React</div>
            <div className="tech-bar">
              <div className="tech-progress" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="tech-item">
            <div className="tech-icon">Python</div>
            <div className="tech-bar">
              <div className="tech-progress" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="goal fade-in">
        <div className="goalimg">
          <div className="image-overlay"></div>
          <img src="/img/Goal1.jpg" alt="My Goals" />
        </div>
        <div className="Gcontent">
          <div className="goal-header">
            <span className="goal-icon">🎯</span>
            <h1>My Goals</h1>
          </div>

          <div className="goal-section">
            <div className="goal-section-header">
              <div className="goal-dot"></div>
              <h2>Short-Term Goals</h2>
            </div>
            <ul>
              <li>
                <span className="check-icon">✓</span>
                Master core technologies like Python
              </li>
              <li>
                <span className="check-icon">✓</span>
                Build strong command over Data Structures and Algorithms
              </li>
              <li>
                <span className="check-icon">✓</span>
                Crack placement opportunities at top tech companies
              </li>
            </ul>
          </div>

          <div className="goal-section">
            <div className="goal-section-header">
              <div className="goal-dot"></div>
              <h2>Long-Term Vision</h2>
            </div>
            <ul>
              <li>
                <span className="check-icon">✓</span>
                Leverage technical skills to solve real-world problems
              </li>
              <li>
                <span className="check-icon">✓</span>
                Develop impactful software solutions
              </li>
              <li>
                <span className="check-icon">✓</span>
                Contribute to accessible and meaningful tech projects
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;