import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "Tony", // Valeur vide, à remplir après la connexion
  lastName: "Jarvis",  // Idem
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // Mise à jour des informations utilisateur après la connexion
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;