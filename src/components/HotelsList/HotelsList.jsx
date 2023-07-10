import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { array } from "prop-types";

import {
  CustomLeftArrow,
  CustomRightArrow,
} from "../CustomButton/CustomButton";
import { HotelCard } from "../HotelCard";
import "./HotelsList.css";

export const HotelsList = ({ data }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      className="list col-lg-12 col-sm-6"
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      {data.map((el) => (
        <HotelCard el={el} key={el.id} />
      ))}
    </Carousel>
  );
};

HotelsList.propTypes = {
  data: array.isRequired,
};
