import React from "react";

import classNames from "classnames";

import styles from "./BooksWrapper.module.css";

export const BooksWrapper = ({ children, className }) => {
  return (
    <div className={classNames(className, styles.wrapper)}>{children}</div>
  );
};
