// coach-ninja\src\components\landing-page\CoachCard.tsx
import React from "react";
import PropTypes from "prop-types";

const CoachCard = ({ name, title, description, imageUrl }) => {
  return (
    <div className="coach-card">
      <img
        src={imageUrl || "https://static.wixstatic.com/media/29facd_d933761545d64e5faa46ed4918972f16~mv2.png/v1/fill/w_120,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/moji-love.png"}
        alt={`${name || "Coach"}'s profile`}
      />
      
      <div className="card-info">
        <h3>{name}</h3>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <button className="booknow">Book Now</button>
      </div>
    </div>
  );
};

CoachCard.defaultProps = {
  name: "Coach Moji",
  title: "Expert Coach",
  description: "No description available.",
  imageUrl: "https://static.wixstatic.com/media/29facd_d933761545d64e5faa46ed4918972f16~mv2.png/v1/fill/w_120,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/moji-love.png",
};

CoachCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default CoachCard;
