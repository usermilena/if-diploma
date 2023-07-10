import React from "react";

import { AppStoreIcon, GooglePlayIcon } from "../Icons";
import "./AppsFooter.css";

export const AppsFooter = () => {
  return (
    <div className="top__apps">
      <GooglePlayIcon className="top__apps--google-play" />
      <AppStoreIcon className="top__apps--app-store" />
    </div>
  );
};
