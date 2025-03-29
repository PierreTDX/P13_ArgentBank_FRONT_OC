import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../app/logTunks"
import { useUserProfile } from "./useUserProfile"

export function useLogin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState("")

    // Appel à useUserProfile à l'intérieur du hook personnalisé
    const userProfile = useUserProfile()

    const handleLogin = async (email, password) => {
        setError(""); // Reset des erreurs avant la tentative

        try {

            // Attendre la résolution du thunk (loginUser)
            await dispatch(loginUser({ email, password })).unwrap();

            // Redirection vers le dashboard
            navigate("/profile")
            
        } catch (err) {
            setError(err.message || "Connection API error")
        }
    };

    return {
        handleLogin,
        error,
        userProfile,
    }
}
