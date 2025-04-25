import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./InputBahan.css";
import { Trash2, Plus } from "lucide-react";

const InputBahan = () => {
  const [bahanList, setBahanList] = useState([""]);
  const navigate = useNavigate();

  const handleInputChange = (index, value) => {
    const newList = [...bahanList];
    newList[index] = value;
    setBahanList(newList);
  };

  const handleTambah = () => {
    setBahanList([...bahanList, ""]);
  };

  const handleHapus = (index) => {
    const newList = bahanList.filter((_, i) => i !== index);
    setBahanList(newList);
  };

  const handleCariResep = async () => {
    const query = bahanList.filter(Boolean).join(",");
    try {
      const response = await axios.get(
        `http://156.67.214.60/api/resepmakanan?bahan=${encodeURIComponent(query)}`
      );
      const dataResep = response.data.data;
      navigate("/rekomendasi", { state: { hasil: dataResep } });
    } catch (error) {
      console.error("Gagal mengambil data resep:", error);
    }
  };

  return (
    <div className="inputbahan-container">
      <div className="inputbahan-card">
        <div className="inputbahan-card-header">
          <h3>Bahan apa yang kamu miliki?</h3>
          <button className="inputbahan-plus-btn" onClick={handleTambah}>
            <Plus size={20} />
          </button>
        </div>
        <p className="inputbahan-card-subtext">Tuliskan bahan-bahanmu</p>

        {bahanList.map((item, index) => (
          <div key={index} className="inputbahan-item">
            <span className="inputbahan-index">{index + 1}.</span>
            <input
              type="text"
              value={item}
              placeholder="Masukkan Bahan Makanan"
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
            <button
              className="inputbahan-delete-btn"
              onClick={() => handleHapus(index)}
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <button className="inputbahan-search-btn" onClick={handleCariResep}>
        Cari
      </button>
    </div>
  );
};

export default InputBahan;
