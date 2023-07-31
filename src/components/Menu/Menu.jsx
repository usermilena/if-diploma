import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import classNames from "classnames";

import { AccountDropdown } from "../AccountDropdown";
import { Button } from "../Button";
import styles from "./Menu.module.css";

export const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonsWrapper}>
        <Button
          className={classNames(styles.item, {
            [styles.active]: location.pathname === "/all",
          })}
          onClick={() => {
            navigate("/all");
          }}
          text="All books"
        />
        <Button
          className={classNames(styles.item, {
            [styles.active]: location.pathname === "/home",
          })}
          onClick={() => {
            navigate("/home");
          }}
          text="Your orders"
        />
      </div>
      <AccountDropdown />
    </div>
  );
};
