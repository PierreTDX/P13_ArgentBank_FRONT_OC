import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "Tony", // Valeur par défaut (à remplacer avec des données dynamiques après connexion)
  lastName: "Jarvis", // Valeur par défaut (à remplacer avec des données dynamiques après connexion)
  // Récupérer isAuthenticated depuis le localStorage (sinon false par défaut)
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false, // Pour gérer l'état de connexion
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", JSON.stringify(true)); // Sauvegarde dans localStorage
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", JSON.stringify(false)); // Mise à jour de localStorage
    },
  },
});

export const { setUser, logout, login } = userSlice.actions;
export default userSlice.reducer;