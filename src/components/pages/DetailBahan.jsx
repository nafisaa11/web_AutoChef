import React from "react";
import { useParams, useLocation } from "react-router-dom";
import "./DetailBahan.css";

function DetailBahan() {
  const { id } = useParams();
  const location = useLocation();
  const resep = location.state?.resep;

  if (!resep) {
    return <div className="not-found">Resep tidak ditemukan.</div>;
  }

  return (
    <div className="detail-container">
      <h1 className="detail-title">{resep.nama_resep || resep.judul}</h1>
      <img
        src={resep.gambar}
        alt={resep.nama_resep || resep.judul}
        className="detail-image"
      />

      <div className="detail-section">
        <h2 className="section-heading">Bahan-Bahan</h2>
        <pre className="detail-bahan">{resep.bahan}</pre>
      </div>

      {resep.steps && (
        <div className="detail-section">
          <h2 className="section-heading">Langkah-Langkah</h2>
          <pre className="detail-steps">{resep.steps}</pre>
        </div>
      )}
    </div>
  );
}

export default DetailBahan;
