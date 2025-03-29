import { createSlice } from "@reduxjs/toolkit";
import { updateUser, fetchUserProfile } from "./userThunks";

// Récupérer les données persistées depuis le localStorage (si elles existent)
const storedUser = JSON.parse(localStorage.getItem("user")) || {};

const initialState = {
  email: "",
  firstName: storedUser.firstName || "",
  lastName: storedUser.lastName || "",
  createdAt: "",
  updatedAt: "",
  id: storedUser.id || "",
  loading: false, // Ajout pour éviter une erreur si utilisé dans extraReducers
  error: null, // Ajout pour gérer les erreurs proprement
};

// Fonction pour sauvegarder les données utilisateur dans le localStorage
const saveUserToLocalStorage = (state) => {
  const { firstName, lastName, id } = state;
  localStorage.setItem("user", JSON.stringify({ firstName, lastName, id }));
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      // Gestion du thunk `updateUser`
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null; // Réinitialise l'erreur au début de la requête
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
        state.loading = false;
        saveUserToLocalStorage(state); // Persister dans le localStorage
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error ? action.error.message : "user update error";
      })
      
      // Gestion du thunk `fetchUserProfile`
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null; // Réinitialise l'erreur au début de la requête
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
        state.loading = false;
        saveUserToLocalStorage(state); // Persister dans le localStorage
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error retrieving user profile";
      });  },
});


export const { setUser } = userSlice.actions;
export default userSlice.reducer;