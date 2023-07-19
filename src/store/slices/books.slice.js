import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "../../constants/initialState";

const booksSlice = createSlice({
  name: "books",
  initialState: INITIAL_STATE.books,
  reducers: {
    setAllBooks: (state, action) => ({ ...state, all: action.payload }),
    setMyBooks: (state, action) => ({ ...state, my: action.payload }),
    setMyWaitingBooks: (state, action) => ({
      ...state,
      myWaiting: action.payload,
    }),
  },
});

export const { setAllBooks } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
