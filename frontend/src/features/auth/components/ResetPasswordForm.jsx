"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AuthCard,
  PasswordInput,
  AuthButton,
  RecoveryIcon,
  PasswordStrength,
} from "../../../components/auth";
import { authService } from "../services/authService";
import {
  validatePassword,
  validateConfirmPassword,
} from "../validations/authValidation";
import { AUTH_ROUTES } from "../constants/authConstants";

export default function ResetPasswordForm() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneralError("");
    setSuccessMessage("");

    const passErr = validatePassword(password, 8);
    const confirmErr = validateConfirmPassword(password, confirmPassword);

    if (passErr || confirmErr) {
      setErrors({
        password: passErr,
        confirmPassword: confirmErr,
      });
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await authService.resetPassword({ newPassword: password });
      setSuccessMessage("Your password has been successfully reset. Redirecting to sign in...");
      setTimeout(() => {
        router.push(AUTH_ROUTES.LOGIN);
      }, 1500);
    } catch (err) {
      setGeneralError(err.message || "Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      recoveryIcon={<RecoveryIcon type="lock" />}
      eyebrow="ACCOUNT RECOVERY"
      title="Set a new password."
      subtitle="Choose a new password for your VALENCIA account."
      topPaddingClass="pt-6 sm:pt-10 lg:pt-[50px]"
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

        {successMessage && (
          <div
            className="w-full mb-4 p-3 bg-emerald-50 border border-emerald-200 text-[#164C3B] rounded-[6px] font-body text-[14px]"
            role="status"
          >
            {successMessage}
          </div>
        )}

        {/* New password */}
        <div className="w-full">
          <PasswordInput
            id="reset-new-password"
            label="New password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) setErrors((prev) => ({ ...prev, password: null }));
            }}
            error={errors.password}
            hint="Use at least 8 characters."
            heightClass="h-[52px] sm:h-[55px]"
            required
            autoComplete="new-password"
          />
        </div>

        {/* Spacing 24px */}
        <div className="h-[16px] sm:h-[24px]" />

        {/* Password strength */}
        <PasswordStrength password={password} />

        {/* Spacing 33px */}
        <div className="h-[20px] sm:h-[33px]" />

        {/* Confirm new password */}
        <div className="w-full">
          <PasswordInput
            id="reset-confirm-password"
            label="Confirm new password"
            placeholder="Re-enter new password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (errors.confirmPassword)
                setErrors((prev) => ({ ...prev, confirmPassword: null }));
            }}
            error={errors.confirmPassword}
            heightClass="h-[52px] sm:h-[55px]"
            required
            autoComplete="new-password"
          />
        </div>

        {/* Spacing 27px */}
        <div className="h-[18px] sm:h-[27px]" />

        {/* RESET PASSWORD Button */}
        <AuthButton
          type="submit"
          loading={loading}
          heightClass="h-[52px] sm:h-[56px]"
        >
          RESET PASSWORD
        </AuthButton>

        {/* Spacing 27px */}
        <div className="h-[18px] sm:h-[27px]" />

        {/* Divider */}
        <div className="w-full max-w-[552px] h-[1px] bg-[#DFDDD5]" />

        {/* Back to sign in */}
        <div className="w-full max-w-[552px] flex items-center justify-center py-2 sm:py-3 font-body text-[16px] sm:text-[18px] leading-[24px]">
          <Link
            href={AUTH_ROUTES.LOGIN}
            className="underline text-[#164C3B] hover:text-[#1B4D32] transition-colors"
          >
            Back to sign in
          </Link>
        </div>

        {/* Spacing 13px */}
        <div className="h-[13px]" />

        {/* Divider */}
        <div className="w-full max-w-[552px] h-[1px] bg-[#DFDDD5]" />

        {/* Spacing 10px */}
        <div className="h-[10px]" />

        {/* Need assistance? Contact our team */}
        <div className="w-full max-w-[552px] flex items-center justify-center gap-[6px] py-2 font-body text-[16px] sm:text-[18px] leading-[24px]">
          <span className="text-[#655B51]">Need assistance?</span>
          <Link
            href="/contact"
            className="underline text-[#164C3B] hover:text-[#1B4D32] transition-colors"
          >
            Contact our team
          </Link>
        </div>
      </form>
    </AuthCard>
  );
}

