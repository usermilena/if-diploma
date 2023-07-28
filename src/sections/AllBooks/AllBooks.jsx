import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BookCard } from "../../components/BookCard";
import { BooksList } from "../../components/BooksList";
import { BooksWrapper } from "../../components/BooksWrapper";
import { Button } from "../../components/Button";
import { booksUrl } from "../../constants/urls";
import { useData } from "../../services/getData";
import { setAllBooks } from "../../store/slices/books.slice";
import styles from "./AllBooks.module.css";

export const AllBooks = () => {
  const dispatch = useDispatch();
  const [bookCount, setBookCount] = useState(4);
  const books = useSelector((state) => state.books.all);

  const showMore = () => {
    if (bookCount <= books.length) {
      setBookCount(bookCount + 4);
    }
  };

  useData(booksUrl).then((data) => {
    dispatch(setAllBooks(data));
  });

  return (
    <BooksWrapper>
      <BooksList
        renderItem={(el) => <BookCard el={el} key={el.id} />}
        data={books.slice(0, bookCount)}
        title="All books"
      />
      <Button
        className={styles.button}
        text="Show more"
        variant="contained"
        color="primary"
        onClick={showMore}
        disabled={bookCount >= books.length}
      />
    </BooksWrapper>
  );
};
