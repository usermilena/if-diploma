import React from "react";
import { useSelector } from "react-redux";

import { authStatuses } from "../../constants/authStatuses";
import { HeaderNavigation } from "../HeaderNavigation";
import { LogoIcon } from "../Icons";
import "./TopHeader.css";

export const TopHeader = () => {
  const loggedOut = useSelector(
    (state) => state.auth.status === authStatuses.loggedOut
  );

  return (
    <header className="top__header col-lg-12 col-sm-6">
      <LogoIcon className="top__header--logo" />
      {!loggedOut && <HeaderNavigation />}
    </header>
  );
};
