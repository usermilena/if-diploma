import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./SearchResult.module.css";

export const SearchResult = memo(({ query, open }) => {
  const [state, setState] = useState(null);
  const books = useSelector((state) => state.books.all);

  useEffect(() => {
    if (!query || !open) {
      setState(null);
      return;
    }

    const res = books.filter((book) => {
      return (
        book.name.toLowerCase().match(query.toLowerCase()) ||
        book.author.toLowerCase().match(query.toLowerCase())
      );
    });
    setState(res);
  }, [query, open]);

  if (!state) {
    return null;
  }

  return (
    <ul className={styles.wrapper}>
      {state.map(({ id, author, imageUrl, name, released }) => (
        <li key={id} className={styles.bookWrapper}>
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
        </li>
      ))}
    </ul>
  );
});
