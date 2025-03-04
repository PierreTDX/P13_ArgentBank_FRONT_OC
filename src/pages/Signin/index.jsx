import "./signin.scss"
import { useState, useEffect } from "react"
import { useLogin } from "../../hooks/useLogin"

function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false) // État pour la checkbox

    const { handleLogin, error } = useLogin() // Utilisation du hook personnalisé

    // Si l'email est dans le localStorage, on le met dans le champ "email"
    useEffect(() => {
        const savedEmail = localStorage.getItem("email")
        if (savedEmail) {
            setEmail(savedEmail)
            setRememberMe(true) // On coche la case "Remember me" si l'email est trouvé
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()

        handleLogin(email, password)

        if (rememberMe) {
            localStorage.setItem("email", email)
        } else {
            localStorage.removeItem("email")
        }
    }

    return (
        <div className="bodyPage">
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
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
                            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="sign-in-button">
                            Sign In
                        </button>
                    </form>
                </section>
                <p>Username : tony@stark.com / steve@rogers.com</p>
                <p>Password : password123 / password456</p>
            </main>
        </div>
    )
}

export default Signin