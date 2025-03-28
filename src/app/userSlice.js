import { createSlice } from "@reduxjs/toolkit";

// Récupérer les données persistées depuis le localStorage (si elles existent)
const storedUser = JSON.parse(localStorage.getItem("user"));

const initialState = storedUser || {
  email: "",
  firstName: storedUser.firstName || "",
  lastName: storedUser.lastName || "",
  createdAt: "",
  updatedAt: "",
  id: storedUser.id || "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      Object.assign(state, action.payload); // Met à jour chaque propriété de state
      // Sauvegarder les données dans le localStorage
      const { firstName, lastName, id } = state;
      localStorage.setItem("user", JSON.stringify({ firstName, lastName, id })); // Persister dans le localStorage
    },
  },
});


export const { setUser } = userSlice.actions;
export default userSlice.reducer;