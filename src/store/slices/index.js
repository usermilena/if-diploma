import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { hotels } from "../../services";
import { authReducer } from "./auth.slice";
import { hotelsReducer } from "./hotels.slice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: hotels.reducerPath,
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    [hotels.reducerPath]: hotels.reducer,
    auth: authReducer,
    hotels: hotelsReducer,
  })
);
