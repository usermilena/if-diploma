import React from "react";
import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";
import { FormInput } from "../../components/FormInput";
import { setUser } from "../../store/slices/auth.slice";
import styles from "./AccountSettings.module.css";

export const AccountSettings = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const onSubmit = async (values) => {
    dispatch(setUser(values));
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.wrapper}>
          <h3 className={styles.title}>Settings</h3>
          <img
            src={require("../../assets/images/default-user-avatar.png")}
            alt="Default user avatar"
            className={styles.img}
          />
          <Button type="button" fontSize={12} text="Change photo" />
          <FormInput
            label="Username"
            name="username"
            value={user ? user.username : ""}
          />
          {/* <FormInput
            label="Birthdate"
            component={Calendar}
            name="date"
            value={user.date}
          /> */}
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={user ? user.email : ""}
          />
          <FormInput
            label="Password"
            name="password"
            value={user ? user.password : ""}
          />
          <FormInput label="New password" name="newPassword" />
          <Button type="submit" text="Save" fontSize={16} />
        </form>
      )}
    ></Form>
  );
};
