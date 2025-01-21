// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegistrationPage from "./pages/Registration";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        {/* <Route path="/preview" element={<CoachPreview />} /> */}
      </Routes>
    </Router>
  );
};

export default App;