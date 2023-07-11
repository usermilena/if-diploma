import React from "react";

import { IntroImage } from "../../assets/images/IntroImage";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";

export const IntroPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <h1>BIld your library</h1>
        <h2>Over 400.000 books from fiction to the business literature</h2>
        <IntroImage />
      </Wrapper>
    </>
  );
};
