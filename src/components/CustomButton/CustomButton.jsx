import React from "react";

import { func } from "prop-types";

import "./CustomButton.css";

export const CustomLeftArrow = ({ onClick }) => {
  return (
    <div onClick={() => onClick()} className="custom-arrow left">
      <div className="arrow "></div>
    </div>
  );
};

export const CustomRightArrow = ({ onClick }) => {
  return (
    <div onClick={() => onClick()} className="custom-arrow right">
      <div className="arrow "></div>
    </div>
  );
};

CustomLeftArrow.propTypes = {
  onClick: func,
};

CustomRightArrow.propTypes = {
  onClick: func,
};
