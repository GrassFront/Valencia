"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  AuthCard,
  AuthInput,
  PasswordInput,
  AuthButton,
  Checkbox,
  PasswordStrength,
} from "../../../components/auth";
import { authService } from "../services/authService";
import {
  validateFullName,
  validateEmail,
  validatePassword,
  validatePhone,
} from "../validations/authValidation";
import { AUTH_ROUTES, COUNTRY_CODES } from "../constants/authConstants";
import { useAuth } from "../../../context/AuthContext";

export default function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, updateProfile } = useAuth();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      return;
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
      const names = fullName.trim().split(" ");
      const firstName = names[0] || "Aarav";
      const lastName = names.slice(1).join(" ") || "Sharma";
      await login({ identifier: email, password });
      updateProfile({
        firstName,
        lastName,
        email,
        mobile: `${countryCode} ${mobileNumber}`,
        displayMobile: `${countryCode} • • • • • • ${mobileNumber.slice(-4) || "3210"}`,
      });
      const redirectUrl = searchParams?.get("redirect") || AUTH_ROUTES.ACCOUNT;
      router.push(redirectUrl);
    } catch (err) {
      setGeneralError(err.message || "Registration failed. Please check your information.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      eyebrow="YOUR VALENCIA ACCOUNT"
      title="Create your account."
      subtitle="Keep your bookings and stay details in one place."
      topPaddingClass="pt-6 sm:pt-8 lg:pt-[31px]"
    >
      <form onSubmit={handleSubmit} noValidate className="w-full flex flex-col">
        {generalError && (
          <div
            className="w-full mb-3 p-3 bg-red-50 border border-red-200 text-[#C53030] rounded-[6px] font-body text-[14px]"
            role="alert"
          >
            {generalError}
          </div>
        )}

        {/* Full name */}
        <div className="w-full">
          <AuthInput
            id="register-fullname"
            label="Full Name"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: null }));
            }}
            error={errors.fullName}
            heightClass="h-[50px] sm:h-[52px]"
            required
            autoComplete="name"
          />
        </div>

        {/* Spacing 14px */}
        <div className="h-[12px] sm:h-[14px]" />

        {/* Mobile number */}
        <div className="w-full max-w-[552px] flex flex-col items-start gap-2">
          <label
            htmlFor="register-mobile"
            className="font-body text-[16px] sm:text-[18px] leading-[24px] text-[#514B46] select-none"
          >
            Mobile Number
          </label>
          <div className="w-full flex items-start gap-[10px]">
            {/* Country code selector */}
            <div className="relative w-[112px] h-[50px] sm:h-[52px] bg-[#FCFBF9] border border-[#D5D5D5] focus-within:border-[#164C3B] rounded-[6px] px-[16px] sm:px-[22px] flex items-center justify-between shrink-0">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                aria-label="Select Country Code"
                className="w-full h-full bg-transparent border-none outline-none font-body text-[16px] sm:text-[18px] leading-[24px] text-[#514B46] cursor-pointer appearance-none pr-4"
              >
                {COUNTRY_CODES.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.code}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-[18px] text-[#777B80] text-[12px]" aria-hidden="true">
                ▼
              </span>
            </div>

            {/* Mobile number input */}
            <div className="flex-1">
              <div
                className={`w-full h-[50px] sm:h-[52px] bg-[#FCFBF9] border ${errors.mobileNumber ? "border-red-500" : "border-[#D5D5D5]"
                  } focus-within:border-[#164C3B] rounded-[6px] px-[22px] flex items-center`}
              >
                <input
                  id="register-mobile"
                  type="tel"
                  placeholder="Mobile number"
                  value={mobileNumber}
                  onChange={(e) => {
                    setMobileNumber(e.target.value);
                    if (errors.mobileNumber)
                      setErrors((prev) => ({ ...prev, mobileNumber: null }));
                  }}
                  className="w-full bg-transparent border-none outline-none font-body text-[16px] sm:text-[18px] leading-[24px] text-[#233028] placeholder:text-[#969390]"
                  required
                  autoComplete="tel-national"
                />
              </div>
            </div>
          </div>
          {errors.mobileNumber && (
            <p className="font-body text-[14px] text-[#C53030]" role="alert">
              {errors.mobileNumber}
            </p>
          )}
        </div>

        {/* Spacing 14px */}
        <div className="h-[12px] sm:h-[14px]" />

        {/* Email address */}
        <div className="w-full">
          <AuthInput
            id="register-email"
            type="email"
            label="Email Address"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: null }));
            }}
            error={errors.email}
            heightClass="h-[50px] sm:h-[52px]"
            required
            autoComplete="email"
          />
        </div>

        {/* Spacing 14px */}
        <div className="h-[12px] sm:h-[14px]" />

        {/* Password */}
        <div className="w-full">
          <PasswordInput
            id="register-password"
            label="Password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) setErrors((prev) => ({ ...prev, password: null }));
            }}
            error={errors.password}
            hint="Use at least 8 characters."
            heightClass="h-[50px] sm:h-[52px]"
            required
            autoComplete="new-password"
          />
        </div>

        {/* Spacing 16px */}
        <div className="h-[14px] sm:h-[16px]" />

        {/* Password strength meter */}
        <PasswordStrength password={password} />

        {/* Spacing 23px */}
        <div className="h-[18px] sm:h-[23px]" />

        {/* Consents */}
        <div className="w-full flex flex-col gap-[10px]">
          <div>
            <Checkbox
              id="agree-terms"
              checked={agreeTerms}
              onChange={(e) => {
                setAgreeTerms(e.target.checked);
                if (errors.terms) setErrors((prev) => ({ ...prev, terms: null }));
              }}
            >
              I agree to the Terms & Conditions and Privacy Policy.
            </Checkbox>
            {errors.terms && (
              <p className="font-body text-[14px] text-[#C53030] mt-1 pl-[37px]" role="alert">
                {errors.terms}
              </p>
            )}
          </div>

          <Checkbox
            id="agree-marketing"
            checked={agreeMarketing}
            onChange={(e) => setAgreeMarketing(e.target.checked)}
          >
            Send me offers and updates from VALENCIA. (Optional)
          </Checkbox>
        </div>

        {/* Spacing 10px */}
        <div className="h-[10px]" />

        {/* CREATE ACCOUNT Button */}
        <AuthButton
          type="submit"
          loading={loading}
          heightClass="h-[50px] sm:h-[53px]"
        >
          CREATE ACCOUNT
        </AuthButton>

        {/* Already have an account? Sign in */}
        <div className="w-full max-w-[552px] flex items-center justify-center gap-[6px] py-2 sm:py-3 font-body text-[16px] sm:text-[18px] leading-[24px]">
          <span className="text-[#655B51]">Already have an account?</span>
          <Link
            href={AUTH_ROUTES.LOGIN}
            className="underline text-[#164C3B] hover:text-[#1B4D32] transition-colors"
          >
            Sign in
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[552px] h-[1px] bg-[#DFDDD5]" />

        {/* Spacing 10px */}
        <div className="h-[10px]" />

        {/* Return to booking note */}
        <p className="w-full max-w-[552px] font-body text-[13px] sm:text-[14px] leading-[19px] text-[#969390]">
          Return to your booking after creating your account.
        </p>
      </form>
    </AuthCard>
  );
}
