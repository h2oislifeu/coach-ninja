import React from "react";
import Navbar from "../../components/Registration/Navbar";
import RegistrationFlow from "./RegistrationFlow";
import "../../styles/RegistrationFlow.css";
const RegistrationPage = () => {
  return (
    <div>
        <Navbar />
        <div className=""><RegistrationFlow /></div>
    </div>
  );
};

export default RegistrationPage;
