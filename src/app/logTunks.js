import { createAsyncThunk } from "@reduxjs/toolkit"
import { login } from "../api/apiService"

// Création du thunk pour gérer la connexion utilisateur
export const loginUser = createAsyncThunk(
    'login/loginUser', 
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const response = await login(email, password);  // Appel à l'API
        return response.body.token;  // Retourne le token de la réponse
      } catch (error) {
        return rejectWithValue(error.message || "Erreur de connexion API")
      }
    }
  )