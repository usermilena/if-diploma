import React from "react";
import { useDispatch } from "react-redux";

import { setDestination } from "../../../store/slices/hotels.slice";
import { SearchIcon } from "../../Icons";
import { Input } from "../../Input";
import { Label } from "../../Label";
import "./SearchDestination.css";

export const SearchDestination = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setDestination(event.target.value));
  };

  return (
    <div id="destinationWrapper" className="top__search--destination__wrapper">
      <SearchIcon className="top__search--destination__search-icon" />
      <Label
        className="top__search--destination__label"
        text="Your destination or hotel name"
      />
      <Input
        onChange={handleChange}
        placeholder="New York"
        className="top__search--destination"
      />
    </div>
  );
};
