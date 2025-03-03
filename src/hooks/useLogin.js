import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginAction } from "../app/logSlice" // Action Redux
import { login } from "../api/apiService" // Fonction API

export function useLogin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const handleLogin = async (email, password) => {
        setError(""); // Reset des erreurs avant la tentative

        try {
            // Appel API pour la connexion
            const data = await login(email, password)

            // Récupération du token depuis la réponse
            const token = data.body.token;

            // Dispatch de l'action login avec le token
            dispatch(loginAction({ token: token }))

            // Redirection vers le dashboard
            navigate("/profile")
        } catch (err) {
            setError(err.message || "Connection API error")
        }
    };

    return {
        handleLogin,
        error,
    }
}
