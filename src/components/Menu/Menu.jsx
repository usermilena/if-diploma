import React from "react";

import styles from "./Menu.module.css";

export const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.item}>Log in</button>
      <button className={styles.item}>Sign up</button>
    </div>
  );
};
