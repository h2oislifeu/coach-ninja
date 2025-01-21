// coach-ninja\src\pages\LandingPage\Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="branding">
          <h3>Coach.Ninja</h3>
          <p>Transform your life with expert coaching guidance.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Find a Coach</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="social-media">
          <h4>Connect With Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Coach.Ninja. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;