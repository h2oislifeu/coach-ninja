import React, { useState } from 'react';
import "../../styles/RegistrationFlow.css";
import CoachProfile from './CustomProfile';

const RegistrationFlow = () => {
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(1); 
  const [selectedCoaching, setSelectedCoaching] = useState('');

  const coachingOptions = [
    { id: 'life', label: 'Life/Productivity', icon: '📋' },
    { id: 'business', label: 'Business/Executive', icon: '🏢' },
    { id: 'fitness', label: 'Fitness/Wellness', icon: '❤️' },
    { id: 'love', label: 'Love/Relationship', icon: '💑' },
    { id: 'finance', label: 'Finance', icon: '📈' },
    { id: 'education', label: 'Education', icon: '📚' }
  ];

  console.log('Current step:', step, 'Current sub-step:', subStep);

  return (
    <div className="registration-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
          <div className="step-circle">1</div>
          <span>Registration</span>
        </div>
        <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
          <div className="step-circle">2</div>
          <span>Profile Customization</span>
        </div>
        <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
          <div className="step-circle">3</div>
          <span>Calendar Integration</span>
        </div>
      </div>

      {/* Step 1: LinkedIn Sign In */}
      {step === 1 && (
        <div className="linkedin-auth">
          <button
            className="linkedin-button"
            onClick={() => setStep(2)} // Testing
          >
            Signed in with LinkedIn
          </button>
        </div>
      )}

      {/* Step 2: Coaching Selection & Profile Completion */}
      {step === 2 && (
        <div className="coaching-selection">
          {subStep === 1 && (
            <>
              <h2>Which area of coaching?</h2>
              <p className="subtitle">
                Choose the one that closest to your role, we will use this
                to personalize your experience.
              </p>
              <div className="coaching-grid">
                {coachingOptions.map((option) => (
                  <button
                    key={option.id}
                    className={`coaching-option ${selectedCoaching === option.id ? 'selected' : ''}`}
                    onClick={() => setSelectedCoaching(option.id)}
                  >
                    <span className="option-icon">{option.icon}</span>
                    <span className="option-label">{option.label}</span>
                  </button>
                ))}
              </div>
              <div className="button-group">
                <button className="back-button" onClick={() => setStep(1)}>
                  Back
                </button>
                <button
                  className="continue-button"
                  onClick={() => setSubStep(2)}
                  disabled={!selectedCoaching}
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {subStep === 2 && (
            <>
              <CoachProfile />
              <div className="button-group">
                <button className="back-button" onClick={() => setSubStep(1)}>
                  Back
                </button>
                <button
                  className="continue-button"
                  onClick={() => setStep(3)} // Move to Step 3
                >
                  Continue
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Step 3: Calendar Integration */}
      {step === 3 && (
        <div className="profile-custom">
          <p>This step is under construction</p>
          <button className="back-button" onClick={() => setStep(2)}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default RegistrationFlow;
