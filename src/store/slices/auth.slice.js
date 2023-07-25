import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "../../constants/initialState";

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE.auth,
  reducers: {
    setUser: (state, action) => ({ ...state, user: action.payload }),
    setUsername: (state, action) => ({
      ...state,
      user: { ...state.user, username: action.payload },
    }),
    setDate: (state, action) => ({
      ...state,
      user: { ...state.user, date: action.payload },
    }),
    setEmail: (state, action) => ({
      ...state,
      user: { ...state.user, email: action.payload },
    }),
    setPassword: (state, action) => ({
      ...state,
      user: { ...state.user, password: action.payload },
    }),
  },
});

export const { setUser, setUsername, setDate, setEmail, setPassword } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
