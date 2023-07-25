import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BooksList } from "../../components/BooksList";
import { BooksWrapper } from "../../components/BooksWrapper";
import { Button } from "../../components/Button";
import { booksUrl } from "../../constants/urls";
import { getData } from "../../services/getData";
import { setAllBooks } from "../../store/slices/books.slice";
import styles from "./AllBooks.module.css";

export const AllBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.all);

  useEffect(() => {
    getData(booksUrl).then((data) => {
      dispatch(setAllBooks(data));
    });
  }, []);

  return (
    <BooksWrapper>
      <BooksList data={books.slice(0, 4)} title="All books" />
      <Button
        className={styles.button}
        text="Show more"
        variant="contained"
        color="primary"
      />
    </BooksWrapper>
  );
};
