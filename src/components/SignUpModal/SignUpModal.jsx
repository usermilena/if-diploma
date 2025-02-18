import React from "react";
import { Form } from "react-final-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setUser } from "../../store/slices/auth.slice";
import { Button } from "../Button";
import { Calendar } from "../Calendar";
import { FormInput } from "../FormInput";
import { CloseIcon } from "../Icons";
import styles from "./SignUpModal.module.css";

export const SignUpModal = ({ closeModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    let arr = [];
    const users = localStorage.getItem("users");
    const parsedUsers = JSON.parse(users);

    if (!parsedUsers) {
      arr.push(values);
      localStorage.setItem("users", JSON.stringify(arr));
    }

    if (parsedUsers) {
      parsedUsers.push(values);
      localStorage.setItem("users", JSON.stringify(parsedUsers));
    }

    navigate("home");
    dispatch(setUser(values));
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.wrapper}>
          <h3 className={styles.title}>Welcome to Fox Library</h3>
          <FormInput label="Username" name="username" />
          <FormInput label="Your birthdate" component={Calendar} name="date" />
          <FormInput label="Email" type="email" name="email" />
          <FormInput label="Password" name="password" />
          <Button
            className={styles.button}
            type="submit"
            text="Sign up"
            variant="contained"
            color="primary"
          />
          <CloseIcon className={styles.closeIcon} onClick={closeModal} />
        </form>
      )}
    ></Form>
  );
};
