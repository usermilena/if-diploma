import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { AppsFooter } from "../../components/AppsFooter";
import { HotelCard } from "../../components/HotelCard";
import { Section } from "../../components/Section";
import { TopHeader } from "../../components/TopHeader";
import { hotelsUrl } from "../../constants/urls";
import { getData } from "../../services/getData";
import styles from "./HotelPage.module.css";

export const HotelPage = () => {
  const [hotel, setHotel] = useState({});

  let { hotelId } = useParams();

  useEffect(() => {
    getData(`${hotelsUrl}/${hotelId}`).then((hotel) => setHotel(hotel));
  }, [hotelId]);

  return (
    <Section className={styles.hotelWrapper}>
      <TopHeader />
      <HotelCard el={hotel} className={styles.hotel} />
      <AppsFooter />
    </Section>
  );
};
