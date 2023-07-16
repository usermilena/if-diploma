import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./auth.slice";
import { booksReducer } from "./books.slice";
import { modalsReducer } from "./modals.slice";

const persistConfig = {
  key: "root",
  storage,
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authReducer,
    modals: modalsReducer,
    books: booksReducer,
  })
);
