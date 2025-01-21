// coach-ninja\src\pages\LandingPage\index.tsx
import React from "react";
import Navbar from "../../components/LandingPage/Navbar";
import HeroSection from "./Hero";
import CoachesSection from "./Coaches";
import Services from "./Services";
import HowItWorks from "./HowItWorks";
import About from "./About";
import Footer from "./Footer";
import "../../styles/LandingPage.css";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CoachesSection />
      <Services />
      <HowItWorks />
      <About />
      <Footer />
    </div>
  );
};

export default LandingPage;
