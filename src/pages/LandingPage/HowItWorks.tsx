// coach-ninja\src\pages\LandingPage\HowItWorks.tsx
import React from "react";

const HowItWorksSection = () => {
  const steps = [
    { step: "1. Choose Your Coach", description: "Browse profiles and find the perfect coach for your needs." },
    { step: "2. Select a Service", description: "Pick from various coaching packages and services." },
    { step: "3. Schedule Session", description: "Choose a convenient time that works for you." },
    { step: "4. Confirm & Pay", description: "Secure payment and instant confirmation." },
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
      <h2>How It Works</h2>
      <p>Start your coaching journey in four simple steps</p>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <h3>{step.step}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;