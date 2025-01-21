// coach-ninja\src\components\landing-page\Navbar.tsx
import React, { useState } from 'react';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const removeActive = () => {
    setMenuActive(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-coach">coach.</span>
        <span className="logo-ninja">ninja</span>
      </div>

      <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
        <li onClick={removeActive}><a href="#find-coaches">Find Coaches</a></li>
        <li onClick={removeActive}><a href="#services">Services</a></li>
        <li onClick={removeActive}><a href="#how-it-works">How It Works</a></li>
        <li onClick={removeActive}><a href="#about-us">About Us</a></li>
      </ul>

      <div className="nav-buttons">
        <button className="sign-in">Sign In</button>
        <button className="get-started">Get Started</button>
      </div>

      <div className={`hamburger ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;

