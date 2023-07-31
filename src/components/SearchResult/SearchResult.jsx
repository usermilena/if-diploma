import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import { useClickOutside } from "../../hooks/useClickOutside";
import styles from "./SearchResult.module.css";

export const SearchResult = ({ query }) => {
  const [filteredBooks, setFilteredBooks] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const books = useSelector((state) => state.books.all);

  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (query) {
      const filteredBooks = books.filter((book) => {
        return (
          book.name.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase())
        );
      });
      setFilteredBooks(filteredBooks);
      setIsOpen(!!filteredBooks.length);
    }
  }, [query]);

  return (
    <>
      {isOpen && (
        <ul className={styles.wrapper}>
          {filteredBooks.map(({ id, author, imageUrl, name, released }) => (
            <div ref={ref} key={uuidv4()}>
              <Link className={styles.bookWrapper} to={`/${id}`}>
                <img
                  className={styles.image}
                  src={imageUrl}
                  alt={`Book jacket of ${name} by ${author}`}
                />
                <div className={styles.captionWrapper}>
                  <div className={styles.title}>{name}</div>
                  <div className={styles.subtitle}>
                    - {author}, {released}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};
