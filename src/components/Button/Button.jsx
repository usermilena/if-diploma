import React from "react";

import classNames from "classnames";
import { string } from "prop-types";

import styles from "./Button.module.css";

export const Button = ({ text, className }) => {
  return (
    <button className={classNames(styles.button, className)}>{text}</button>
  );
};

Button.propTypes = {
  text: string.isRequired,
};
