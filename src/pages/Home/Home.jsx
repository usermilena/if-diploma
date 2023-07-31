import React from "react";
import { useSelector } from "react-redux";

import { BookCardForHome } from "../../components/BookCardForHome";
import { BooksList } from "../../components/BooksList";
import { BooksWrapper } from "../../components/BooksWrapper";
import styles from "./Home.module.css";

export const Home = () => {
  const books = useSelector((state) => state.books.all);

  const myBooks = books.filter(
    (book) => book.status === "Taken" && book.bookholder === "Milena"
  );
  const myWaitingBooks = books.filter((book) => book.status === "Waiting for");

  return (
    <div className={styles.wrapper}>
      <BooksWrapper className={styles.booksWrapper}>
        <BooksList
          renderItem={(el) => <BookCardForHome el={el} key={el.id} />}
          data={myWaitingBooks}
          title="Waiting for"
          emptyDataMessage="Oops! You are not waiting for any book"
        />
      </BooksWrapper>
      <BooksWrapper className={styles.booksWrapper}>
        <BooksList
          renderItem={(el) => <BookCardForHome el={el} key={el.id} />}
          data={myBooks}
          title="List of your books"
          emptyDataMessage="Oops! You haven't added any book yet"
        />
      </BooksWrapper>
    </div>
  );
};
