import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "../../constants/initialState";

const modalsSlice = createSlice({
  name: "modals",
  initialState: INITIAL_STATE.modals,
  reducers: {
    setIsSignUpOpen: (state, action) => ({
      ...state,
      isSignUpOpen: action.payload,
    }),
  },
});

export const { setIsSignUpOpen } = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
