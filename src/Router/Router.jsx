import React from "react";
import { Route, Routes } from "react-router-dom";

import { ProtectedLayout } from "../components/ProtectedLayout";
import { Home } from "../pages/Home";
import { HotelPage } from "../pages/HotelPage";
import { LoginPage } from "../pages/LoginPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hotels/:hotelId" element={<HotelPage />} />
      </Route>
    </Routes>
  );
};
