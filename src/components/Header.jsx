import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="AutoChef Logo" className="logo-img" />
          <h1 className="logo-text">AutoChef</h1>
        </div>

        <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? "show" : ""}`} aria-label="Main Navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#Features">Features</a></li>
            <li><a href="#Download">Download</a></li>
            <li>
              <button
                onClick={() => navigate("/input")}
                className="try-button"
              >
                Try It Now
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
