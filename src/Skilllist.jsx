import React, { useEffect, useRef } from 'react';
import './skilllist.css';

const skills = [
  { category: 'Programming', tools: 'C++, Python', icon: '💻', color: '#6366f1' },
  { category: 'Web Development', tools: 'HTML, CSS, JavaScript, React, Node.js', icon: '🌐', color: '#8b5cf6' },
  { category: 'Backend & APIs', tools: 'Express.js, RESTful APIs', icon: '⚙️', color: '#ec4899' },
  { category: 'Database', tools: 'MySQL, MongoDB', icon: '🗄️', color: '#6366f1' },
  { category: 'Version Control', tools: 'Git, GitHub', icon: '📦', color: '#8b5cf6' },
  { category: 'Other Tools', tools: 'VS Code', icon: '🛠️', color: '#ec4899' },
];

const Skilllist = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.skill-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skilllist-container" ref={containerRef}>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div 
            className="skill-card" 
            key={index}
            style={{ '--card-color': skill.color }}
          >
            <div className="card-icon">{skill.icon}</div>
            <div className="card-content">
              <h3>{skill.category}</h3>
              <p>{skill.tools}</p>
            </div>
            <div className="card-glow"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skilllist;