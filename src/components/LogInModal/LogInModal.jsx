import React from "react";
import { Field, Form } from "react-final-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setUser } from "../../store/slices/auth.slice";
import { Button } from "../Button";
import { CloseIcon } from "../Icons";
import styles from "./LogInModal.module.css";

export const LogInModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    dispatch(setUser(values));
    navigate("/home");
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.wrapper}>
          <h3 className={styles.title}>Log In to Fox Library</h3>
          <label className={styles.label}>Username</label>
          <Field
            name="username"
            component="input"
            type="text"
            className={styles.input}
            required
          />
          <label className={styles.label}>Password</label>
          <Field
            name="password"
            component="input"
            type="text"
            className={styles.input}
            required
          />
          <Button type="form" fontSize={18} text="Log In" />
          <CloseIcon className={styles.closeIcon} onClick={closeModal} />
        </form>
      )}
    ></Form>
  );
};
