import React, { useEffect, useRef } from 'react';
import './more.css';

const More = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.timeline-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('visible');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="education-section">
      <div className="education-container" ref={containerRef}>
        <div className="education-header">
          <div className="section-badge">Academic Journey</div>
          <h2 className="section-title">
            My <span className="highlight">Education</span>
          </h2>
          <p className="section-description">
            A journey of continuous learning and growth
          </p>
        </div>
        <div className="timeline">
          <div className="timeline-item complete">
            <div className="timeline-dot">
              <div className="dot-inner"></div>
            </div>
            <div className="timeline-content">
              <div className="timeline-year">2020</div>
              <h3>10th Grade</h3>
              <p>Completed Secondary Education</p>
            </div>
          </div>

          <div className="timeline-item complete">
            <div className="timeline-dot">
              <div className="dot-inner"></div>
            </div>
            <div className="timeline-content">
              <div className="timeline-year">2024</div>
              <h3>Diploma in Computer Science</h3>
              <p>Graduated with 89.43% aggregate</p>
            </div>
          </div>

          <div className="timeline-item ongoing">
            <div className="timeline-dot">
              <div className="dot-inner pulse"></div>
            </div>
            <div className="timeline-content">
              <div className="timeline-year">2025 - Present</div>
              <h3>B.Tech in Computer Science</h3>
              <p>Currently pursuing – 3rd Year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default More;