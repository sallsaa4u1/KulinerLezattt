import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Resep from "../components/Resep";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    
    return (
        <>
          <Navbar />
          <Hero />
          <Resep />
          <Footer />
        </>
    );
}

export default Home;