"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "../services/authService";
import { validateEmail } from "../validations/authValidation";
import { AUTH_ROUTES } from "../constants/authConstants";

export function useForgotPasswordForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [generalError, setGeneralError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    if (e) e.preventDefault();
    setGeneralError("");

    const emailErr = validateEmail(email);
    if (emailErr) {
      setError(emailErr);
      return false;
    }

    setError(null);
    setLoading(true);

    try {
      await authService.forgotPassword({ email });
      router.push(`${AUTH_ROUTES.CHECK_EMAIL}?email=${encodeURIComponent(email.trim())}`);
      return true;
    } catch (err) {
      setGeneralError(err.message || "Failed to send reset link.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    error,
    setError,
    generalError,
    setGeneralError,
    loading,
    submit,
  };
}

