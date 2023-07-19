import React from "react";
import { Form } from "react-final-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setUser } from "../../store/slices/auth.slice";
import { Button } from "../Button";
import { FormInput } from "../FormInput";
import { CloseIcon } from "../Icons";
import styles from "./LogInModal.module.css";

export const LogInModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    dispatch(setUser(values));
    navigate("home");
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.wrapper}>
          <h3 className={styles.title}>Log In to Fox Library</h3>
          <FormInput label="Username" name="username" />
          <FormInput label="Password" name="password" />
          <Button type="form" fontSize={18} text="Log In" />
          <CloseIcon className={styles.closeIcon} onClick={closeModal} />
        </form>
      )}
    ></Form>
  );
};
