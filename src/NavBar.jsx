import React, { useState, useEffect } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">Portfolio</span>
        </div>
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/platform" onClick={() => setMobileMenuOpen(false)}>
              <span>Platform</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <span>Contact</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/more" onClick={() => setMobileMenuOpen(false)}>
              <span>Education</span>
            </NavLink>
          </li>
        </ul>
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;