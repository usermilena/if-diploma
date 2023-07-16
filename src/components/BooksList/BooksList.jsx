import React from "react";

import { array, string } from "prop-types";

import { BookCard } from "../BookCard";
import { Button } from "../Button";
import styles from "./BooksList.module.css";

export const BooksList = ({ data, title }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.booksWrapper}>
        {data.map((el) => (
          <BookCard el={el} key={el.id} />
        ))}
      </div>
      <Button className={styles.button} text="Show more" />
    </div>
  );
};

BooksList.propTypes = {
  data: array.isRequired,
  title: string.isRequired,
};
