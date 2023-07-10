import React from "react";
import { useDispatch } from "react-redux";

import { authStatuses } from "../../constants/authStatuses";
import { setStatus } from "../../store/slices/auth.slice";
import "./DropDown.css";

export const DropDown = ({ className }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={className}
      onClick={() => dispatch(setStatus(authStatuses.loggedOut))}
    >
      <button type="text" className="accont__icon--dropdown">
        Sign out
      </button>
    </div>
  );
};
