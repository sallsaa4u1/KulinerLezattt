import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="hero">
            <div className="overlay"></div>

            <div className="hero-content">
                <h1>Jajanan & Resep Kekinian</h1>
                <p>
                    Temukan berbagai jajanan dan resep kekinian
                    yang mudah dibuat dan pastinya lezat.
                </p>
                
              <div className="btn-wrapper">
                <Link to="/katalog">
                    <button>Lihat Katalog</button>
                </Link>
              </div>
            </div>
        </div>
    );
}

export default Hero;