import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../Button";
import styles from "./BookCard.module.css";

export const BookCard = ({ el }) => {
  return (
    <Link className={styles.wrapper}>
      <img className={styles.image} src={el.imageUrl} alt="Book cover" />
      <div className={styles.descriptionWrapper}>
        <span>Status</span>
        <span>*Bookholder</span>
        <span>{el.name}</span>
        <span>by {el.author}</span>
        <span>Rating</span>
        <Button fontSize={12} text="Order" />
      </div>
    </Link>
  );
};
