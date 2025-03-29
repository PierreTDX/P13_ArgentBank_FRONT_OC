import { useDispatch } from "react-redux";
import { updateUser } from "../app/userThunks";
import useAuth from "../hooks/useAuth"; // Import du hook personnalisé

export function useUpdateUserProfile() {
    const dispatch = useDispatch();
    const { isAuthenticated } = useAuth(); // Utilisation du hook pour vérifier si l'utilisateur est authentifié

    const handleUpdate = async (updatedData) => {
        if (!isAuthenticated) return; // Ne fait rien si l'utilisateur n'est pas authentifié

        // Dispatch l'action asynchrone, les erreurs seront gérées dans le thunk
        dispatch(updateUser(updatedData));

        };

    return {
        handleUpdate,
    };
}