import React from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const MobileMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  // Fungsi smooth scroll
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
    onClose(); // Tutup menu setelah klik
  };

  const handleTryNow = () => {
    navigate("/input");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay">
      <div className="mobile-menu-content">
        {/* Header Menu dengan Logo dan Close Button */}
        <div className="mobile-menu-header">
          <div className="mobile-menu-logo">
            <img src={logo} alt="AutoChef Logo" className="mobile-logo-img" />
            <h2 className="mobile-logo-text">AutoChef</h2>
          </div>
          <button 
            className="mobile-close-button" 
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={28} color="#2c3e50" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <a 
                href="#HeroSection" 
                onClick={(e) => smoothScroll(e, 'home')}
                className="mobile-nav-link"
              >
                Home
              </a>
            </li>
            <li className="mobile-nav-item">
              <a 
                href="#Features" 
                onClick={(e) => smoothScroll(e, 'Features')}
                className="mobile-nav-link"
              >
                Features
              </a>
            </li>
            <li className="mobile-nav-item">
              <a 
                href="#Download" 
                onClick={(e) => smoothScroll(e, 'Download')}
                className="mobile-nav-link"
              >
                Download
              </a>
            </li>
          </ul>

          {/* Try It Now Button */}
          {/* <div className="mobile-cta-section">
            <button 
              onClick={handleTryNow}
              className="mobile-try-button"
            >
              Try It Now
            </button>
          </div> */}
        </nav>

        {/* Footer Section (Optional) */}
        <div className="mobile-menu-footer">
          <p className="mobile-footer-text">
            Discover amazing recipes with AutoChef
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;