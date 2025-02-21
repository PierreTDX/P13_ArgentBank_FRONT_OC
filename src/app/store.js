import { configureStore } from "@reduxjs/toolkit"
import logReducer from "./logSlice"
import userReducer from "./userSlice"

export const store = configureStore({
  reducer: {
    login: logReducer,
    user: userReducer,
  },
})
