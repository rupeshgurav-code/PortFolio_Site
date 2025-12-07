import React, { useEffect, useRef } from 'react';
import './platform.css';

const Platform = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className='plat' ref={containerRef}>
      <div className="platform-header">
        <div className="section-badge">Connect With Me</div>
        <h2 className="section-title">
          Where You Can <span className="highlight">Find Me</span>
        </h2>
        <p className="section-description">
          Let's connect and build something amazing together!
        </p>
      </div>
      <div className="cards-container">
        <div className="card linkedin-card">
          <div className="card-icon-wrapper">
            <div className="card-icon">🔗</div>
          </div>
          <h3>LinkedIn</h3>
          <p>
            I'm passionate about building meaningful connections in tech, sharing insights, and learning from others.
          </p>
          <a 
            href="https://www.linkedin.com/in/rupesh-gurav-268aba375/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card-link"
          >
            <span>Visit My Profile</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3.33334 10L16.6667 10M16.6667 10L11.6667 5M16.6667 10L11.6667 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <div className="card-glow linkedin-glow"></div>
        </div>

        <div className="card leetcode-card">
          <div className="card-icon-wrapper">
            <div className="card-icon">✨</div>
          </div>
          <h3>LeetCode</h3>
          <p>
            I tackle coding challenges daily to improve my algorithmic thinking and prepare for technical interviews.
          </p>
          <a 
            href="https://leetcode.com/u/Rupesh_Gurav/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card-link"
          >
            <span>View My Progress</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3.33334 10L16.6667 10M16.6667 10L11.6667 5M16.6667 10L11.6667 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <div className="card-glow leetcode-glow"></div>
        </div>



        <div className="card leetcode-card">
          <div className="card-icon-wrapper">
            <div className="card-icon">🔧</div>
          </div>
          <h3>GitUp</h3>
          <p>
            I tackle coding challenges daily to improve my algorithmic thinking and prepare for technical interviews.
          </p>
          <a 
            href="https://github.com/rupeshgurav-code/PortFolio_Site" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card-link"
          >
            <span>View My Progress</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3.33334 10L16.6667 10M16.6667 10L11.6667 5M16.6667 10L11.6667 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <div className="card-glow leetcode-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Platform;