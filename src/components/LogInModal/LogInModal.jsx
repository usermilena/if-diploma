import React, { useState } from "react";
import { Form } from "react-final-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setUser } from "../../store/slices/auth.slice";
import { Button } from "../Button";
import { FormInput } from "../FormInput";
import { CloseIcon } from "../Icons";
import styles from "./LogInModal.module.css";

export const LogInModal = ({ closeModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const users = localStorage.getItem("users");
  const parsedUsers = JSON.parse(users);

  const onSubmit = async (values) => {
    if (parsedUsers) {
      const currentUser = parsedUsers.find(
        (user) =>
          user.username === values.username && user.password === values.password
      );

      if (currentUser) {
        dispatch(setUser(currentUser));
        navigate("home");
      }

      if (!currentUser) {
        setError(true);
        console.log("неправильно введен пароль");
      }
    }

    if (!parsedUsers) {
      setError(true);
      console.log("неправильно введен пароль");
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.wrapper}>
          <h3 className={styles.title}>Log In to Fox Library</h3>
          <FormInput
            inputClassName={error ? styles.errorInput : null}
            label="Username"
            name="username"
            isError={error}
          />
          <FormInput
            inputClassName={error ? styles.errorInput : null}
            label="Password"
            name="password"
            isError={error}
          />
          {error && (
            <span className={styles.errorMessage}>
              Please check if your username and password address you've entered
              is correct.
            </span>
          )}
          <Button
            type="form"
            text="Log In"
            variant="contained"
            color="primary"
            className={styles.button}
          />
          <CloseIcon className={styles.closeIcon} onClick={closeModal} />
        </form>
      )}
    ></Form>
  );
};
