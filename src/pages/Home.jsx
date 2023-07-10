import React from "react";

import { AvailableHotels } from "../sections/AvailableHotels";
import { HomesGuestsLoves } from "../sections/HomesGuestsLoves";
import { TopSection } from "../sections/TopSection";

export const Home = () => {
  return (
    <>
      <TopSection />
      <AvailableHotels />
      <HomesGuestsLoves />
    </>
  );
};
