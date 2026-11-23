"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  AuthCard,
  AuthButton,
  RecoveryIcon,
  InstructionBox,
} from "../../../components/auth";
import { authService } from "../services/authService";
import { AUTH_ROUTES } from "../constants/authConstants";

export default function CheckEmailContent() {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email");
  const displayEmail = emailParam || "aarav@example.com";

  const [resending, setResending] = useState(false);
  const [resendStatus, setResendStatus] = useState("");

  const handleResend = async (e) => {
    e.preventDefault();
    setResending(true);
    setResendStatus("");

    try {
      await authService.resendResetLink({ email: displayEmail });
      setResendStatus("Reset link resent successfully. Please check your inbox.");
    } catch {
      setResendStatus("Unable to resend email right now. Please try again later.");
    } finally {
      setResending(false);
    }
  };

  return (
    <AuthCard
      recoveryIcon={<RecoveryIcon type="mail" />}
      eyebrow="ACCOUNT RECOVERY"
      title="Check your email."
      subtitle={`If an account exists for ${displayEmail}, you’ll receive a password reset link shortly.`}
      topPaddingClass="pt-8 sm:pt-12 lg:pt-[60px]"
    >
      <div className="w-full flex flex-col">
        {/* Instruction callout box */}
        <InstructionBox
          title="Open the email and follow the link to create a new password."
          subtitle="Can’t find it? Check your spam or junk folder."
        />

        {resendStatus && (
          <div
            className="w-full mt-3 p-3 bg-[#FCFBF9] border border-[#B78E5B] text-[#164C3B] rounded-[6px] font-body text-[14px]"
            role="status"
          >
            {resendStatus}
          </div>
        )}

        {/* Spacing 27px */}
        <div className="h-[18px] sm:h-[27px]" />

        {/* Divider */}
        <div className="w-full max-w-[552px] h-[1px] bg-[#DFDDD5]" />

        {/* Wrong email address? Change email */}
        <div className="w-full max-w-[552px] flex items-center justify-center gap-[6px] py-2 sm:py-3 font-body text-[16px] sm:text-[18px] leading-[24px]">
          <span className="text-[#655B51]">Wrong email address?</span>
          <Link
            href={AUTH_ROUTES.FORGOT_PASSWORD}
            className="underline text-[#164C3B] hover:text-[#1B4D32] transition-colors"
          >
            Change email
          </Link>
        </div>

        {/* Spacing 18px */}
        <div className="h-[12px] sm:h-[18px]" />

        {/* BACK TO SIGN IN Button */}
        <AuthButton
          href={AUTH_ROUTES.LOGIN}
          heightClass="h-[52px] sm:h-[56px]"
        >
          BACK TO SIGN IN
        </AuthButton>

        {/* Spacing 28px */}
        <div className="h-[18px] sm:h-[28px]" />

        {/* Divider */}
        <div className="w-full max-w-[552px] h-[1px] bg-[#DFDDD5]" />

        {/* Didn’t receive an email? Resend link */}
        <div className="w-full max-w-[552px] flex items-center justify-center gap-[6px] py-2 sm:py-3 font-body text-[16px] sm:text-[18px] leading-[24px]">
          <span className="text-[#655B51]">Didn’t receive an email?</span>
          <button
            type="button"
            onClick={handleResend}
            disabled={resending}
            className="underline text-[#164C3B] hover:text-[#1B4D32] transition-colors focus:outline-none"
          >
            {resending ? "Sending..." : "Resend link"}
          </button>
        </div>

        {/* Spacing 20px */}
        <div className="h-[12px] sm:h-[20px]" />

        {/* Divider */}
        <div className="w-full max-w-[552px] h-[1px] bg-[#DFDDD5]" />

        {/* Spacing 18px */}
        <div className="h-[12px] sm:h-[18px]" />

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
      </div>
    </AuthCard>
  );
}

