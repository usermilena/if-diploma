import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import classNames from "classnames";

import { ArrowIcon } from "../../components/Icons";
import styles from "./Menu.module.css";

export const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonsWrapper}>
        <button
          className={classNames(styles.item, {
            [styles.active]: location.pathname === "/all",
          })}
          onClick={() => {
            navigate("/all");
          }}
        >
          All books
        </button>
        <button
          className={classNames(styles.item, {
            [styles.active]: location.pathname === "/home",
          })}
          onClick={() => {
            navigate("/home");
          }}
        >
          Your orders
        </button>
      </div>
      <div className={styles.accountWrapper}>
        <img
          src={require("../../assets/images/user-icon.png")}
          alt="User icon"
        />
        <ArrowIcon />
      </div>
    </div>
  );
};
