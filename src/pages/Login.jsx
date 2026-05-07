import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "sallsa" && password === "190509") {
            localStorage.setItem("adminLogin", "true");
            setError("");
            navigate("/admin");
        } else {
            setError("Username atau Password salah!");
        }
    };

    return (
        <>
            <Navbar />

            <div className="login-container">
                <form className="login-box" onSubmit={handleLogin}>
                    <h2>Login Admin</h2>

                    {error && <p className="error">{error}</p>}

                    <input 
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />

                    <button type="submit">Login</button>
                </form>
            </div>

            <Footer />
        </>
    );
}

export default Login;