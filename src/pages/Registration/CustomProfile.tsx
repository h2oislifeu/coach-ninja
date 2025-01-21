// CoachProfile.jsx
import React from 'react';
import "../../styles/RegistrationFlow.css";
import Calendar from './Calendar';

const defaultCoachData = {
  name: "Dr. Carol Morgan",
  title: "Certified Life Coach",
  bio: "ICF/BCC Accredited Life Coach dedicated to helping you discover your potential and achieve your goals.",
  availability: "Not currently available 24 Hours",
  certifications: [
    {
      id: 1,
      title: "Top Life Coach by the National Coaching Association",
      icon: "🏆"
    },
    {
      id: 2,
      title: "Ranked over 1000 hours toward furthering their education",
      icon: "📚"
    },
    {
      id: 3,
      title: "Member of the International Coaching Federation (ICF)",
      icon: "🎓"
    },
    {
      id: 4,
      title: "English, Spanish",
      icon: "🌐"
    }
  ],
  practiceAreas: ["Career", "Relationship", "Leadership Development"],
  skills: ["Self-Awareness", "Time Management", "Adaptability", "Leadership Management"]
};

const CoachProfile = ({ data = defaultCoachData }) => {
  return (
    <div className="profile-container">
    <div className="coach-bio">
      <div className="profile-main">
        <div className="profile-image">
          <img src="/placeholder-coach.jpg" alt="Coach" />
        </div>
        <div className="profile-info">
          <h3 className="profile-name">{data.name}</h3>
          <p className="profile-bio">{data.bio}</p>
          <div className="profile-actions">
            <button className="message-button">Send a Message</button>
            <span className="availability">{data.availability}</span>
          </div>
        </div>
      </div>
    <div className="coach-details">
        <div className="certifications">
            {data.certifications.map(cert => (
            <div key={cert.id} className="certification-item">
                <span className="certification-icon">{cert.icon}</span>
                <span className="certification-title">{cert.title}</span>
            </div>
            ))}
        </div>

        <div className="practice-areas">
            <h3>Practice Areas</h3>
            <div className="tags">
            {data.practiceAreas.map(area => (
                <span key={area} className="tag">{area}</span>
            ))}
            </div>
        </div>

        <div className="skills">
            <h3>Skills</h3>
            <div className="tags">
            {data.skills.map(skill => (
                <span key={skill} className="tag">{skill}</span>
            ))}
            </div>
        </div>

        <div className="social-links">
            <a href="#" className="social-link">
            <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-link">
            <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
            <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link">
            <i className="fab fa-linkedin"></i>
            </a>
        </div>

      </div>
      </div>
    <div className="Other">
    <h2 className="profile-title">
            {data.title}
            <button className="share-button">↗</button>
    </h2>

    <div className="profile-tabs">
        <button className="tab-button active">Availability</button>
        <button className="tab-button">Services</button>
        <button className="tab-button">Experiences</button>
        <button className="tab-button">Recommendations</button>
    </div>

    <div className="coach-calendar"><Calendar/></div>
       </div> 
    </div>
  );
};

export default CoachProfile;