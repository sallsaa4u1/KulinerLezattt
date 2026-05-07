import { useState, useEffect } from "react";

function AdminForm({ onSave, dataEdit, onCancel }) {
  const [form, setForm] = useState({
    nama: "",
    harga: "",
    jenis: "",
    rasa: "",
    gambar: "",
    deskripsi: "",
    bahan: "",
    cara: ""
  });

  useEffect(() => {
    if (dataEdit) {
      setForm({
        ...dataEdit,
        bahan: Array.isArray(dataEdit.bahan)
          ? dataEdit.bahan.join("\n")
          : dataEdit.bahan || "",

        cara: Array.isArray(dataEdit.cara)
          ? dataEdit.cara.join("\n")
          : dataEdit.cara || ""
      });
    }
  }, [dataEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      ...form,
      id: dataEdit ? dataEdit.id : null,
      harga: Number(form.harga),

      bahan: form.bahan
        .split("\n")
        .map((b) => b.trim())
        .filter((b) => b !== ""),

      cara: form.cara
        .split("\n")
        .map((c) => c.trim())
        .filter((c) => c !== "")
    };

    onSave(newData);
  };

    return (
  <div className="form-wrapper">
    <div className="form-card">

      <h2>{dataEdit ? "Edit Resep" : "Tambah Resep"}</h2>

      <form onSubmit={handleSubmit}>

        <label>Nama Makanan</label>
        <input
          type="text"
          name="nama"
          value={form.nama}
          onChange={handleChange}
          required
        />

        <label>Harga</label>
        <input
          type="number"
          name="harga"
          value={form.harga}
          onChange={handleChange}
          required
        />

        <label>Jenis</label>
        <select
          name="jenis"
          value={form.jenis}
          onChange={handleChange}
          required
        >
          <option value="">Pilih Jenis</option>
          <option value="Makanan">Makanan</option>
          <option value="Minuman">Minuman</option>
          <option value="Snack">Snack</option>
        </select>

        <label>Rasa</label>
        <select
          name="rasa"
          value={form.rasa}
          onChange={handleChange}
          required
        >
          <option value="">Pilih Rasa</option>
          <option value="Manis">Manis</option>
          <option value="Gurih">Gurih</option>
          <option value="Pedas">Pedas</option>
        </select>

        <label>Link Gambar</label>
        <input
          type="text"
          name="gambar"
          value={form.gambar}
          onChange={handleChange}
          required
        />

        <label>Deskripsi</label>
        <textarea
          className="textarea-besar"
          name="deskripsi"
          value={form.deskripsi}
          onChange={handleChange}
        />

        <label>Bahan</label>
        <textarea
          className="textarea-besar"
          name="bahan"
          value={form.bahan}
          onChange={handleChange}
        />

        <label>Cara Membuat</label>
        <textarea
          className="textarea-besar"
          name="cara"
          value={form.cara}
          onChange={handleChange}
        />

        <div className="form-btn">
          <button type="submit" className="btn-simpan">Simpan</button>
          <button type="button" className="btn-batal" onClick={onCancel}>
            Batal
          </button>
        </div>

      </form>
    </div>
  </div>
  );
}

export default AdminForm;