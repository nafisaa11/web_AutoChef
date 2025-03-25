import React from "react";
import "./HeroSection.css";
import phoneImage from "../assets/phone.png"; // Sesuaikan path

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="highlight">Auto</span>Chef
        </h1>
        <p className="hero-subtitle">
          Masak lebih mudah dan efisien! Temukan resep terbaik sesuai bahan yang
          Anda miliki dan ciptakan hidangan lezat dengan AutoChef.
        </p>
      </div>
      <div className="hero-image">
        <img src={phoneImage} alt="Mobile App" className="phone" />
      </div>
    </section>
  );
};

export default HeroSection;
