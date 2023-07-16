import React from "react";
import { Link } from "react-router-dom";

import { FacebookLogo, InstagramLogo } from "../Icons";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionsWrapper}>
        <div className={styles.columnWrapper}>
          <h4 className={styles.title}>About Fox Library</h4>
          <Link className={styles.text}>About us</Link>
          <Link className={styles.text}>Privacy&Security</Link>
          <Link className={styles.text}>Contact us</Link>
        </div>
        <div className={styles.columnWrapper}>
          <h4 className={styles.title}>Help</h4>
          <Link className={styles.text}>Help center</Link>
          <Link className={styles.text}>FAQs</Link>
        </div>
        <div className={styles.columnWrapper}>
          <h4 className={styles.title}>My account</h4>
          <Link className={styles.text}>Edit profile</Link>
          <Link className={styles.text}>My orders</Link>
        </div>
      </div>
      <div className={styles.columnWrapper}>
        <h4 className={styles.title}>Stay connected</h4>
        <div className={styles.mediasWrapper}>
          <a
            href="https://www.instagram.com/fox.library/"
            className={styles.text}
          >
            <InstagramLogo />
          </a>
          <a
            href="https://www.facebook.com/FoxLibraryKISD/"
            className={styles.text}
          >
            <FacebookLogo />
          </a>
        </div>
      </div>
    </div>
  );
};
