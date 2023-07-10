import React, { useEffect, useState } from "react";

import { HotelsList } from "../../components/HotelsList";
import { Section } from "../../components/Section";
import { popularHotelsUrl } from "../../constants/urls";
import { getData } from "../../services/getData";

export const HomesGuestsLoves = () => {
  const [popularHotels, setPopularHotels] = useState([]);

  useEffect(() => {
    getData(popularHotelsUrl).then((popularHotels) =>
      setPopularHotels(popularHotels)
    );
  }, []);

  return (
    <Section className="bgColor" text="Homes guests loves">
      <HotelsList data={popularHotels} />
    </Section>
  );
};
