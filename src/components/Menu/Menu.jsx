import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import classNames from "classnames";

import { ArrowIcon } from "../../components/Icons";
import { useClickOutside } from "../../hooks/useClickOutside";
import { AccountModal } from "../AccountModal";
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
        <button
          className={classNames(styles.item, {
            [styles.active]: location.pathname === "/all",
          })}
          onClick={() => {
            navigate("/all");
          }}
        >
          All books
        </button>
        <button
          className={classNames(styles.item, {
            [styles.active]: location.pathname === "/home",
          })}
          onClick={() => {
            navigate("/home");
          }}
        >
          Your orders
        </button>
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
        {isAccountModalOpen && <AccountModal />}
      </div>
    </div>
  );
};
