import React, { useState } from 'react';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const removeActive = () => {
    setMenuActive(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-coach">coach.</span>
        <span className="logo-ninja">ninja</span>
      </div>
        <div className="user-avatar"></div>
 
    </nav>
  );
};

export default Navbar;

