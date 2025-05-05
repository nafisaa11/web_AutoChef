import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Fungsi smooth scroll yang sangat sederhana
  const smoothScroll = (e, sectionId) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    setMenuOpen(false);
  };

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
            <li><a href="/" onClick={(e) => smoothScroll(e, 'home')}>Home</a></li>
            <li><a href="#Features" onClick={(e) => smoothScroll(e, 'Features')}>Features</a></li>
            <li><a href="#Download" onClick={(e) => smoothScroll(e, 'Download')}>Download</a></li>
            <li>
              <button
                onClick={() => navigate("/input")}
                className="try-button"
                style={{ display: "none" }}
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