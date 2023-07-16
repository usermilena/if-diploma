import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";

import { rootReducer } from "./slices";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
