import React, { useState } from "react";

import { SearchIcon } from "../Icons";
import { SearchResult } from "../SearchResult";
import styles from "./Search.module.css";

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleFocus = (event) => {
    setIsFocus(true);
    setSearchInput(event.target.value);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <div className={styles.wrapper}>
      <SearchIcon />
      <input
        type="text"
        placeholder="Search by author, title, name"
        className={styles.input}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={searchInput}
      />
      <SearchResult query={searchInput} open={isFocus} />
    </div>
  );
};
