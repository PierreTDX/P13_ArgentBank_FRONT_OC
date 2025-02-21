import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    },
  },
});


export const { setUser } = userSlice.actions;
export default userSlice.reducer;