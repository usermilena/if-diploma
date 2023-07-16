import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "../../constants/initialState";

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE.auth,
  reducers: {
    setUser: (state, action) => ({ ...state, user: action.payload }),
  },
});

export const { setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
