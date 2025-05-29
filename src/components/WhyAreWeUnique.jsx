import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faHeart, faClock } from "@fortawesome/free-solid-svg-icons";
import "./WhyAreWeUnique.css";

// Import gambar
import googlePlay from "../assets/google-play.png";
import phoneMockup from "../assets/phone-mockup.png";

const WhyAreWeUnique = () => {
  return (
    <section id="Download" className="unique-section">
      {/* Header */}
      <div className="section-header">
        <h2 className="section-title">Kenapa Memilih AutoChef?</h2>
        <p className="section-subtitle">
          Rasakan pengalaman memasak yang lebih mudah dengan rekomendasi resep otomatis, tambah favorite, dan fitur memasak pintar.
        </p>
      </div>

      {/* Unique Features */}
      <div className="unique-features">
        <div className="feature">
          <FontAwesomeIcon icon={faUtensils} className="icon" />
          <h3>Rekomendasi Resep Otomatis</h3>
          <p>Temukan resep terbaik berdasarkan bahan yang Anda miliki dan preferensi rasa Anda.</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faHeart} className="icon" />
          <h3>Tambahkan ke Favorit</h3>
          <p>Simpan resep favorit Anda agar mudah ditemukan dan dimasak kembali kapan saja.</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faClock} className="icon" />
          <h3>Fitur Memasak Pintar</h3>
          <p>Dapatkan panduan langkah demi langkah, timer otomatis, dan tips memasak dari chef profesional.</p>
        </div>
      </div>

      {/* Download Section */}
      <div className="promo-section">
        <div className="promo-text">
          <h2>Memasak Jadi Lebih Mudah & Praktis</h2>
          <p>Jutaan pengguna sudah menikmati pengalaman memasak yang lebih cerdas dengan AutoChef.</p>
          <div className="app-download">
            <a href="https://play.google.com/store/apps/details?id=com.autochef.app" target="_blank" rel="noopener noreferrer">
              <img src={googlePlay} alt="Google Play" className="store-button" />
            </a>
          </div>
        </div>

        <div className="promo-image">
          <img src={phoneMockup} alt="App Preview" className="phone-mockup" />
        </div>
      </div>
    </section>
  );
};

export default WhyAreWeUnique;