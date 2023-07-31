import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  setBookStatusToAvailable,
  setBookStatusToTaken,
} from "../../store/slices/books.slice";
import { Button } from "../Button";
import { StarRating } from "../Icons";
import styles from "./BookCardForHome.module.css";

export const BookCardForHome = ({ el }) => {
  const dispatch = useDispatch();

  const returnBook = () => {
    if (el.status === "Waiting for" && el.bookholder !== "Milena") {
      dispatch(setBookStatusToTaken(el));
    }

    if (el.status === "Taken" && el.bookholder === "Milena") {
      dispatch(setBookStatusToAvailable(el));
    }
  };

  return (
    <div className={styles.wrapper}>
      <Link to={`/${el.id}`}>
        <img className={styles.image} src={el.imageUrl} alt="Book cover" />
      </Link>
      <span className={styles.title}>
        {el.name} by {el.author}
      </span>
      <StarRating rating={el.rating} />
      <Button
        text="Return"
        variant="contained"
        color="light"
        onClick={returnBook}
      />
    </div>
  );
};
