import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null, // Si le token est dans localStorage, il est récupéré ici
};

const logSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      // Connexion réussie, on met à jour l'état avec le token 
      state.token = action.payload.token;

      // Sauvegarde dans le localStorage
      localStorage.setItem("token", action.payload.token);
    },
    logoutAction: (state) => {
      // Déconnexion, retire les infos du localStorage
      state.token = null;

      localStorage.removeItem("token");
    },
  },
});

export const { logoutAction, loginAction } = logSlice.actions;
export default logSlice.reducer;