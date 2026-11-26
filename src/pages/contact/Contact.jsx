import React from "react";
import "./Contact.scss";

import { Header } from "../../components/organisms/Header";
import { Footer } from "../../components/organisms/Footer";

import ContactIntro from "../../components/molecules/ContactIntro/ContactIntro";
import ContactSection from "../../components/organisms/ContactSection/ContactSection";

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />

      <ContactIntro />

      <ContactSection />

      <Footer />
    </div>
  );
};

export default Contact;
