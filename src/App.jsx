import React from "react";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import { Router } from "./Router";
import { Loader } from "./components/Loader";
import { persistor, store } from "./store";

export const App = () => (
  <>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  </>
);
