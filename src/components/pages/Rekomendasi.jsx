import React from "react";
import "./Rekomendasi.css";

const resepList = [
  {
    id: 1,
    gambar: "https://img-global.cpcdn.com/recipes/3b260f5b94c1be6d/680x482cq70/ayam-woku-manado-foto-resep-utama.webp",
    judul: "Ayam Woku Manado",
    bahan: "1 Ekor Ayam Kampung (potong sesuai selera)...",
  },
  {
    id: 2,
    gambar: "https://img-global.cpcdn.com/recipes/4a3f09e8dd2ef7b0/680x482cq70/ayam-goreng-tulang-lunak-foto-resep-utama.webp",
    judul: "Ayam goreng tulang lunak",
    bahan: "1 kg ayam (dipotong sesuai selera)...",
  },
  {
    id: 3,
    gambar: "https://img-global.cpcdn.com/recipes/961f482b70c6944d/680x482cq70/ayam-cabai-foto-resep-utama.webp",
    judul: "Ayam cabai",
    bahan: "1/4 kg ayam, 3 buah cabai merah...",
  },
  {
    id: 4,
    gambar: "https://img-global.cpcdn.com/recipes/4aa9c960f233325a/680x482cq70/ayam-geprek-foto-resep-utama.webp",
    judul: "Ayam Geprek",
    bahan: "250 gr daging ayam (saya pakai dada)...",
  },
  {
    id: 5,
    gambar: "https://img-global.cpcdn.com/recipes/71f36167c652bfe4/680x482cq70/minyak-ayam-foto-resep-utama.webp",
    judul: "Minyak Ayam",
    bahan: "Kulit ayam, bawang putih, dan minyak goreng...",
  },
];

const RekomendasiResep = () => {
  return (
    <div className="rekomendasi-container">
      <h3 className="judul-section">Rekomendasi</h3>

      <div className="resep-list">
        {resepList.map((resep) => (
          <div className="rekomendasi-card" key={resep.id}>
            <img src={resep.gambar} alt={resep.judul} className="rekomendasi-thumbnail" />
            <div className="rekomendasi-detail">
              <h4>{resep.judul}</h4>
              <p>{resep.bahan}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RekomendasiResep;
