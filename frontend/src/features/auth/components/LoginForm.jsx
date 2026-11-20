"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AuthCard,
  AuthInput,
  PasswordInput,
  AuthButton,
  Checkbox,
} from "../../../components/auth";
import { authService } from "../services/authService";
import { validateEmailOrPhone, validatePassword } from "../validations/authValidation";
import { AUTH_ROUTES } from "../constants/authConstants";
import { useAuth } from "../../../context/AuthContext";

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneralError("");

    const identifierError = validateEmailOrPhone(identifier);
    const passwordError = validatePassword(password, 1);

    if (identifierError || passwordError) {
      setErrors({
        identifier: identifierError,
        password: passwordError,
      });
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await authService.login({ identifier, password, rememberMe });
      await login({ identifier, password, rememberMe });
      router.push(AUTH_ROUTES.ACCOUNT);
    } catch (err) {
      setGeneralError(err.message || "Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      eyebrow="YOUR VALENCIA ACCOUNT"
      title="Welcome back."
      subtitle="Sign in to manage your bookings and plan your next stay."
      topPaddingClass="pt-6 sm:pt-10 lg:pt-[129px]"
    >
      <form onSubmit={handleSubmit} noValidate className="w-full flex flex-col">
        {generalError && (
          <div
            className="w-full mb-4 p-3 bg-red-50 border border-red-200 text-[#C53030] rounded-[6px] font-body text-[14px]"
            role="alert"
          >
            {generalError}
          </div>
        )}

        {/* Email or mobile number */}
        <div className="w-full">
          <AuthInput
            id="login-identifier"
            label="Email or mobile number"
            placeholder="Enter email or mobile number"
            value={identifier}
            onChange={(e) => {
              setIdentifier(e.target.value);
              if (errors.identifier) setErrors((prev) => ({ ...prev, identifier: null }));
            }}
            error={errors.identifier}
            heightClass="h-[56px] sm:h-[64px]"
            required
            autoComplete="username"
          />
        </div>

        {/* Spacing 28px */}
        <div className="h-[20px] sm:h-[28px]" />

        {/* Password */}
        <div className="w-full">
          <PasswordInput
            id="login-password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) setErrors((prev) => ({ ...prev, password: null }));
            }}
            error={errors.password}
            heightClass="h-[56px] sm:h-[64px]"
            required
            autoComplete="current-password"
          />
        </div>

        {/* Spacing 21px */}
        <div className="h-[16px] sm:h-[21px]" />

        {/* Remember and recovery row */}
        <div className="w-full max-w-[552px] flex items-center justify-between flex-wrap gap-2">
          <Checkbox
            id="remember-me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          >
            Remember me
          </Checkbox>

          <Link
            href={AUTH_ROUTES.FORGOT_PASSWORD}
            className="font-body text-[16px] sm:text-[19px] leading-[26px] underline text-[#164C3B] hover:text-[#1B4D32] transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        {/* Spacing 18px */}
        <div className="h-[18px]" />

        {/* SIGN IN Button */}
        <AuthButton
          type="submit"
          loading={loading}
          heightClass="h-[58px] sm:h-[68px]"
        >
          SIGN IN
        </AuthButton>

        {/* Spacing 16px */}
        <div className="h-[16px]" />

        {/* New to VALENCIA? Create an account */}
        <div className="w-full max-w-[552px] flex items-center justify-center gap-[6px] py-1 font-body text-[16px] sm:text-[18px] leading-[24px]">
          <span className="text-[#655B51]">New to VALENCIA?</span>
          <Link
            href={AUTH_ROUTES.REGISTER}
            className="underline text-[#164C3B] hover:text-[#1B4D32] transition-colors"
          >
            Create an account
          </Link>
        </div>

        {/* Spacing 12px */}
        <div className="h-[12px]" />

        {/* Divider */}
        <div className="w-full max-w-[552px] h-[1px] bg-[#DFDDD5]" />

        {/* Spacing 20px */}
        <div className="h-[20px]" />

        {/* Continue where you left off */}
        <p className="w-full max-w-[552px] font-body text-[14px] sm:text-[16px] leading-[22px] text-[#969390]">
          Continue where you left off after signing in.
        </p>
      </form>
    </AuthCard>
  );
}

