import React from "react";
import { Field, Form } from "react-final-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setUser } from "../../store/slices/auth.slice";
import { Button } from "../Button";
import { Calendar } from "../Calendar";
import { CloseIcon } from "../Icons";
import styles from "./SignUpModal.module.css";

export const SignUpModal = ({ closeModal }) => {
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
          <h3 className={styles.title}>Welcome to Fox Library</h3>
          <label className={styles.label}>Username</label>
          <Field
            name="username"
            component="input"
            type="text"
            className={styles.input}
            required
          />
          <label className={styles.label}>Your birthdate</label>
          <Field
            name="date"
            component={Calendar}
            className={styles.input}
            required
          />
          <label className={styles.label}>Email</label>
          <Field
            name="email"
            component="input"
            type="email"
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
          <Button type="submit" fontSize={18} text="Sign up" />
          <CloseIcon className={styles.closeIcon} onClick={closeModal} />
        </form>
      )}
    ></Form>
  );
};
