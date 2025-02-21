import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "", // Valeur vide, à remplir après la connexion
  lastName: "",  // Idem
  token: localStorage.getItem("token") || null, // Si le token est dans localStorage, il est récupéré ici
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false, // État de l'authentification
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // Mise à jour des informations utilisateur après la connexion
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.token = action.payload.token;
      state.isAuthenticated = true;

      // Sauvegarde dans le localStorage
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
    },
    login: (state, action) => {
      // Connexion réussie, on met à jour l'état avec le token et les infos de l'utilisateur
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.firstName = action.payload.firstName; // Si tu as un autre moyen d'obtenir le prénom
      state.lastName = action.payload.lastName; // Idem pour le nom

      // Sauvegarde dans le localStorage
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
    },
    logout: (state) => {
      // Déconnexion, on réinitialise l'état et retire les infos du localStorage
      state.isAuthenticated = false;
      state.firstName = "";
      state.lastName = "";
      state.token = null;

      localStorage.removeItem("token");
      localStorage.removeItem("isAuthenticated");
    },
  },
});

export const { setUser, logout, login } = userSlice.actions;
export default userSlice.reducer;