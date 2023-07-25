import React from "react";

import classNames from "classnames";
import { func, oneOf, string } from "prop-types";

import styles from "./Button.module.css";

export const Button = ({
  text,
  className,
  fontSize = 20,
  type = "button",
  onClick,
  color = "primary",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(styles.button, className, {
        [styles.fz12]: fontSize === 12,
        [styles.fz16]: fontSize === 16,
        [styles.fz18]: fontSize === 18,
        [styles.fz20]: fontSize === 20,
        [styles.primary]: color === "primary",
        [styles.light]: color === "light",
      })}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: string.isRequired,
  fontSize: oneOf([12, 16, 18, 20]),
  type: string,
  onClick: func,
};
