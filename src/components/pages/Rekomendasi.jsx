import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Rekomendasi.css";

const RekomendasiResep = () => {
  const location = useLocation();
  const hasil = location.state?.hasil || [];
  const navigate = useNavigate();

  // State untuk pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // untuk menghitung total halaman
  const totalPages = Math.ceil(hasil.length / itemsPerPage);

  // untuk menentukan data resep yang ditampilkan
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = hasil.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (resep) => {
    navigate(`/detail/${resep.id}`, { state: { resep } });
  };

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  return (
    <div className="rekomendasi-container">
      <h3 className="judul-section">Rekomendasi</h3>

      <div className="resep-list">
        {currentItems.length === 0 ? (
          <p className="no-data">Tidak ada resep ditemukan.</p>
        ) : (
          currentItems.map((resep) => (
            <div
              className="rekomendasi-card"
              key={resep.id}
              onClick={() => handleClick(resep)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={resep.gambar}
                alt={resep.nama_resep}
                className="rekomendasi-thumbnail"
              />
              <div className="rekomendasi-detail">
                <h4>{resep.nama_resep}</h4>
                <p>{truncateText(resep.bahan, 50)}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* kode untuk paginationnya */}
      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              className={`pagination-btn ${
                currentPage === number ? "active" : ""
              }`}
              onClick={() => goToPage(number)}
            >
              {number}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RekomendasiResep;
