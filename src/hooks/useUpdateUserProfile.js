import { useDispatch } from "react-redux"
import { setUser } from "../app/userSlice"
import { updateUserProfile } from "../api/apiService"

export function useUpdateUserProfile() {
    const dispatch = useDispatch()

    const handleUpdate = async (updatedData) => {
        try {
            const updatedUser = await updateUserProfile(updatedData)
            dispatch(setUser(updatedUser.body)); // Mise à jour de l'état utilisateur
        } catch (error) {
            console.error("Error updating user profile:", error)
        }
    }

    return {
        handleUpdate,
    }
}