import "./signup.scss"
import { useSignUp } from "../../hooks/useSignUp"

function Signup() {
    const { handleSignUp, error, successMessage } = useSignUp() // Utilisation du hook personnalisé

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Récupérer les valeurs directement du formulaire
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const firstName = form.firstname.value
        const lastName = form.lastname.value

        handleSignUp(email, password, firstName, lastName)
    }

    return (
        <div className="bodyPage">
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign UP</h1>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <div className="input-wrapper">
                            <label htmlFor="firstname">Firstname</label>
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="lastname">Lastname</label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="username">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                autoComplete="new-password"
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        {successMessage && <p className="success-message">{successMessage}</p>}
                        <button type="submit" className="sign-in-button">
                            Sign Up
                        </button>
                    </form>
                </section>
            </main>
        </div>
    )
}

export default Signup