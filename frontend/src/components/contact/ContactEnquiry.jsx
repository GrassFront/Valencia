"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BrandSelect from "../common/BrandSelect";

export default function ContactEnquiry({ prefilledProperty = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    property: prefilledProperty || "",
    enquiryType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefilledProperty) {
      setFormData((prev) => ({ ...prev, property: prefilledProperty }));
      if (errors.property) {
        setErrors((prev) => ({ ...prev, property: undefined }));
      }
    }
  }, [prefilledProperty, errors.property]);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^[0-9\s+-]{7,16}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.property) {
      newErrors.property = "Please select a property";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      mobileNumber: "",
      email: "",
      property: "",
      enquiryType: "",
      message: "",
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="enquiry" className="contact-enquiry" aria-label="Send an enquiry">
      <div className="contact-enquiry-inner">
        {/* Left Column: Introduction & Benefits */}
        <div className="contact-enquiry-intro">
          {/* Eyebrow */}
          <div className="contact-enquiry-eyebrow">
            <span>WE’RE HERE TO HELP</span>
            <span className="contact-enquiry-eyebrow-line" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2 className="contact-enquiry-title">
            Let’s start a
            <br />
            conversation.
          </h2>

          {/* Description */}
          <p className="contact-enquiry-desc">
            Tell us what you have in mind and we’ll connect you with the right property team.
          </p>

          {/* 3 Benefits */}
          <div className="contact-enquiry-benefits">
            {/* Benefit 1: Stays & reservations */}
            <div className="contact-benefit-item">
              <div className="contact-benefit-icon">
                <Image
                  src="/images/ContactPage/Frame.svg"
                  alt="Stays & reservations"
                  width={48}
                  height={48}
                />
              </div>
              <div className="contact-benefit-copy">
                <h4>Stays &amp; reservations</h4>
                <div className="contact-benefit-line" aria-hidden="true" />
              </div>
            </div>

            {/* Benefit 2: Weddings & celebrations */}
            <div className="contact-benefit-item">
              <div className="contact-benefit-icon">
                <Image
                  src="/images/ContactPage/Frame 2.svg"
                  alt="Weddings & celebrations"
                  width={48}
                  height={48}
                />
              </div>
              <div className="contact-benefit-copy">
                <h4>Weddings &amp; celebrations</h4>
                <div className="contact-benefit-line" aria-hidden="true" />
              </div>
            </div>

            {/* Benefit 3: Dining & business gatherings */}
            <div className="contact-benefit-item">
              <div className="contact-benefit-icon">
                <Image
                  src="/images/ContactPage/Frame 3.svg"
                  alt="Dining & business gatherings"
                  width={48}
                  height={48}
                />
              </div>
              <div className="contact-benefit-copy">
                <h4>Dining &amp; business gatherings</h4>
                <div className="contact-benefit-line" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Enquiry Form Card */}
        <div className="contact-enquiry-form-card">
          <h3 className="contact-form-heading">Send an enquiry</h3>

          {submitted ? (
            <div className="contact-form-success">
              <h3>Enquiry Received</h3>
              <p>
                Thank you for reaching out. We have received your request and our team will get back to you shortly.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="contact-form-submit-btn"
                style={{ width: "240px", margin: "0 auto" }}
              >
                <span>SEND ANOTHER</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="w-full">
              {/* Row 1: Full name & Mobile number */}
              <div className="contact-form-row-2">
                {/* Full name */}
                <div className="contact-form-field-half">
                  <label htmlFor="fullName" className="contact-form-label">
                    Full name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`contact-form-input ${errors.fullName ? "has-error" : ""}`}
                  />
                  {errors.fullName && (
                    <span className="contact-form-error-msg">{errors.fullName}</span>
                  )}
                </div>

                {/* Mobile number */}
                <div className="contact-form-field-half">
                  <label htmlFor="mobileNumber" className="contact-form-label">
                    Mobile number *
                  </label>
                  <div
                    className={`contact-form-phone-wrapper ${errors.mobileNumber ? "has-error" : ""}`}
                  >
                    <span className="contact-form-phone-prefix">+91</span>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                      className="contact-form-phone-input"
                    />
                  </div>
                  {errors.mobileNumber && (
                    <span className="contact-form-error-msg">{errors.mobileNumber}</span>
                  )}
                </div>
              </div>

              {/* Row 2: Email address & Property (Using BrandSelect) */}
              <div className="contact-form-row-2">
                {/* Email address */}
                <div className="contact-form-field-half">
                  <label htmlFor="email" className="contact-form-label">
                    Email address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={`contact-form-input ${errors.email ? "has-error" : ""}`}
                  />
                  {errors.email && (
                    <span className="contact-form-error-msg">{errors.email}</span>
                  )}
                </div>

                {/* Property - Using BrandSelect Component */}
                <div className="contact-form-field-half">
                  <label htmlFor="property" className="contact-form-label">
                    Property *
                  </label>
                  <BrandSelect
                    id="property"
                    name="property"
                    value={formData.property}
                    onChange={handleChange}
                    placeholder="Select a property"
                    options={[
                      { value: "Valencia", label: "Valencia" },
                      { value: "Umrao The Banquet", label: "Umrao The Banquet" },
                      { value: "Hotel Jia International", label: "Hotel Jia International" },
                    ]}
                    error={errors.property}
                    triggerClassName={`!h-[48px] !rounded-[5px] !border-[#D1D1D1] !bg-[#FFFFFF] !px-4 text-[16px] font-body ${errors.property ? "!border-[#d32f2f]" : ""}`}
                    menuClassName="!bg-[#FFFFFF] !border-[#DBCFB8] !rounded-[8px] shadow-lg"
                  />
                  {errors.property && (
                    <span className="contact-form-error-msg">{errors.property}</span>
                  )}
                </div>
              </div>

              {/* Row 3: Enquiry type (optional) - Using BrandSelect Component */}
              <div className="contact-form-field-full">
                <label htmlFor="enquiryType" className="contact-form-label">
                  Enquiry type (optional)
                </label>
                <BrandSelect
                  id="enquiryType"
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  options={[
                    { value: "Stays & reservations", label: "Stays & reservations" },
                    { value: "Weddings & celebrations", label: "Weddings & celebrations" },
                    { value: "Dining & business gatherings", label: "Dining & business gatherings" },
                    { value: "General enquiry", label: "General enquiry" },
                  ]}
                  triggerClassName="!h-[48px] !rounded-[5px] !border-[#D1D1D1] !bg-[#FFFFFF] !px-4 text-[16px] font-body"
                  menuClassName="!bg-[#FFFFFF] !border-[#DBCFB8] !rounded-[8px] shadow-lg"
                />
              </div>

              {/* Row 4: Message * */}
              <div className="contact-form-field-full">
                <label htmlFor="message" className="contact-form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your enquiry."
                  className={`contact-form-textarea ${errors.message ? "has-error" : ""}`}
                />
                {errors.message && (
                  <span className="contact-form-error-msg">{errors.message}</span>
                )}
              </div>

              {/* Row 5: Privacy policy note */}
              <p className="contact-form-privacy">
                We’ll use your details to respond to your enquiry.{" "}
                <Link href="/privacy-policy">View Privacy Policy.</Link>
              </p>

              {/* Row 6: Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="contact-form-submit-btn"
              >
                <span>{loading ? "SENDING..." : "SEND ENQUIRY"}</span>
                <span className="btn-arrow" aria-hidden="true">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
