import React from "react";

import { SearchIcon } from "../Icons";
import styles from "./Search.module.css";

export const Search = () => {
  return (
    <div className={styles.wrapper}>
      <SearchIcon />
      <input
        type="text"
        placeholder="Search by author, title, name"
        className={styles.input}
      />
    </div>
  );
};
