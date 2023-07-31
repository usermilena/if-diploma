import React, { useState } from "react";

import { SearchIcon } from "../Icons";
import { SearchResult } from "../SearchResult";
import styles from "./Search.module.css";

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <SearchIcon />
      <input
        type="text"
        placeholder="Search by author, title, name"
        className={styles.input}
        onChange={handleChange}
        value={searchInput}
      />
      <SearchResult query={searchInput} />
    </div>
  );
};
