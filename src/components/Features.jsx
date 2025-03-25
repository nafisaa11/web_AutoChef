import React from "react";
import "./Features.css";
import mockupImage from "../assets/features.png";

const featuresLeft = [
  { title: "Mencari dan Menyimpan Mudah", desc: "Mencari resep lebih mudah dengan fitur favorite" },
  { title: "Rekomendasi Cerdas", desc: "Dapatkan rekomendasi resep berdasarkan bahan yang Anda miliki dan preferensi rasa." },
  { title: "Rekomendasi Sesuai Preferensi", desc: "Algoritma rekomandasi berdasarkan favorite dan preferensimu" }
];

const featuresRight = [
  { title: "List Bahan Lengkap", desc: "Memberikan list bahan untuk membuat makanan sesuai resep" },
  { title: "Panduan Memasak Langkah Demi Langkah", desc: "Ikuti instruksi memasak yang jelas dan terperinci untuk hasil terbaik." },
  { title: "Informasi Nutrisi", desc: "Memberikan informasi mengenai informasi nutrisi makanan" }
];

const Features = () => {
  return (
    <section id="Features" className="features-section">
      <h2 className="features-heading">Kenapa Harus AutoChef?</h2>

      <div className="features-container">
        {/* List Fitur Kiri */}
        <div className="features-list">
          {featuresLeft.map((feature, index) => (
            <div className="feature-item" key={index}>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Gambar Mockup */}
        <div className="features-image">
          <img src={mockupImage} alt="Mockup" />
        </div>

        {/* List Fitur Kanan */}
        <div className="features-list">
          {featuresRight.map((feature, index) => (
            <div className="feature-item" key={index}>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
