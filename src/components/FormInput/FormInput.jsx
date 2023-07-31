import React from "react";
import { Field } from "react-final-form";

import classNames from "classnames";
import { string } from "prop-types";

import { ErrorExclamation } from "../Icons";
import styles from "./FormInput.module.css";

export const FormInput = ({
  label,
  type = "text",
  component = "input",
  name,
  value,
  required = true,
  className,
  inputClassName,
  isError,
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={classNames(className, styles.label)}>{label}</label>
      <Field
        name={name}
        component={component}
        type={type}
        className={classNames(inputClassName, styles.input)}
        initialValue={value}
        required={required}
      />
      {isError && <ErrorExclamation className={styles.errorInput} />}
    </div>
  );
};

FormInput.propTypes = {
  label: string,
  type: string,
  name: string.isRequired,
  placeholder: string,
};
