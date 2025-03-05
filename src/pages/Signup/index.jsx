import "./signup.scss"
import { useState } from "react"
import { useSignUp } from "../../hooks/useSignUp"

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const { handleSignUp, error, successMessage } = useSignUp() // Utilisation du hook personnalisé

    const handleSubmit = async (e) => {
        e.preventDefault()

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
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="lastname">Lastname</label>
                            <input
                                type="text"
                                id="lastname"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="username">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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