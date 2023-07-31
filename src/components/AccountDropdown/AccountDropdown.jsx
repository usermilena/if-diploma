import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import classNames from "classnames";

import { useClickOutside } from "../../hooks/useClickOutside";
import { setUser } from "../../store/slices/auth.slice";
import { Button } from "../Button";
import { ArrowIcon } from "../Icons";
import styles from "./AccountDropdown.module.css";

export const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const username = useSelector((state) => state.auth.user.username);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ref = useRef(null);

  const openAccountDropdown = () => {
    setIsOpen(!isOpen);
  };
  const closeAccountDropdown = () => {
    setIsOpen(false);
  };

  useClickOutside(ref, closeAccountDropdown);

  return (
    <div
      onClick={openAccountDropdown}
      className={styles.accountWrapper}
      ref={ref}
    >
      <img
        src={require("../../assets/images/default-user-avatar.png")}
        alt="Default user avatar"
        unselectable="on"
      />
      <ArrowIcon className={classNames({ [styles.rotateArrow]: isOpen })} />
      {isOpen && (
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
      )}
    </div>
  );
};
