import { createAsyncThunk } from "@reduxjs/toolkit"
import { updateUserProfile, getUserProfile } from "../api/apiService"

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (updatedData, { rejectWithValue }) => {
    try {
      const response = await updateUserProfile(updatedData)
      return response.body
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Thunk pour récupérer le profil utilisateur
export const fetchUserProfile = createAsyncThunk(
    "user/fetchUserProfile",
    async (_, { rejectWithValue }) => {
        try {
            const response = await getUserProfile()
            return response.body // Renvoie le profil utilisateur
        } catch (error) {
            return rejectWithValue(error.message) // Envoie un message d'erreur si l'API échoue
        }
    }
)