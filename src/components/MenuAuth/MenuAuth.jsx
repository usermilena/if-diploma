import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

import classNames from "classnames";

import { setIsSignUpOpen } from "../../store/slices/modals.slice";
import { LogInModal } from "../LogInModal";
import { SignUpModal } from "../SignUpModal";
import styles from "./MenuAuth.module.css";

export const customStyles = {
  content: {
    top: "47%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: "8px",
    padding: 0,
  },
  overlay: {
    background: "rgba(181, 181, 181, 0.8)",
  },
};

Modal.setAppElement("#root");

export const MenuAuth = () => {
  const [logInIsOpen, setLogInIsOpen] = useState(false);
  const isSignUpOpen = useSelector((state) => state.modals.isSignUpOpen);
  const dispatch = useDispatch();

  const openSignUp = () => {
    dispatch(setIsSignUpOpen(true));
  };
  const closeSignUp = () => {
    dispatch(setIsSignUpOpen(false));
  };

  const openLogIn = () => {
    setLogInIsOpen(true);
  };
  const closeLogIn = () => {
    setLogInIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <button
        onClick={openLogIn}
        className={classNames(styles.item, {
          [styles.active]: logInIsOpen,
        })}
      >
        Log in
      </button>
      <Modal
        isOpen={logInIsOpen}
        onRequestClose={closeLogIn}
        contentLabel="Log in modal"
        style={customStyles}
      >
        <LogInModal closeModal={closeLogIn} />
      </Modal>
      <button
        onClick={openSignUp}
        className={classNames(styles.item, {
          [styles.active]: isSignUpOpen,
        })}
      >
        Sign up
      </button>
      <Modal
        isOpen={isSignUpOpen}
        onRequestClose={closeSignUp}
        contentLabel="Sign up modal"
        style={customStyles}
      >
        <SignUpModal closeModal={closeSignUp} />
      </Modal>
    </div>
  );
};
