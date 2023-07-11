import React from "react";

import classNames from "classnames";
import { node } from "prop-types";

import styles from "./Wrapper.module.css";

export const Wrapper = ({ children, className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>{children}</div>
  );
};

Wrapper.propTypes = {
  children: node.isRequired,
};
