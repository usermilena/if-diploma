import React from "react";
import { Link } from "react-router-dom";

import classNames from "classnames";
import { object, string } from "prop-types";

import "./HotelCard.css";

export const HotelCard = ({ el, className }) => {
  return (
    <Link className={classNames(className, "item")} to={`/hotels/${el.id}`}>
      <img src={el.imageUrl} alt={el.name} />
      <span className="hotel">{el.name}</span>
      <span className="hotel--location">
        {el.city}, {el.country}
      </span>
    </Link>
  );
};

HotelCard.propTypes = {
  el: object.isRequired,
  className: string,
};
