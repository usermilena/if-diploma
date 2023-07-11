import React from "react";

import classNames from "classnames";

import styles from "./Wrapper.module.css";

export const Wrapper = ({ children, className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>{children}</div>
  );
};
