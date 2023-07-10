import React from "react";

import { string, func } from "prop-types";

import "./Button.css";

export const Button = ({
  onClick,
  text,
  className = "top__search--button",
}) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: func,
  text: string,
  className: string,
};
