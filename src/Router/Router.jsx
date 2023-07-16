import React from "react";
import { Route, Routes } from "react-router-dom";

import { ProtectedLayout } from "../components/ProtectedLayout";
import { Home } from "../pages/Home";
import { IntroPage } from "../pages/IntroPage";
import { AllBooks } from "../sections/AllBooks";

export const Router = () => {
  return (
    <Routes>
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<IntroPage />} />
        <Route path="home" element={<Home />} />
        <Route path="all" element={<AllBooks />} />
      </Route>
    </Routes>
  );
};
