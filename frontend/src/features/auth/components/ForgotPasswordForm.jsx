"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AuthCard,
  AuthInput,
  AuthButton,
  RecoveryIcon,
} from "../../../components/auth";
import { authService } from "../services/authService";
import { validateEmail } from "../validations/authValidation";
import { AUTH_ROUTES } from "../constants/authConstants";

export default function ForgotPasswordForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [generalError, setGeneralError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneralError("");

    const emailErr = validateEmail(email);
    if (emailErr) {
      setError(emailErr);
      return;
    }

    setError(null);
    setLoading(true);

    try {
      await authService.forgotPassword({ email });
      // Navigate to check-email with email parameter
      router.push(`${AUTH_ROUTES.CHECK_EMAIL}?email=${encodeURIComponent(email.trim())}`);
    } catch (err) {
      setGeneralError(err.message || "Failed to send reset link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      recoveryIcon={<RecoveryIcon type="key" />}
      eyebrow="ACCOUNT RECOVERY"
      title="Forgot your password?"
      subtitle="Enter your registered email address and we’ll send you a link to reset your password."
      topPaddingClass="pt-8 sm:pt-12 lg:pt-[92px]"
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

        {/* Email address field */}
        <div className="w-full">
          <AuthInput
            id="forgot-email"
            type="email"
            label="Email address"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            error={error}
            hint="Use the email associated with your VALENCIA account."
            heightClass="h-[52px] sm:h-[55px]"
            required
            autoComplete="email"
          />
        </div>

        {/* Spacing 35px */}
        <div className="h-[24px] sm:h-[35px]" />

        {/* SEND RESET LINK Button */}
        <AuthButton
          type="submit"
          loading={loading}
          heightClass="h-[52px] sm:h-[56px]"
        >
          SEND RESET LINK
        </AuthButton>

        {/* Spacing 38px */}
        <div className="h-[24px] sm:h-[38px]" />

        {/* Divider */}
        <div className="w-full max-w-[552px] h-[1px] bg-[#DFDDD5]" />

        {/* Spacing 17px */}
        <div className="h-[12px] sm:h-[17px]" />

        {/* Remember your password? Sign in */}
        <div className="w-full max-w-[552px] flex items-center justify-center gap-[6px] py-2 font-body text-[16px] sm:text-[18px] leading-[24px]">
          <span className="text-[#655B51]">Remember your password?</span>
          <Link
            href={AUTH_ROUTES.LOGIN}
            className="underline text-[#164C3B] hover:text-[#1B4D32] transition-colors"
          >
            Sign in
          </Link>
        </div>

        {/* Spacing 18px */}
        <div className="h-[12px] sm:h-[18px]" />

        {/* Divider */}
        <div className="w-full max-w-[552px] h-[1px] bg-[#DFDDD5]" />

        {/* Spacing 20px */}
        <div className="h-[12px] sm:h-[20px]" />

        {/* Need assistance? Contact our team */}
        <div className="w-full max-w-[552px] flex items-center justify-center gap-[6px] py-2 font-body text-[16px] sm:text-[18px] leading-[24px]">
          <span className="text-[#655B51]">Need assistance?</span>
          <Link
            href="#contact"
            className="underline text-[#164C3B] hover:text-[#1B4D32] transition-colors"
          >
            Contact our team
          </Link>
        </div>
      </form>
    </AuthCard>
  );
}

