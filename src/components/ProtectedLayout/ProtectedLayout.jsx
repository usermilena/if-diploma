import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import { Footer } from "../Footer";
import { Header } from "../Header";
import styles from "./ProtectedLayout.module.css";

export const ProtectedLayout = () => {
  const loggedOut = useSelector((state) => !state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedOut) {
      navigate("/");
    }
  }, [loggedOut]);

  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <Outlet />
      </div>
      {!loggedOut && <Footer />}
    </>
  );
};
