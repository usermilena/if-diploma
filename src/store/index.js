import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";

import { hotels } from "../services";
import { rootReducer } from "./slices";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(hotels.middleware),
});

export const persistor = persistStore(store);
