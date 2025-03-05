import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signup } from "../api/apiService" // Fonction API

export function useSignUp() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const handleSignUp = async (email, password, firstName, lastName) => {
        setError(""); // Reset des erreurs avant la tentative
        setSuccessMessage(""); // Reset du message de succès avant chaque tentative

        try {
            // Appel API pour le signup
            await signup(email, password, firstName, lastName)

            // Affiche un message de succès
            setSuccessMessage("Success")

            // Délai avant de rediriger vers la page de connexion
            setTimeout(() => {
             navigate("/login")  // Redirection vers la page de connexion après 3 secondes
            }, 3000) // 3000 ms = 3 secondes     

        } catch (err) {
            setError(err.message || "Sign Up error")  // Affiche un message d'erreur
            setSuccessMessage("") // En cas d'erreur, réinitialise le message de succès
        }
    };

    return {
        handleSignUp,
        error,
        successMessage,
    }
}