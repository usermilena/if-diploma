import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setUser } from "../../store/slices/auth.slice";
import styles from "./AccountModal.module.css";

export const AccountModal = forwardRef((props, ref) => {
  const username = useSelector((state) => state.auth.user.username);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{username}</span>
      <button
        type="button"
        onClick={() => {
          navigate("settings");
        }}
        className={styles.button}
      >
        Settings
      </button>
      <button
        type="button"
        onClick={() => {
          navigate("home");
        }}
        className={styles.button}
      >
        My orders
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(setUser(null));
        }}
        className={`${styles.button} ${styles.buttonLogOut}`}
      >
        Log out
      </button>
    </div>
  );
});
