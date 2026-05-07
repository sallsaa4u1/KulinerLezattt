import { Link, useNavigate } from "react-router-dom";
import dataMakanan from "../data/dataMakanan";

function Resep() {
  const navigate = useNavigate();

  // ambil 4 data pertama
  const dataResep = dataMakanan.slice(0, 4);

  return (
    <div className="resep">
      <h2>Resep Populer</h2>

      <div className="grid">

        {dataResep.map((item, index) => {
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
            <div className="card" key={index}>
              <img
                src={item.gambar}
                alt={item.nama}
              />

              <div className="card-body">

                <div className="judul-rating">
                  <h3>{item.nama}</h3>

                  <span className="rating-badge">
                    ⭐ {rataRating > 5 ? 5 : rataRating}
                  </span>
                </div>

                <p>{item.jenis}</p>
                <p>{item.rasa}</p>
                <p>Rp {item.harga}</p>

                <div className="btn-card">
                  <button
                    onClick={() =>
                      navigate(`/detail/${item.id}`)
                    }
                  >
                    Lihat Resep
                  </button>
                </div>

              </div>
            </div>
          );
        })}

      </div>

      <Link to="/katalog">
        <button className="btn-semua">
          Lihat Semua Resep
        </button>
      </Link>
    </div>
  );
}

export default Resep;