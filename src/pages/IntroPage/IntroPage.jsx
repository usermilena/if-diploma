import React from "react";

import { IntroImage } from "../../assets/images/IntroImage";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import styles from "./IntroPage.module.css";

export const IntroPage = () => {
  return (
    <Wrapper className={styles.wrapper}>
      <Header />
      <div className={styles.mainWrapper}>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>BIld your library</h1>
          <h2 className={styles.text}>
            Over 400.000 books from fiction to the business literature
          </h2>
          <Button text="Let’s start" className={styles.button} />
        </div>
        <IntroImage />
      </div>
    </Wrapper>
  );
};
