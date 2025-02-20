import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"

export const store = configureStore({
  reducer: {
    user: userReducer, // Ajout du reducer user
  },
})
