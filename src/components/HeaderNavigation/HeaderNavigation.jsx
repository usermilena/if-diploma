import React, { useState } from "react";

import { DropDown } from "../DropDown";
import { AccountIcon, MenuIcon, ModeIcon } from "../Icons";
import "./HeaderNavigation.css";

export const HeaderNavigation = () => {
  const [isActive, setActive] = useState(false);

  return (
    <nav className="top__header--menu__wrapper">
      <ul className="top__header--menu">
        <li className="top__header--stays">Stays</li>
        <li className="top__header--attractions">Attractions</li>
        <li>
          <ModeIcon className="top__header--mode__icon" />
        </li>
        <li className="accont__icon--wrapper">
          <AccountIcon
            onClick={() => setActive(!isActive)}
            className="top__header--account__icon"
            fill={isActive ? "var(--accent-yellow)" : "var(--general-white)"}
          />
          {isActive && <DropDown className="accont__icon--dropdown--wrapper" />}
        </li>
        <li>
          <MenuIcon className="top__header--menu__icon" />
        </li>
      </ul>
    </nav>
  );
};
