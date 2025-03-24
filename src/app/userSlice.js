import { createSlice } from "@reduxjs/toolkit";

// Récupérer les données persistées depuis le localStorage (si elles existent)
const storedUser = JSON.parse(localStorage.getItem("user"));

const initialState = storedUser || {
    email: "",
    firstName: "",
    lastName: "",
    createdAt: "",
    updatedAt: "",
    id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      Object.assign(state, action.payload); // Met à jour chaque propriété de state
      // Sauvegarder les données dans le localStorage
      localStorage.setItem("user", JSON.stringify(state)); // Persister dans le localStorage
    },
  },
});


export const { setUser } = userSlice.actions;
export default userSlice.reducer;