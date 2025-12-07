import React, { useEffect, useRef } from 'react';
import './main.css';

const Main = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className='main' ref={heroRef}>
      <div className="animated-bg"></div>
      <div className="content" ref={textRef}>
        <div className="greeting">
          <span className="wave">👋</span>
          <span className="greeting-text">Hey there!</span>
        </div>
        <h1 className="name-title">
          <span className="name-gradient">Rupesh Gurav</span>
        </h1>
        <div className="role-badge">
          <span className="role-text">Computer Science Engineer</span>
        </div>
        <p className="description">
          A passionate developer with a curiosity for solving real-world problems through technology. 
          I thrive on learning new concepts, building innovative projects, and collaborating with others 
          to create impactful solutions. Currently pursuing my B.Tech in Computer Science and Engineering, 
          constantly exploring the world of software development, AI, and web technologies.
        </p>
        <div className="cta-buttons">
          <a href="#skills" className="btn btn-primary">
            <span>Explore My Work</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
      <div className="image-wrapper" ref={imageRef}>
        <div className="image-glow"></div>
        <div className="image-container">
          <img src="/img/avatar.jpeg" alt="Rupesh Gurav" />
        </div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;