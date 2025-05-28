import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { List } from "lucide-react";
import MobileMenu from "./MobileMenu"; // Import komponen mobile menu
import "./MobileMenu.css"; // Import styles mobile menu
import "./Header.css"; // Import header styles yang sudah di-update
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Fungsi smooth scroll untuk desktop
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
  };

  return (
    <>
      <header className="header">
        <div className="container">
          {/* LOGO */}
          <div className="logo-container">
            <img src={logo} alt="AutoChef Logo" className="logo-img" />
            <h1 className="logo-text">AutoChef</h1>
          </div>
          
          {/* HAMBURGER BUTTON - hanya untuk trigger mobile menu */}
          <button 
            className="hamburger" 
            onClick={toggleMobileMenu} 
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <List size={28} color="#ff6243" />
          </button>
          
          {/* NAVIGATION DESKTOP - hidden di mobile */}
          <nav className="nav-links-desktop" aria-label="Main Navigation">
            <ul>
              <li><a href="#HeroSection" onClick={(e) => smoothScroll(e, 'home')}>Home</a></li>
              <li><a href="#Features" onClick={(e) => smoothScroll(e, 'Features')}>Features</a></li>
              <li><a href="#Download" onClick={(e) => smoothScroll(e, 'Download')}>Download</a></li>
              {/* <li>
                <button
                  onClick={() => navigate("/input")}
                  className="try-button"
                >
                  Try It Now
                </button>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>

      {/* MOBILE MENU FULLSCREEN COMPONENT */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={closeMobileMenu} 
      />
    </>
  );
};

export default Header;