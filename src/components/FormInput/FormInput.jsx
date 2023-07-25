import React from "react";
import { Field } from "react-final-form";

import classNames from "classnames";
import { string } from "prop-types";

import styles from "./FormInput.module.css";

export const FormInput = ({
  label,
  type = "text",
  component = "input",
  name,
  value,
  required = true,
  className,
}) => {
  return (
    <>
      <label className={classNames(className, styles.label)}>{label}</label>
      <Field
        name={name}
        component={component}
        type={type}
        className={styles.input}
        initialValue={value}
        required={required}
      />
    </>
  );
};

FormInput.propTypes = {
  label: string,
  type: string,
  name: string.isRequired,
  placeholder: string,
};
