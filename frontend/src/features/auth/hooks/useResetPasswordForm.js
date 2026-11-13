"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "../services/authService";
import {
  validatePassword,
  validateConfirmPassword,
} from "../validations/authValidation";
import { AUTH_ROUTES } from "../constants/authConstants";

export function useResetPasswordForm(token) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    if (e) e.preventDefault();
    setGeneralError("");
    setSuccessMessage("");

    const passErr = validatePassword(password, 8);
    const confirmErr = validateConfirmPassword(password, confirmPassword);

    if (passErr || confirmErr) {
      setErrors({
        password: passErr,
        confirmPassword: confirmErr,
      });
      return false;
    }

    setErrors({});
    setLoading(true);

    try {
      await authService.resetPassword({ token, newPassword: password });
      setSuccessMessage("Password reset successfully. Redirecting to sign in...");
      setTimeout(() => {
        router.push(AUTH_ROUTES.LOGIN);
      }, 1500);
      return true;
    } catch (err) {
      setGeneralError(err.message || "Failed to reset password.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errors,
    setErrors,
    generalError,
    setGeneralError,
    successMessage,
    loading,
    submit,
  };
}

