import "./signin.scss"
import { useNavigate } from "react-router-dom"
import { useLogin } from "../../hooks/useLogin"

function Signin() {
    const navigate = useNavigate()
    const { handleLogin, error } = useLogin() // Utilisation du hook personnalisé
    const savedEmail = localStorage.getItem("email")

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Récupérer les valeurs directement du formulaire
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const rememberMe = form.rememberMe.checked

        // Appel de la fonction handleLogin
        handleLogin(email, password)

        // Sauvegarder l'email dans le localStorage si "Remember me" est coché
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
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                defaultValue={savedEmail || ""}
                                required
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                            />
                        </div>
                        <div className="input-remember">
                            <input
                                type="checkbox"
                                id="remember-me"
                                name="rememberMe"
                                defaultChecked={savedEmail ? true : false} // Si l'email est dans le localStorage, cocher la case
                            />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="sign-in-button">
                            Sign In
                        </button>
                    </form>
                </section>
                {/* <p>Email : tony@stark.com / steve@rogers.com</p>
                <p>Password : password123 / password456</p>
                <section className="sign-in-content sign-up-content">
                    <h1>New customer</h1>
                    <button onClick={() => navigate("/signup")} className="sign-in-button">
                        Sign Up
                    </button>
                </section> */}
            </main>
        </div>
    )
}

export default Signin