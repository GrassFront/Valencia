"use client";

import { useState } from "react";
import ContactHero from "./ContactHero";
import ContactProperties from "./ContactProperties";
import ContactFindYourWay from "./ContactFindYourWay";
import ContactEnquiry from "./ContactEnquiry";
import ContactWhatsAppSocial from "./ContactWhatsAppSocial";

export default function ContactPage() {
  const [prefilledProperty, setPrefilledProperty] = useState("");

  return (
    <div className="contact-page">
      <ContactHero />
      <ContactProperties onSelectProperty={setPrefilledProperty} />
      <ContactFindYourWay />
      <ContactEnquiry prefilledProperty={prefilledProperty} />
      <ContactWhatsAppSocial />
    </div>
  );
}
