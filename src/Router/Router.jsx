import React from "react";
import { Route, Routes } from "react-router-dom";

import { ProtectedLayout } from "../components/ProtectedLayout";
import { Home } from "../pages/Home";
import {
  AboutUs,
  PrivacySecurity,
  ContactUs,
  HelpCenter,
  FAQs,
} from "../pages/InfoPages";
import { IntroPage } from "../pages/IntroPage";
import { AccountSettings } from "../sections/AccountSettings";
import { AllBooks } from "../sections/AllBooks";
import { BookPage } from "../sections/BookPage";

export const Router = () => {
  return (
    <Routes>
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<IntroPage />} />
        <Route path="home" element={<Home />} />
        {/* <Route path="/home/:bookId" element={<BookPage />} /> */}
        <Route path="all" element={<AllBooks />} />
        {/* <Route path="/all/:bookId" element={<BookPage />} /> */}
        <Route path="about-us" element={<AboutUs />} />
        <Route path="privacy-and-security" element={<PrivacySecurity />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="help-center" element={<HelpCenter />} />
        <Route path="FAQs" element={<FAQs />} />
        <Route path="settings" element={<AccountSettings />} />
      </Route>
    </Routes>
  );
};
