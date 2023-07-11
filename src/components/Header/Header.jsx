import React from "react";

import { LogoIcon } from "../Icons";
import { Menu } from "../Menu";
import { Search } from "../Search";
import { Wrapper } from "../Wrapper";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <Wrapper className={styles.wrapper}>
      <LogoIcon className={styles.logo} />
      <Search />
      <Menu />
    </Wrapper>
  );
};
