import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="AutoChef Logo" className="logo-img" />
          <h1 className="logo-text">AutoChef</h1>
        </div>
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="#Features">Features</a></li>
            <li><a href="#Download">Download</a></li>
            <li>
              <button
                onClick={() => navigate("/input")}
                style={{
                  background: "none",
                  border: "none",
                  color: "inherit",
                  font: "inherit",
                  cursor: "pointer",
                  padding: 0
                }}
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