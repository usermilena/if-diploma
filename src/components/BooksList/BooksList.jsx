import React from "react";

import classNames from "classnames";
import { array, string } from "prop-types";

import { BookCard } from "../BookCard";
import styles from "./BooksList.module.css";

export const BooksList = ({ data, title, emptyDataMessage }) => {
  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      <div
        className={classNames({
          [styles.messageWrapper]: !data,
          [styles.booksWrapper]: data,
        })}
      >
        {data ? (
          data.map((el) => <BookCard el={el} key={el.id} />)
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
};
