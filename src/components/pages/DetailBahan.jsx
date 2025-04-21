import React from "react";
import { useParams } from "react-router-dom";
import "./DetailBahan.css"; // Import CSS file

const resepList = [
  {
    id: 1,
    gambar: "https://img-global.cpcdn.com/recipes/3b260f5b94c1be6d/680x482cq70/ayam-woku-manado-foto-resep-utama.webp",
    judul: "Ayam Woku Manado",
    bahan: `
• 1 Ekor Ayam Kampung (potong 12)
• 2 Buah Jeruk Nipis
• 2 Sdm Garam
• 3 Ruas Kunyit
• 7 Bawang Merah
• 7 Bawang Putih
• 10 Cabe Merah
• 10 Cabe Rawit Merah (sesuai selera)
• 3 Butir Kemiri
• 2 Batang Sereh
• 2 Lembar Daun Salam
• 2 Ikat Daun Kemangi
• Penyedap Rasa
    `,
  },
  {
    id: 2,
    gambar: "https://img-global.cpcdn.com/recipes/4a3f09e8dd2ef7b0/680x482cq70/ayam-goreng-tulang-lunak-foto-resep-utama.webp",
    judul: "Ayam Goreng Tulang Lunak",
    bahan: `
• 1 kg Ayam (potong sesuai selera)
• 5 Siung Bawang Putih
• 3 cm Kunyit
• 1 sdt Ketumbar
• 1 sdm Garam
• Air secukupnya
• Minyak goreng secukupnya
    `,
  },
  // Tambahkan resep lainnya sesuai kebutuhan
];

function DetailBahan() {
  const { id } = useParams();
  const resep = resepList.find((item) => item.id === parseInt(id));

  if (!resep) {
    return <div className="not-found">Resep tidak ditemukan.</div>;
  }

  return (
    <div className="detail-container">
      <h1 className="detail-title">{resep.judul}</h1>
      <img
        src={resep.gambar}
        alt={resep.judul}
        className="detail-image"
      />
      <pre className="detail-bahan">{resep.bahan}</pre>
    </div>
  );
}

export default DetailBahan;
