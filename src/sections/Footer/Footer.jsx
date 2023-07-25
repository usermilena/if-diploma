import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { FacebookLogo, InstagramLogo } from "../../components/Icons";
import styles from "./Footer.module.css";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionsWrapper}>
        <div className={styles.columnWrapper}>
          <h4 className={styles.title}>About Fox Library</h4>
          <Button
            onClick={() => {
              navigate("about-us");
            }}
            className={styles.text}
            text="About us"
          />
          <Button
            onClick={() => {
              navigate("privacy-and-security");
            }}
            className={styles.text}
            text="Privacy&Security"
          />
          <Button
            onClick={() => {
              navigate("contact-us");
            }}
            className={styles.text}
            text="Contact us"
          />
        </div>
        <div className={styles.columnWrapper}>
          <h4 className={styles.title}>Help</h4>
          <Button
            onClick={() => {
              navigate("help-center");
            }}
            className={styles.text}
            text="Help center"
          />
          <Button
            onClick={() => {
              navigate("FAQs");
            }}
            className={styles.text}
            text="FAQs"
          />
        </div>
        <div className={styles.columnWrapper}>
          <h4 className={styles.title}>My account</h4>
          <Button
            onClick={() => {
              navigate("settings");
            }}
            className={styles.text}
            text="Edit profile"
          />
          <Button
            onClick={() => {
              navigate("home");
            }}
            className={styles.text}
            text="My orders"
          />
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
