// src/pages/LandingPage/Hero.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkedinIcon } from '../../fixtures/images';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleLinkedInClick = () => {
    navigate('/registration');
  };

  return (
    <section id="hero-section" className="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <div className="header">
          <h1 className="break">Transform Your Life with<br /> Expert Coaching</h1>
          <p>Meet our coaches and book your session in just a few clicks.</p>
        </div>
        <div className="signup-buttons">
          <button 
            className="linkedin-button"
            onClick={handleLinkedInClick}
          >
            <img src={linkedinIcon} alt="" />
            Sign in with LinkedIn
          </button>
          <p className="or">or</p>
          <button className="email-button">Sign up with email</button>
        </div>
        <div className="profile-preview">
          <p>For coaches, paste your LinkedIn profile URL below and preview your profile without signing up</p>
          <div className="profile-input">
            <input type="text" placeholder="Paste your LinkedIn profile URL" />
            <button className="view-profile">View Profile</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;