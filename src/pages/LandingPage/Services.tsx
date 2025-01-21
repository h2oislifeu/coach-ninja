// coach-ninja\src\pages\LandingPage\Services.tsx
import React, { useState, useEffect } from 'react';

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  // Simulating an API call to fetch services
  useEffect(() => {
    const fetchedServices = [
      {
        title: "Business Coaching",
        description: "Scale your business, improve leadership, and optimize team performance.",
        price: "From $99/session",
        imageUrl: "/api/placeholder/400/250",
      },
      {
        title: "Life Coaching",
        description: "Find purpose, build confidence, and create meaningful change in your life.",
        price: "From $99/session",
        imageUrl: "/api/placeholder/400/250",
      },
      {
        title: "Career Coaching",
        description: "Navigate career transitions, develop leadership skills, and achieve professional growth.",
        price: "From $99/session",
        imageUrl: "/api/placeholder/400/250",
      },
      {
        title: "Financial Coaching",
        description: "Achieve your financial goals by providing strategies for managing your money effectively.",
        price: "From $99/session",
        imageUrl: "/api/placeholder/400/250",
      },
      {
        title: "Relationship Coaching",
        description: "Provide guidance and strategies to navigate your relationships with confidence and clarity.",
        price: "From $99/session",
        imageUrl: "/api/placeholder/400/250",
      },
      {
        title: "Leadership Coaching",
        description: "Unlock full potential as a leader by providing personalized guidance and drive meaningful results.",
        price: "From $99/session",
        imageUrl: "/api/placeholder/400/250",
      },
    ];

    setServices(fetchedServices);
  }, []); 

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header">
          <h2>Our Coaching Services</h2>
          <p>Tailored solutions to help you achieve your goals</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img 
                src={service.imageUrl} 
                alt={service.title}
                className="service-image"
              />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <p className="service-price">{service.price}</p>
                <button className="learn-more-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all">
          <button className="view-all-btn">View All Services →</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
