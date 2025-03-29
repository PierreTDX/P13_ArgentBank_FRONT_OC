import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./logTunks";


const initialState = {
  token: localStorage.getItem("token") || null, // Si le token est dans localStorage, il est récupéré ici
  loading: false, // Ajout de l'état loading pour gérer le statut de la requête
  error: null, // Ajout de l'état error pour gérer les erreurs
};

const logSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logoutAction: (state) => {
      // Déconnexion réussie, on met à jour l'état du token
      state.token = null;

      // Retirer du localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload;
        state.loading = false;
        localStorage.setItem("token", action.payload); // Sauvegarder le token dans le localStorage
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Erreur lors de la connexion";
      });
  },
});

export const { logoutAction, loginAction } = logSlice.actions;
export default logSlice.reducer;