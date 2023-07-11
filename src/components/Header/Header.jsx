import React from "react";

import { LogoIcon } from "../Icons";
import { Menu } from "../Menu";
import { Search } from "../Search";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchWrapper}>
        <LogoIcon className={styles.logo} />
        <Search />
      </div>
      <Menu />
    </div>
  );
};
