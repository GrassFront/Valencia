"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "../services/authService";
import { validateEmailOrPhone, validatePassword } from "../validations/authValidation";
import { AUTH_ROUTES } from "../constants/authConstants";

export function useLoginForm() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    if (e) e.preventDefault();
    setGeneralError("");

    const identifierError = validateEmailOrPhone(identifier);
    const passwordError = validatePassword(password, 1);

    if (identifierError || passwordError) {
      setErrors({
        identifier: identifierError,
        password: passwordError,
      });
      return false;
    }

    setErrors({});
    setLoading(true);

    try {
      await authService.login({ identifier, password, rememberMe });
      router.push(AUTH_ROUTES.ACCOUNT);
      return true;
    } catch (err) {
      setGeneralError(err.message || "Invalid credentials.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    identifier,
    setIdentifier,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    errors,
    setErrors,
    generalError,
    setGeneralError,
    loading,
    submit,
  };
}

