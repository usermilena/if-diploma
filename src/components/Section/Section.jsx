import React from "react";

import classNames from "classnames";
import { string, node } from "prop-types";

import "./Section.css";

export const Section = ({ text, children, className }) => {
  return (
    <section className={classNames("section", className)}>
      {text && <h2 className="title">{text}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  text: string,
  className: string,
  children: node.isRequired,
};
