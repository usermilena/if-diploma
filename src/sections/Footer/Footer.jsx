import React from "react";
import { useNavigate } from "react-router-dom";

import { FacebookLogo, InstagramLogo } from "../../components/Icons";
import styles from "./Footer.module.css";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionsWrapper}>
        <div className={styles.columnWrapper}>
          <h4 className={styles.title}>About Fox Library</h4>
          <button
            type="button"
            onClick={() => {
              navigate("about-us");
            }}
            className={styles.text}
          >
            About us
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("privacy-and-security");
            }}
            className={styles.text}
          >
            Privacy&Security
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("contact-us");
            }}
            className={styles.text}
          >
            Contact us
          </button>
        </div>
        <div className={styles.columnWrapper}>
          <h4 className={styles.title}>Help</h4>
          <button
            onClick={() => {
              navigate("help-center");
            }}
            type="button"
            className={styles.text}
          >
            Help center
          </button>
          <button
            onClick={() => {
              navigate("FAQs");
            }}
            type="button"
            className={styles.text}
          >
            FAQs
          </button>
        </div>
        <div className={styles.columnWrapper}>
          <h4 className={styles.title}>My account</h4>
          <button
            onClick={() => {
              navigate("settings");
            }}
            type="button"
            className={styles.text}
          >
            Edit profile
          </button>
          <button
            onClick={() => {
              navigate("home");
            }}
            type="button"
            className={styles.text}
          >
            My orders
          </button>
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
