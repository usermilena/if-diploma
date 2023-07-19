import React from "react";
import { Field } from "react-final-form";

import { string } from "prop-types";

import styles from "./FormInput.module.css";

// const required = (value) => (value ? undefined : "Required");

export const FormInput = ({
  label,
  type = "text",
  component = "input",
  name,
  value,
}) => {
  return (
    <>
      <label className={styles.label}>{label}</label>
      <Field
        name={name}
        component={component}
        type={type}
        className={styles.input}
        initialValue={value}
        required
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
