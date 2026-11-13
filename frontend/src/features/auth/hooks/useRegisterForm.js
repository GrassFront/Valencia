"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "../services/authService";
import {
  validateFullName,
  validateEmail,
  validatePassword,
  validatePhone,
} from "../validations/authValidation";
import { AUTH_ROUTES } from "../constants/authConstants";

export function useRegisterForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    if (e) e.preventDefault();
    setGeneralError("");

    const nameErr = validateFullName(fullName);
    const phoneErr = validatePhone(mobileNumber);
    const emailErr = validateEmail(email);
    const passErr = validatePassword(password, 8);
    const termsErr = !agreeTerms
      ? "You must agree to the Terms & Conditions and Privacy Policy."
      : null;

    if (nameErr || phoneErr || emailErr || passErr || termsErr) {
      setErrors({
        fullName: nameErr,
        mobileNumber: phoneErr,
        email: emailErr,
        password: passErr,
        terms: termsErr,
      });
      return false;
    }

    setErrors({});
    setLoading(true);

    try {
      await authService.register({
        fullName,
        countryCode,
        mobileNumber,
        email,
        password,
        consentMarketing: agreeMarketing,
      });
      router.push(AUTH_ROUTES.LOGIN);
      return true;
    } catch (err) {
      setGeneralError(err.message || "Registration failed.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    fullName,
    setFullName,
    countryCode,
    setCountryCode,
    mobileNumber,
    setMobileNumber,
    email,
    setEmail,
    password,
    setPassword,
    agreeTerms,
    setAgreeTerms,
    agreeMarketing,
    setAgreeMarketing,
    errors,
    setErrors,
    generalError,
    setGeneralError,
    loading,
    submit,
  };
}

