import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import dataMakananDefault from "../data/dataMakanan";

function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const [data, setData] = useState(null);

  const [komentar, setKomentar] = useState("");
  const [nama, setNama] = useState("");
  const [rating, setRating] = useState(0);
  const [listKomentar, setListKomentar] = useState([]);

  // AMBIL DATA
  useEffect(() => {
    const saved = localStorage.getItem("makanan");
    let semuaData = [];

    if (saved) {
      const dataAdmin = JSON.parse(saved);
      semuaData = [...dataMakananDefault, ...dataAdmin];
    } else {
      semuaData = dataMakananDefault;
    }

    // HAPUS DUPLIKAT
    const dataUnik = semuaData.filter(
      (item, index, self) =>
        index === self.findIndex((i) => String(i.id) === String(item.id))
    );

    const hasil = dataUnik.find(
      (item) => String(item.id) === String(id)
    );

    setData(hasil);

    const savedKomentar = localStorage.getItem(`komentar-${id}`);
    if (savedKomentar) {
      setListKomentar(JSON.parse(savedKomentar));
    } else if (hasil?.komentar) {
      setListKomentar(hasil.komentar);
    }
  }, [id]);

  // DATA TIDAK ADA
  if (!data) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "40px" }}>
          <h2>Data tidak ditemukan</h2>
          <button onClick={() => navigate("/katalog")}>
            Kembali ke Katalog
          </button>
        </div>
        <Footer />
      </>
    );
  }

  // KIRIM KOMENTAR
  const handleKirim = () => {
    if (!nama || !komentar || rating === 0) return;

    const komentarBaru = {
      nama,
      isi: komentar,
      rating
    };

    const updateKomentar = [...listKomentar, komentarBaru];
    setListKomentar(updateKomentar);
    localStorage.setItem(
      `komentar-${id}`,
      JSON.stringify(updateKomentar)
    );

    setNama("");
    setKomentar("");
    setRating(0);
  };

  return (
    <>
      <Navbar />

      <div className="detail-container">

        {/* BACK */}
        <p
          className="back"
          onClick={() => navigate("/katalog")} 
        >
          ← Kembali ke Katalog
        </p>

        {/* JUDUL */}
        <h2>{data.nama}</h2>

        <div className="detail-layout">

          {/* KIRI */}
          <div className="left">
            <img
              src={data.gambar || "https://via.placeholder.com/200"}
              alt={data.nama}
              style={{ width: "100%", borderRadius: "10px" }}
            />

            <div className="box">
              <h3>Bahan</h3>
              <ul>
                {(data.bahan || []).map((item, index) => {
                  
                  if (typeof item === "string") {
                    return <li key={index}>{item}</li>
                  }
                  
                  return (
                    <li key={index}>
                      <b>{item.judul}</b>
                      <ul>
                        {item.langkah.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* KANAN */}
          <div className="right">

            <div className="box info">
              <p><b>Jenis:</b> {data.jenis}</p>
              <p><b>Rasa:</b> {data.rasa}</p>
              <p><b>Harga:</b> <span className="harga">Rp {data.harga}</span></p>
            </div>

            <div className="box">
              <h3>Deskripsi</h3>
              <p>
                {Array.isArray(data.deskripsi)
                  ? data.deskripsi.join(" ")
                  : data.deskripsi || "Belum ada deskripsi"}
              </p>
            </div>

            <div className="box">
              <h3>Cara Membuat</h3>

              <ol>
                {(data.cara || []).map((item, index) => {

                  if (typeof item === "string") {
                    return <li key={index}>{item}</li>;
                  }

                  return (
                    <li key={index}>
                      <b>{item.judul}</b>

                      {item.langkah && (
                        <ul>
                          {item.langkah.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ol>

            </div>

          </div>

        </div>

        {/* KOMENTAR */}
        <div className="komentar">
          <h3>Komentar</h3>

          {listKomentar.map((item, index) => (
            <div className="card-komentar" key={index}>
              <b>{item.nama}</b>
              <p>{"⭐".repeat(item.rating)}</p>
              <p>{item.isi}</p>
            </div>
          ))}

          <div className="input-komentar">

            <input
              type="text"
              placeholder="Nama kamu..."
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />

            <textarea
              placeholder="Tulis komentar..."
              value={komentar}
              onChange={(e) => setKomentar(e.target.value)}
            />

            <div className="rating">
              {[1,2,3,4,5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  className={rating >= star ? "active" : ""}
                >
                  ★
                </span>
              ))}
            </div>

            <button onClick={handleKirim}>Kirim</button>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Detail;