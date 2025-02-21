import "./signin.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../app/logSlice"; // Action Redux
import { login } from "./../../api/apiService"; // Fonction API

function Signin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); // Reset des erreurs avant la tentative

        try {
            // Appel API pour la connexion
            const data = await login(email, password);

            // Récupération du token depuis la réponse
            const token = data.body.token; // récupère le token de la réponse

            // Dispatch de l'action login avec le token
            dispatch(loginAction({ token: token }));

            // Redirection vers le dashboard
            navigate("/dashboard");
        } catch (err) {
            setError(err.message || "Erreur de connexion");
        }
    };

    return (
        <div className="bodyPage">
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleLogin}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="sign-in-button">
                            Sign In
                        </button>
                    </form>
                </section>
                <p>Username : tony@stark.com / steve@rogers.com</p>
                <p>Password : password123 / password234</p>
            </main>
        </div>
    );
}

export default Signin;