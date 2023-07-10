import React from "react";

import classNames from "classnames";
import { func, string } from "prop-types";

import "./IconButton.css";

export const IconButton = ({ onClick, className, text }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(className, "top__search--amount__filter--button")}
    >
      {text}
    </button>
  );
};

IconButton.propTypes = {
  onClick: func,
  className: string,
  text: string,
};
