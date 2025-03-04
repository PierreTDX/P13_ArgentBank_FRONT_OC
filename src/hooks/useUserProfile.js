import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../app/userSlice"
import { getUserProfile } from "../api/apiService"
import { selectToken } from "../app/selectors"

// Hook personnalisé pour récupérer le profil utilisateur
export function useUserProfile() {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(selectToken)

    useEffect(() => {
        if (!isAuthenticated) return; // Ne fait rien si l'utilisateur n'est pas authentifié

        const fetchUserProfile = async () => {
            try {
                const userProfile = await getUserProfile()
                dispatch(setUser(userProfile.body))
            } catch (error) {
                console.error("Error retrieving user profile:", error)
            }
        };

        fetchUserProfile()
    }, [dispatch, isAuthenticated]); // Dépendance à isAuthenticated
}