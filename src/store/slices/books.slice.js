import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "../../constants/initialState";

const booksSlice = createSlice({
  name: "books",
  initialState: INITIAL_STATE.books,
  reducers: {
    setAllBooks: (state, action) => ({ ...state, all: action.payload }),
    setBookStatusToMy: (state, action) => ({
      ...state,
      all: state.all.map((book) =>
        book.id === action.payload.id
          ? { ...book, status: "Taken", bookholder: "Milena" }
          : book
      ),
    }),
    setBookStatusToWaiting: (state, action) => ({
      ...state,
      all: state.all.map((book) =>
        book.id === action.payload.id
          ? { ...book, status: "Waiting for" }
          : book
      ),
    }),
    setBookStatusToAvailable: (state, action) => ({
      ...state,
      all: state.all.map((book) =>
        book.id === action.payload.id
          ? { ...book, status: "Available", bookholder: "" }
          : book
      ),
    }),
    setBookStatusToTaken: (state, action) => ({
      ...state,
      all: state.all.map((book) =>
        book.id === action.payload.id ? { ...book, status: "Taken" } : book
      ),
    }),
  },
});

export const {
  setAllBooks,
  setBookStatusToMy,
  setBookStatusToWaiting,
  setBookStatusToAvailable,
  setBookStatusToTaken,
} = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
