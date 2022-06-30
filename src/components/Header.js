import React, { useEffect } from "react";
import "../styles/Header.css";
const Header = () => {
  return (
    <header className="header_container">
      <div className="header_text">
        <h1>RJ</h1>
        <span>Portfolio</span>
      </div>
      <h2 className="header_left_text">Road for Junior</h2>
    </header>
  );
};

export default Header;
