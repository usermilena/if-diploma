import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Button } from "../../components/Button";
import { StarRating } from "../../components/Icons";
import {
  setBookStatusToAvailable,
  setBookStatusToMy,
  setBookStatusToTaken,
  setBookStatusToWaiting,
} from "../../store/slices/books.slice";
import styles from "./BookPage.module.css";

export const BookPage = () => {
  let { bookId } = useParams({});
  const books = useSelector((state) => state.books.all);
  const dispatch = useDispatch();
  const [hiddenText, setHiddenText] = useState(true);

  const book = books.find((el) => el.id === bookId);

  const orderBook = () => {
    if (book.status === "Available") {
      dispatch(setBookStatusToMy(book));
    }

    if (book.status === "Taken" && book.bookholder !== "Milena") {
      dispatch(setBookStatusToWaiting(book));
    }

    if (book.status === "Taken" && book.bookholder === "Milena") {
      dispatch(setBookStatusToAvailable(book));
    }

    if (book.status === "Waiting for" && book.bookholder !== "Milena") {
      dispatch(setBookStatusToTaken(book));
    }
  };

  const showMore = () => {
    setHiddenText(!hiddenText);
  };

  return (
    <div className={styles.wrapper}>
      <img
        src={book.imageUrl}
        alt={`Book jacket of ${book.name} by ${book.author}`}
        className={styles.image}
      />
      <div className={styles.descriptionWrapper}>
        <StarRating
          width="25"
          height="24"
          className={styles.rating}
          rating={book.rating}
        />
        <h3 className={styles.title}>{book.name}</h3>
        <h5 className={styles.author}>{book.author}</h5>
        <span className={styles.subtitle}>
          {book.length}, released in {book.released}
        </span>
        <Button
          className={styles.orderButton}
          text={
            (book.status === "Taken" && book.bookholder === "Milena") ||
            book.status === "Waiting for"
              ? "Return"
              : "Order"
          }
          variant="contained"
          color={
            (book.status === "Taken" && book.bookholder === "Milena") ||
            book.status === "Waiting for"
              ? "light"
              : "primary"
          }
          onClick={orderBook}
        />
        <h4 className={styles.aboutTitle}>About book</h4>
        <div
          className={hiddenText ? styles.bookCaptionHidden : styles.bookCaption}
          dangerouslySetInnerHTML={{ __html: book.description }}
        ></div>
        {hiddenText && (
          <Button
            text="Show more"
            variant="contained"
            color="light"
            onClick={showMore}
          />
        )}
      </div>
    </div>
  );
};
