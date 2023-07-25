import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import classNames from "classnames";

import { ArrowIcon } from "../../components/Icons";
import { useClickOutside } from "../../hooks/useClickOutside";
import { AccountDropdown } from "../AccountDropdown";
import { Button } from "../Button";
import styles from "./Menu.module.css";

export const Menu = () => {
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef();

  useClickOutside(ref, () => {
    if (isAccountModalOpen) setIsAccountModalOpen(false);
  });

  const openAccountModal = () => {
    setIsAccountModalOpen(!isAccountModalOpen);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonsWrapper}>
        <Button
          className={classNames(styles.item, {
            [styles.active]: location.pathname === "/all",
          })}
          onClick={() => {
            navigate("/all");
          }}
          text="All books"
        />
        <Button
          className={classNames(styles.item, {
            [styles.active]: location.pathname === "/home",
          })}
          onClick={() => {
            navigate("/home");
          }}
          text="Your orders"
        />
      </div>
      <div onClick={openAccountModal} className={styles.accountWrapper}>
        <img
          src={require("../../assets/images/default-user-avatar.png")}
          alt="Default user avatar"
          unselectable="on"
        />
        <ArrowIcon
          className={classNames({ [styles.rotateArrow]: isAccountModalOpen })}
        />
        {isAccountModalOpen && <AccountDropdown />}
      </div>
    </div>
  );
};
