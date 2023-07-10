import React from "react";
import { useSelector } from "react-redux";

import { HotelsList } from "../../components/HotelsList";
import { Section } from "../../components/Section";
import "./AvailableHotels.css";

export const AvailableHotels = () => {
  const hotels = useSelector((state) => state.hotels.hotels);

  return (
    <>
      {!!hotels.length && (
        <Section text="Available hotels" className="available__hotels bgColor">
          <HotelsList data={hotels} className="available__hotels--list" />
        </Section>
      )}
    </>
  );
};
