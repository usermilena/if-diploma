import React, { useEffect } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { IntroImage } from "../../assets/images/IntroImage";
import { Button } from "../../components/Button";
import { customStyles } from "../../components/MenuAuth";
import { SignUpModal } from "../../components/SignUpModal";
import { setIsSignUpOpen } from "../../store/slices/modals.slice";
import styles from "./IntroPage.module.css";

Modal.setAppElement("#root");

export const IntroPage = () => {
  const loggedOut = useSelector((state) => !state.auth.user);
  const isSignUpOpen = useSelector((state) => state.modals.isSignUpOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedOut) {
      navigate("home");
    }
  }, [loggedOut, navigate]);

  const openSignUp = () => {
    dispatch(setIsSignUpOpen(true));
  };
  const closeSignUp = () => {
    dispatch(setIsSignUpOpen(false));
  };

  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>Build your library</h1>
          <h2 className={styles.text}>
            Over 400.000 books from fiction to the business literature
          </h2>
          <Button
            onClick={openSignUp}
            text="Let’s start"
            className={styles.button}
            variant="contained"
            color="primary"
          />
          <Modal
            isOpen={isSignUpOpen}
            onRequestClose={closeSignUp}
            contentLabel="Sign up modal"
            style={customStyles}
          >
            <SignUpModal closeModal={closeSignUp} />
          </Modal>
        </div>
        <IntroImage />
      </div>
    </>
  );
};
