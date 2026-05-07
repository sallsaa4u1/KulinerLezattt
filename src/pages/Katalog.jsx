import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import dataMakananDefault from "../data/dataMakanan";

function Katalog() {
  const navigate = useNavigate();

  const [dataMakanan, setDataMakanan] = useState([]);
  const [filter, setFilter] = useState({
    jenis: [],
    rasa: [],
    harga: []
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedScroll = sessionStorage.getItem("scrollPosition");

    if (savedScroll) {
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedScroll),
          behavior: "auto"
        });
      }, 100);

      sessionStorage.removeItem("scrollPosition");
    }
  }, []);

  // Ambil data makanan
  useEffect(() => {
  const saved = localStorage.getItem("makanan");

  let semuaData = [...dataMakananDefault];

  if (saved) {
    const dataAdmin = JSON.parse(saved);
    semuaData = [...semuaData, ...dataAdmin];
  }

  const unik = semuaData.filter(
    (item, index, self) =>
      index === self.findIndex((i) => String(i.id) === String(item.id))
  );

  setDataMakanan(unik);
}, []);

  const handleFilter = (kategori, value) => {
    setFilter((prev) => {
      if (prev[kategori].includes(value)) {
        return { ...prev, [kategori]: [] };
      }

      return {
        ...prev,
        [kategori]: [value]
      };
    });
  };

  const hasilFilter = dataMakanan.filter((item) => {
    const keyword = search.toLowerCase().trim();
    const cocokSearch = item.nama.toLowerCase().includes(keyword);

    if (!cocokSearch) return false;

    const jenisItem = item.jenis?.toLowerCase().trim();
    const rasaItem = item.rasa?.toLowerCase().trim();

    const filterJenis = filter.jenis.map((f) => f.toLowerCase());
    const filterRasa = filter.rasa.map((f) => f.toLowerCase());

    if (
      filter.jenis.length > 0 &&
      !filterJenis.includes(jenisItem)
    ) return false;

    if (
      filter.rasa.length > 0 &&
      !filterRasa.includes(rasaItem)
    ) return false;

    if (filter.harga.length > 0) {
      let cocok = false;

      filter.harga.forEach((range) => {
        if (range === "murah" && item.harga < 10000) cocok = true;

        if (
          range === "sedang" &&
          item.harga >= 10000 &&
          item.harga <= 20000
        ) cocok = true;

        if (range === "mahal" && item.harga > 20000) cocok = true;
      });

      if (!cocok) return false;
    }

    return true;
  });

  return (
    <>
      <Navbar />

      <div className="katalog">

        {/* SIDEBAR */}
        <div className="sidebar">
          <h3>Filter</h3>

          <p>Jenis</p>

          <div>
            <input
              id="makanan"
              type="checkbox"
              checked={filter.jenis.includes("Makanan")}
              onChange={() => handleFilter("jenis", "Makanan")}
            />
            <label htmlFor="makanan">Makanan</label>
          </div>

          <div>
            <input
              id="minuman"
              type="checkbox"
              checked={filter.jenis.includes("Minuman")}
              onChange={() => handleFilter("jenis", "Minuman")}
            />
            <label htmlFor="minuman">Minuman</label>
          </div>

          <div>
            <input
              id="snack"
              type="checkbox"
              checked={filter.jenis.includes("Snack")}
              onChange={() => handleFilter("jenis", "Snack")}
            />
            <label htmlFor="snack">Snack</label>
          </div>

          <p>Rasa</p>

          <div>
            <input
              id="pedas"
              type="checkbox"
              checked={filter.rasa.includes("Pedas")}
              onChange={() => handleFilter("rasa", "Pedas")}
            />
            <label htmlFor="pedas">Pedas</label>
          </div>

          <div>
            <input
              id="manis"
              type="checkbox"
              checked={filter.rasa.includes("Manis")}
              onChange={() => handleFilter("rasa", "Manis")}
            />
            <label htmlFor="manis">Manis</label>
          </div>

          <div>
            <input
              id="gurih"
              type="checkbox"
              checked={filter.rasa.includes("Gurih")}
              onChange={() => handleFilter("rasa", "Gurih")}
            />
            <label htmlFor="gurih">Gurih</label>
          </div>

          <p>Harga</p>

          <div>
            <input
              id="murah"
              type="checkbox"
              checked={filter.harga.includes("murah")}
              onChange={() => handleFilter("harga", "murah")}
            />
            <label htmlFor="murah">&lt; Rp 10.000</label>
          </div>

          <div>
            <input
              id="sedang"
              type="checkbox"
              checked={filter.harga.includes("sedang")}
              onChange={() => handleFilter("harga", "sedang")}
            />
            <label htmlFor="sedang">
              Rp 10.000 - Rp 20.000
            </label>
          </div>

          <div>
            <input
              id="mahal"
              type="checkbox"
              checked={filter.harga.includes("mahal")}
              onChange={() => handleFilter("harga", "mahal")}
            />
            <label htmlFor="mahal">&gt; Rp 20.000</label>
          </div>
        </div>

        {/* CONTENT */}
        <div className="katalog-content">

          <div className="katalog-header">
            <h2>Katalog Jajanan & Resep</h2>

            <div className="search-box">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <FaSearch className="search-icon" />
            </div>
          </div>

          <div className="katalog-grid">
            {hasilFilter.length > 0 ? (
              hasilFilter.map((item) => {
                const rataRating =
                  item.komentar && item.komentar.length > 0
                    ? (
                        item.komentar.reduce(
                          (total, komen) =>
                            total + komen.rating,
                          0
                        ) / item.komentar.length
                      ).toFixed(1)
                    : "0.0";

                return (
                  <div className="card" key={item.id}>
                    <img
                      src={
                        item.gambar ||
                        "https://via.placeholder.com/150"
                      }
                      alt={item.nama}
                    />

                    <div className="card-body">

                      <div className="judul-rating">
                        <h3>{item.nama}</h3>

                        <span className="rating-badge">
                          ⭐ {rataRating > 5 ? 5 : rataRating}
                        </span>
                      </div>

                      <p>{item.jenis || "-"}</p>
                      <p>{item.rasa || "-"}</p>
                      <p>Rp {item.harga}</p>

                      <div className="btn-card">
                        <button
                          onClick={() =>{
                            sessionStorage.setItem(
                              "scrollPosition",
                              window.scrollY
                            );

                            navigate(`/detail/${item.id}`);
                          }}
                        >
                          Lihat Resep
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })
            ) : (
              <p>Tidak ada data yang sesuai filter</p>
            )}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Katalog;