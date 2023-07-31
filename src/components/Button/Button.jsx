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
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(className, {
        [styles.contained]: variant === "contained",
        [styles.outlined]: variant === "outlined",
        [styles.primary]: color === "primary",
        [styles.light]: color === "light",
        [styles.secondary]: color === "secondary",
        [styles.taken]: color === "taken",
        [styles.available]: color === "available",
        [styles.waiting]: color === "waitingfor",
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: string.isRequired,
  type: string,
  onClick: func,
  color: oneOf([
    "primary",
    "light",
    "secondary",
    "available",
    "taken",
    "waitingfor",
  ]),
  variant: oneOf(["contained", "outlined", "text"]),
};
