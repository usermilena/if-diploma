import React from "react";

import { string } from "prop-types";

export const Label = ({ className, text }) => {
  return <label className={className}>{text}</label>;
};

Label.propTypes = {
  className: string,
  text: string.isRequired,
};
