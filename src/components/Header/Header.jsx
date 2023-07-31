import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LogoIcon } from "../Icons";
import { Menu } from "../Menu";
import { MenuAuth } from "../MenuAuth";
import { Search } from "../Search";
import styles from "./Header.module.css";

export const Header = () => {
  const loggedOut = useSelector((state) => !state.auth.user);
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchWrapper}>
        <LogoIcon
          className={styles.logo}
          onClick={() => {
            navigate("home");
          }}
        />
        {!loggedOut && <Search placeholder="Search by author, title, name" />}
      </div>
      {loggedOut && <MenuAuth />}
      {!loggedOut && <Menu />}
    </div>
  );
};
