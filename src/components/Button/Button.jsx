import React from "react";

import classNames from "classnames";
import { func, oneOf, string } from "prop-types";

import styles from "./Button.module.css";

export const Button = ({
  text,
  type = "button",
  onClick,
  color,
  variant = "text",
  className,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(styles.button, className, {
        [styles.contained]: variant === "contained",
        [styles.outlined]: variant === "outlined",
        [styles.primary]: color === "primary",
        [styles.light]: color === "light",
        [styles.secondary]: color === "secondary",
      })}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: string.isRequired,
  type: string,
  onClick: func,
  color: oneOf(["primary", "light", "secondary"]),
  variant: oneOf(["contained", "outlined", "text"]),
};
