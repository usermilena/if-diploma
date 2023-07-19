import React from "react";
import { useSelector } from "react-redux";

import { BooksList } from "../../components/BooksList";
import { BooksWrapper } from "../../components/BooksWrapper";
import styles from "./Home.module.css";

export const Home = () => {
  const myWaitingBooks = useSelector((state) => state.books.myWaiting);
  const myBooks = useSelector((state) => state.books.my);

  return (
    <div className={styles.wrapper}>
      <BooksWrapper className={styles.booksWrapper}>
        <BooksList
          data={myWaitingBooks}
          title="Waiting for"
          emptyDataMessage="Oops! You are not waiting for any book "
        />
      </BooksWrapper>
      <BooksWrapper className={styles.booksWrapper}>
        <BooksList
          data={myBooks}
          title="List of your books"
          emptyDataMessage="Oops! You haven't added any book yet"
        />
      </BooksWrapper>
    </div>
  );
};
