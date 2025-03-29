import "./signin.scss"
import { useNavigate } from "react-router-dom"
import { useLoginAndGetUser } from "../../hooks/useLogin"
import { useSelector } from "react-redux"
import { selectLodingSession } from "../../app/selectors"
import LoaderSession from "../../components/Loader"

function Signin() {
    const navigate = useNavigate()
    const { handleLogin, error } = useLoginAndGetUser() // Utilisation du hook personnalisé
    const loading = useSelector(selectLodingSession) // Récupérer l'état 'loading' depuis le store
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
                                required
                                defaultValue={savedEmail || ""}
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
                        {/* Afficher le message d'erreur */}
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="sign-in-button" disabled={loading}>
                            {loading ? (<LoaderSession />) : ("Sign In")}
                        </button>
                    </form>
                </section>
                <p>Email : tony@stark.com / steve@rogers.com</p>
                <p>Password : password123 / password456</p>
                <section className="sign-in-content sign-up-content">
                    <h1>New customer</h1>
                    <button onClick={() => navigate("/signup")} className="sign-in-button">
                        Sign Up
                    </button>
                </section>
            </main>
        </div>
    )
}

export default Signin