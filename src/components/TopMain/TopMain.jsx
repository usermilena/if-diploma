import React from "react";

import { SearchForm } from "../Search/SearchForm";
import "./TopMain.css";

export const TopMain = () => {
  return (
    <main className="top__main--container col-lg-12 col-sm-6">
      <h1 className="top__title">
        Discover stays <br />
        to live, work or just relax
      </h1>
      <SearchForm />
    </main>
  );
};
