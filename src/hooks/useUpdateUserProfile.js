import { useDispatch } from "react-redux";
import { setUser } from "../app/userSlice";
import { updateUserProfile } from "../api/apiService";
import useAuth from "../hooks/useAuth"; // Import du hook personnalisé

export function useUpdateUserProfile() {
    const dispatch = useDispatch();
    const { isAuthenticated } = useAuth(); // Utilisation du hook pour vérifier si l'utilisateur est authentifié

    const handleUpdate = async (updatedData) => {
        if (!isAuthenticated) return; // Ne fait rien si l'utilisateur n'est pas authentifié

        try {
            const updatedUser = await updateUserProfile(updatedData);
            dispatch(setUser(updatedUser.body)); // Mise à jour de l'état utilisateur
        } catch (error) {
            console.error("Error updating user profile:", error);
        }
    };

    return {
        handleUpdate,
    };
}