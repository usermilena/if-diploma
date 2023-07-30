import React from "react";

import classNames from "classnames";
import { array, func, string } from "prop-types";

import styles from "./BooksList.module.css";

export const BooksList = ({ data, title, emptyDataMessage, renderItem }) => {
  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      <div
        className={classNames({
          [styles.messageWrapper]: data.length < 1,
          [styles.booksWrapper]: data.length >= 1,
        })}
      >
        {data?.length >= 1 ? (
          data.map(renderItem)
        ) : (
          <p className={styles.message}>{emptyDataMessage}</p>
        )}
      </div>
    </>
  );
};

BooksList.propTypes = {
  data: array,
  title: string.isRequired,
  renderItem: func.isRequired,
  emptyDataMessage: string,
};
