import React from "react";

import styles from "./InfoSection.module.css";

export const InfoSection = ({ title, text }) => {
  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </>
  );
};
