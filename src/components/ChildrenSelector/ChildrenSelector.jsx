import React from "react";

import { string } from "prop-types";
import { v4 as uuidv4 } from "uuid";

export const ChildrenSelector = ({ className }) => {
  return (
    <select className={className}>
      {Array(18)
        .fill("")
        .map((el, index) => (
          <option key={uuidv4()}>{index} years old</option>
        ))}
    </select>
  );
};

ChildrenSelector.propTypes = {
  className: string,
};
