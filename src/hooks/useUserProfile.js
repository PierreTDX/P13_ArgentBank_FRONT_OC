import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchUserProfile } from "../app/userThunks"
import useAuth from "./useAuth"; // Import du hook personnalisé

// Hook personnalisé pour récupérer le profil utilisateur
export function useUserProfile() {
    const dispatch = useDispatch()
    const { isAuthenticated } = useAuth(); // Utilisation du hook ici

    useEffect(() => {
        if (!isAuthenticated) return; // Ne fait rien si l'utilisateur n'est pas authentifié

        // Dispatch le thunk pour récupérer le profil utilisateur
        dispatch(fetchUserProfile());

    }, [dispatch, isAuthenticated]); // Dépendance à isAuthenticated
}