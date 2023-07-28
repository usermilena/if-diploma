import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  setBookStatusToAvailable,
  setBookStatusToMy,
  setBookStatusToTaken,
  setBookStatusToWaiting,
} from "../../store/slices/books.slice";
import { Button } from "../Button";
import styles from "./BookCard.module.css";

export const BookCard = ({ el }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (el.status === "Available") {
      dispatch(setBookStatusToMy(el));
    }

    if (el.status === "Taken" && el.bookholder !== "Milena") {
      dispatch(setBookStatusToWaiting(el));
    }

    if (el.status === "Taken" && el.bookholder === "Milena") {
      dispatch(setBookStatusToAvailable(el));
    }

    if (el.status === "Waiting for" && el.bookholder !== "Milena") {
      dispatch(setBookStatusToTaken(el));
    }
  };

  return (
    <Link className={styles.wrapper}>
      <img className={styles.image} src={el.imageUrl} alt="Book cover" />
      <div className={styles.descriptionWrapper}>
        <Button
          text={el.status}
          variant="outlined"
          color={el.status.split(" ").join("").toLowerCase()}
        />
        {el.bookholder && (
          <span className={styles.bookholder}>Bookholder: {el.bookholder}</span>
        )}
        <span className={styles.title}>{el.name}</span>
        <span className={styles.author}>by {el.author}</span>
        <span>{el.rating}</span>
        <Button
          text={
            (el.status === "Taken" && el.bookholder === "Milena") ||
            el.status === "Waiting for"
              ? "Return"
              : "Order"
          }
          variant="contained"
          color={
            (el.status === "Taken" && el.bookholder === "Milena") ||
            el.status === "Waiting for"
              ? "light"
              : "primary"
          }
          onClick={handleClick}
          className={styles.button}
        />
      </div>
    </Link>
  );
};
