// coach-ninja\src\pages\LandingPage\About.tsx
import React from "react";

const AboutSection = () => {
  return (
    <section id="about-us" className="about-section">
      <div className="about-container">
      <div className="about-content">
        <h2>About Our Platform</h2>
        <p>
          We’re on a mission to make professional coaching accessible to everyone. Our platform connects you with certified coaches who can help you achieve your personal and professional goals.
        </p>
        <ul>
          <li>Verified professional coaches</li>
          <li>Flexible scheduling options</li>
          <li>Secure video conferencing</li>
          <li>Money-back guarantee</li>
        </ul>
        <button className="learn-more">Learn More</button>
      </div>
      <div className="about-image">
        <img src="https://via.placeholder.com/500x300" alt="Coaching session" />
      </div>
      </div>
    </section>
  );
};

export default AboutSection;