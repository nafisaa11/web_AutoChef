import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="AutoChef Logo" className="logo-img" />
          <h1 className="logo-text">AutoChef</h1>
        </div>
        
        <button 
          className={`hamburger ${menuOpen ? "active" : ""}`} 
          onClick={toggleMenu} 
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`nav-links ${menuOpen ? "show" : ""}`} aria-label="Main Navigation">
          <ul>
            <li>
              <a href="/" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#features" onClick={closeMenu}>Features</a>
            </li>
            <li>
              <a href="#download" onClick={closeMenu}>Download</a>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/input");
                  closeMenu();
                }}
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