import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminForm from "./AdminForm";
import dataMakananDefault from "../data/dataMakanan";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = localStorage.getItem("adminLogin");

    if (isLogin !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  // DATA
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("makanan");

    if (saved) {
      const dataAdmin = JSON.parse(saved);
      const gabung = [...dataMakananDefault, ...dataAdmin];

      return gabung.filter(
        (item, index, self) =>
          index ===
          self.findIndex((i) => String(i.id) === String(item.id))
      );
    }

    return dataMakananDefault;
  });

  // SIMPAN KE LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("makanan", JSON.stringify(data));
  }, [data]);

  const [isForm, setIsForm] = useState(false);
  const [editData, setEditData] = useState(null);

  // MODAL DELETE
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // HAPUS
  const handleDelete = (item) => {
    setSelectedItem(item);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    setData(data.filter((d) => d.id !== selectedItem.id));
    setShowConfirm(false);
    setSelectedItem(null);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setSelectedItem(null);
  };

  // SIMPAN / EDIT + VALIDASI DUPLIKAT + AUTO SCROLL
  const handleSave = (item) => {
    const isDuplicate = data.some((d) => {
      return (
        d.nama.trim().toLowerCase() === item.nama.trim().toLowerCase() &&
        Number(d.harga) === Number(item.harga) &&
        d.rasa.trim().toLowerCase() === item.rasa.trim().toLowerCase() &&
        d.jenis.trim().toLowerCase() === item.jenis.trim().toLowerCase() &&
        d.id !== item.id
      );
    });

    if (isDuplicate) {
      alert(
        `Resep "${item.nama}" sudah ada! Tidak bisa menambahkan data yang sama.`
      );
      return;
    }

    let newItem;

    if (item.id) {
      newItem = item;
      setData(data.map((d) => (d.id === item.id ? item : d)));
    } else {
      newItem = {
        ...item,
        id: Date.now(),
      };

      setData((prev) => [...prev, newItem]);
    }

    setIsForm(false);
    setEditData(null);

    // AUTO SCROLL KE CARD BARU
    setTimeout(() => {
      const target = document.getElementById(`card-${newItem.id}`);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 800);
  };

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("adminLogin");
    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <div className="admin-container">
        {!isForm ? (
          <>
            {/* HEADER */}
            <div className="admin-header">
              <div>
                <h2>Dashboard Admin</h2>
                <p className="sub-title">Kelola data resep makanan</p>
              </div>

              <div className="header-actions">
                <button
                  className="btn-tambah"
                  onClick={() => setIsForm(true)}
                >
                  + Tambah Resep
                </button>

                <button
                  className="btn-logout"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>

            {/* STATS */}
            <div className="admin-stats">
              <div className="stat-card">
                <h3>{data.length}</h3>
                <p>Total Resep</p>
              </div>

              <div className="stat-card">
                <h3>
                  {data.filter((d) => d.jenis === "Makanan").length}
                </h3>
                <p>Makanan</p>
              </div>

              <div className="stat-card">
                <h3>
                  {data.filter((d) => d.jenis === "Minuman").length}
                </h3>
                <p>Minuman</p>
              </div>

              <div className="stat-card">
                <h3>
                  {data.filter((d) => d.jenis === "Snack").length}
                </h3>
                <p>Snack</p>
              </div>
            </div>

            {/* GRID CARD */}
            <div className="admin-grid">
              {data.map((item) => (
                <div
                  className="admin-card"
                  key={item.id}
                  id={`card-${item.id}`}
                >
                  <div className="admin-img-wrapper">
                    <img
                      src={item.gambar}
                      alt={item.nama}
                    />
                  </div>

                  <div className="admin-body">
                    <div className="admin-top">
                      <h3>{item.nama}</h3>

                      <span
                        className={`badge ${item.jenis?.toLowerCase() || ""}`}
                      >
                        {item.jenis}
                      </span>
                    </div>

                    <p className="admin-rasa">{item.rasa}</p>
                    <p className="admin-harga">
                      Rp {item.harga}
                    </p>

                    <div className="admin-actions">
                      <button
                        className="btn-edit"
                        onClick={() => {
                          setEditData(item);
                          setIsForm(true);
                        }}
                      >
                        Edit
                      </button>

                      <button
                        className="btn-hapus"
                        onClick={() => handleDelete(item)}
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <AdminForm
            onSave={handleSave}
            dataEdit={editData}
            onCancel={() => {
              setIsForm(false);
              setEditData(null);
            }}
          />
        )}
      </div>

      {/* MODAL HAPUS */}
      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Hapus Data</h3>

            <p>
              Yakin mau hapus{" "}
              <b>{selectedItem?.nama}</b> ?
            </p>

            <div className="modal-btn">
              <button
                className="btn-batal"
                onClick={cancelDelete}
              >
                Batal
              </button>

              <button
                className="btn-hapus"
                onClick={confirmDelete}
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Admin;