import React from "react";

import { InfoSection } from "../../components/InfoSection";
import { FOOTER_TEXT } from "../../constants/footerText";

export const AboutUs = () => {
  return (
    <InfoSection
      title={FOOTER_TEXT.sections.aboutUs.title}
      text={FOOTER_TEXT.sections.aboutUs.text}
    />
  );
};

export const PrivacySecurity = () => {
  return (
    <InfoSection
      title={FOOTER_TEXT.sections.privacySecurity.title}
      text={FOOTER_TEXT.sections.privacySecurity.text}
    />
  );
};

export const ContactUs = () => {
  return (
    <InfoSection
      title={FOOTER_TEXT.sections.contactUs.title}
      text={FOOTER_TEXT.sections.contactUs.text}
    />
  );
};

export const HelpCenter = () => {
  return (
    <InfoSection
      title={FOOTER_TEXT.sections.helpCenter.title}
      text={FOOTER_TEXT.sections.helpCenter.text}
    />
  );
};

export const FAQs = () => {
  return (
    <InfoSection
      title={FOOTER_TEXT.sections.FAQs.title}
      text={FOOTER_TEXT.sections.FAQs.text}
    />
  );
};
