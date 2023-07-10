import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetHotelsMutation } from "../../../services";
import { setHotels } from "../../../store/slices/hotels.slice";
import { Button } from "../../Button";
import { SearchAmount } from "../SearchAmount";
import { SearchDate } from "../SearchDate";
import { SearchDestination } from "../SearchDestination";
import "./SearchForm.css";

export const SearchForm = () => {
  const destination = useSelector((state) => state.hotels.destination);
  const dateFrom = useSelector((state) => state.hotels.dateFrom);
  const dateTo = useSelector((state) => state.hotels.dateTo);
  const adults = useSelector((state) => state.hotels.adults);
  const children = useSelector((state) => state.hotels.children);
  const rooms = useSelector((state) => state.hotels.rooms);

  const [getHotels] = useGetHotelsMutation();
  const dispatch = useDispatch();

  const availableHotelsEvent = async () => {
    const res = await getHotels({
      destination,
      dateFrom,
      dateTo,
      adults,
      children,
      rooms,
    });
    dispatch(setHotels(res.data));

    window.scrollTo({
      top: 902,
      behavior: "smooth",
    });
  };

  return (
    <form className="top__search">
      <SearchDestination />
      <SearchDate />
      <SearchAmount />
      <Button onClick={availableHotelsEvent} text="Search" />
    </form>
  );
};
