import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const isLogin = localStorage.getItem("adminLogin") === "true";
  const isAdminPage = location.pathname === "/admin";

  const handleLogout = () => {
    localStorage.removeItem("adminLogin");
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h2>KulinerLezat</h2>

      {/* MENU NAVBAR */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/katalog" onClick={() => setMenuOpen(false)}>
            Katalog
          </Link>
        </li>

        {/* BELUM LOGIN */}
        {!isLogin && !isAdminPage && (
          <li>
            <button
              onClick={() => {
                navigate("/login");
                setMenuOpen(false);
              }}
            >
              Admin
            </button>
          </li>
        )}

        {/* SUDAH LOGIN */}
        {isLogin && !isAdminPage && (
          <li>
            <button
              onClick={() => {
                navigate("/admin");
                setMenuOpen(false);
              }}
            >
              Dashboard
            </button>
          </li>
        )}
      </ul>

      {/* HAMBURGER MENU */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </nav>
  );
}

export default Navbar;