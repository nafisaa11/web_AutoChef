import React from "react";
import "../index.css"; // Import CSS
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="AutoChef Logo" className="logo-img" />
          <h1 className="logo-text">AutoChef</h1>
        </div>
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li><a href="">Home</a></li>
            <li><a href="#Features">Features</a></li>
            <li><a>Download</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
