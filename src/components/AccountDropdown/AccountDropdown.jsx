import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setUser } from "../../store/slices/auth.slice";
import { Button } from "../Button";
import styles from "./AccountDropdown.module.css";

export const AccountDropdown = forwardRef((props, ref) => {
  const username = useSelector((state) => state.auth.user.username);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{username}</span>
      <Button
        onClick={() => {
          navigate("settings");
        }}
        className={styles.button}
        text="Settings"
      />
      <Button
        onClick={() => {
          navigate("home");
        }}
        className={styles.button}
        text="My orders"
      />
      <Button
        onClick={() => {
          dispatch(setUser(null));
        }}
        className={`${styles.button} ${styles.buttonLogOut}`}
        text="Log out"
      />
    </div>
  );
});
