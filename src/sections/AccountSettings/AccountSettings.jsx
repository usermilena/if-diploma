import React from "react";
import { Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../components/Button";
import { CalendarForSettings } from "../../components/Calendar";
import { FormInput } from "../../components/FormInput";
import {
  setUsername,
  setDate,
  setEmail,
  setPassword,
} from "../../store/slices/auth.slice";
import styles from "./AccountSettings.module.css";

export const AccountSettings = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const onSubmit = async (values) => {
    dispatch(setUsername(values.username));
    dispatch(setDate(values.date));
    dispatch(setEmail(values.email));
    values.newPassword && dispatch(setPassword(values.newPassword));
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.wrapper}>
          <h3 className={styles.title}>Settings</h3>
          <img
            src={require("../../assets/images/default-user-avatar-settings.png")}
            alt="Default user avatar"
            className={styles.img}
          />
          <Button
            type="button"
            fontSize={12}
            text="Change photo"
            color="light"
            className={styles.buttonAvatar}
          />
          <FormInput
            label="Username"
            name="username"
            value={user ? user.username : ""}
            required={false}
            className={styles.label}
          />
          <FormInput
            label="Birthdate"
            component={CalendarForSettings}
            name="date"
            value={user ? user.date : ""}
            required={false}
            className={styles.label}
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={user ? user.email : ""}
            required={false}
            className={styles.label}
          />
          <FormInput
            label="Password"
            name="password"
            value={user ? user.password : ""}
            required={false}
            className={styles.label}
          />
          <FormInput
            label="New password"
            name="newPassword"
            required={false}
            value=""
            className={styles.label}
          />
          <Button
            type="submit"
            text="Save"
            fontSize={16}
            className={styles.buttonSave}
          />
        </form>
      )}
    ></Form>
  );
};
