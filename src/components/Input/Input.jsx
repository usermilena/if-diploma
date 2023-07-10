import React from "react";

import { func, string } from "prop-types";

export const Input = ({
  onChange,
  placeholder,
  autoComplete = "off",
  className,
}) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      autoComplete={autoComplete}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  onChange: func,
  placeholder: string,
  autoComplete: string,
  className: string,
};
