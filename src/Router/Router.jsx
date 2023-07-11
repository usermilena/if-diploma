import React from "react";
import { Route, Routes } from "react-router-dom";

import { IntroPage } from "../pages/IntroPage";

// import { ProtectedLayout } from "../components/ProtectedLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      {/* <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hotels/:hotelId" element={<HotelPage />} />
      </Route> */}
    </Routes>
  );
};
