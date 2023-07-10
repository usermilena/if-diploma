import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import { authStatuses } from "../../constants/authStatuses";

export const ProtectedLayout = () => {
  const loggedOut = useSelector(
    (state) => state.auth.status === authStatuses.loggedOut
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedOut) {
      navigate("/login");
    }
  }, [loggedOut, navigate]);

  return <Outlet />;
};
