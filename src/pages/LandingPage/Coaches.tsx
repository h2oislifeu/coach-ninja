// coach-ninja\src\pages\LandingPage\Coaches.tsx
import React, { useState, useEffect, TouchEvent } from 'react';
import CoachCard from '../../components/LandingPage/CoachCard';

interface Coach {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  verified: boolean;
}

const CoachesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [coaches, setCoaches] = useState<Coach[]>([]);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchedCoaches = [
      { name: "Carol Morgan", title: "Certified Life Coach", description: "Specializing in career transitions and professional growth with 20+ years of experience", imageUrl: "https://static.wixstatic.com/media/29facd_d933761545d64e5faa46ed4918972f16~mv2.png/v1/fill/w_120,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/moji-love.png", verified: true },
      { name: "Sarah Johnson", title: "Leadership Coach", description: "Empowering leaders to reach their full potential and build high-performing teams.", imageUrl: "https://static.wixstatic.com/media/29facd_d933761545d64e5faa46ed4918972f16~mv2.png/v1/fill/w_120,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/moji-love.png", verified: true },
      { name: "Emman Davis", title: "Life & Wellness Coach", description: "Helping individuals achieve balance and fulfillment in their personal and professional lives", imageUrl: "https://static.wixstatic.com/media/29facd_d933761545d64e5faa46ed4918972f16~mv2.png/v1/fill/w_120,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/moji-love.png", verified: true },
      { name: "Evelyn Ha", title: "Life & Wellness Coach", description: "Helping individuals achieve balance in life.", imageUrl: "https://static.wixstatic.com/media/29facd_d933761545d64e5faa46ed4918972f16~mv2.png/v1/fill/w_120,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/moji-love.png", verified: true },
      { name: "Reinee Ho", title: "Life & Wellness Coach", description: "Helping individuals achieve balance in life.", imageUrl: "https://static.wixstatic.com/media/29facd_d933761545d64e5faa46ed4918972f16~mv2.png/v1/fill/w_120,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/moji-love.png", verified: true },
      { name: "Caitlyn Ha", title: "Life & Wellness Coach", description: "Helping individuals achieve balance in life.", imageUrl: "https://static.wixstatic.com/media/29facd_d933761545d64e5faa46ed4918972f16~mv2.png/v1/fill/w_120,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/moji-love.png", verified: true },
      // { name: "Peer Ho", title: "Life & Wellness Coach", description: "Helping individuals achieve balance in life.", imageUrl: "https://static.wixstatic.com/media/29facd_d933761545d64e5faa46ed4918972f16~mv2.png/v1/fill/w_120,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/moji-love.png", verified: true },
    ];

    setCoaches(fetchedCoaches);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      nextSlide();
    } else {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const nextSlide = () => {
    setCurrentIndex(prev => {
      const increment = isMobile ? 1 : 3;
      const next = prev + increment;
      return next >= coaches.length ? 0 : next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(prev => {
      const decrement = isMobile ? 1 : 3;
      const next = prev - decrement;
      return next < 0 ? Math.max(0, coaches.length - decrement) : next;
    });
  };

  const getVisibleCoaches = () => {
    const visibleCount = isMobile ? 1 : 3;
    let visibleCoaches = [...coaches.slice(currentIndex)];
    
    if (visibleCoaches.length < visibleCount) {
      visibleCoaches = [...visibleCoaches, ...coaches.slice(0, visibleCount - visibleCoaches.length)];
    }

    return visibleCoaches.slice(0, visibleCount);
  };

  const getPaginationDots = () => {
    if (isMobile) {
      return coaches.map((_, index) => ({
        index,
        isActive: index === currentIndex
      }));
    } else {
      const totalGroups = Math.ceil(coaches.length / 3);
      const currentGroup = Math.floor(currentIndex / 3);
      
      return Array.from({ length: totalGroups }, (_, index) => ({
        index: index * 3,
        isActive: currentGroup === index
      }));
    }
  };

  const shouldDisableNavigation = coaches.length <= (isMobile ? 1 : 3);

  return (
    <section id="find-coaches" className="coaches-section">
      <div className="section-header">
        <h2>Meet Our Expert Coaches</h2>
        <p>Find the perfect coach to guide you on your journey</p>
      </div>

      <div className="carousel-container">
        <div className="carousel-content">
          <button 
            onClick={prevSlide} 
            className={`nav-button prev ${shouldDisableNavigation ? 'disabled' : ''}`}
            aria-label="Previous slide"
            disabled={shouldDisableNavigation}
          >
            ←
          </button>

          <div 
            className="cards-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {getVisibleCoaches().map((coach, index) => (
              <div 
                key={`${coach.name}-${index}`} 
                className="card-wrapper"
                style={{
                  flex: isMobile ? '0 0 100%' : '1'
                }}
              >
                {coach.verified && (
                  <div className="verified-badge" />
                )}
                <CoachCard {...coach} />
              </div>
            ))}
          </div>

          <button 
            onClick={nextSlide} 
            className={`nav-button next ${shouldDisableNavigation ? 'disabled' : ''}`}
            aria-label="Next slide"
            disabled={shouldDisableNavigation}
          >
            →
          </button>
        </div>
      </div>

      <div className="pagination">
        {getPaginationDots().map(({ index, isActive }) => (
          <button
            key={index}
            className={`pagination-dot ${isActive ? 'active' : ''} ${shouldDisableNavigation ? 'disabled' : ''}`}
            onClick={() => setCurrentIndex(index)}
            disabled={shouldDisableNavigation}
            aria-label={`Go to slide group ${Math.floor(index / 3) + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CoachesSection;