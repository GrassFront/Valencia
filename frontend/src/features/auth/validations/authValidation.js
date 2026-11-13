export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_REGEX = /^[0-9]{7,15}$/;

export function validateEmailOrPhone(value) {
  if (!value || !value.trim()) {
    return "Please enter your email or mobile number.";
  }
  const clean = value.trim();
  const digitsOnly = clean.replace(/[\s\-()]/g, "");
  if (EMAIL_REGEX.test(clean) || PHONE_REGEX.test(digitsOnly)) {
    return null;
  }
  return "Please enter a valid email address or mobile number.";
}

export function validateEmail(value) {
  if (!value || !value.trim()) {
    return "Please enter your email address.";
  }
  if (!EMAIL_REGEX.test(value.trim())) {
    return "Please enter a valid email address.";
  }
  return null;
}

export function validatePassword(value, minLength = 8) {
  if (!value) {
    return "Please enter a password.";
  }
  if (value.length < minLength) {
    return `Password must be at least ${minLength} characters.`;
  }
  return null;
}

export function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword) {
    return "Please confirm your password.";
  }
  if (password !== confirmPassword) {
    return "Passwords do not match.";
  }
  return null;
}

export function validateFullName(value) {
  if (!value || !value.trim()) {
    return "Please enter your full name.";
  }
  if (value.trim().length < 2) {
    return "Full name must be at least 2 characters.";
  }
  return null;
}

export function validatePhone(value) {
  if (!value || !value.trim()) {
    return "Please enter your mobile number.";
  }
  const clean = value.replace(/[\s\-()]/g, "");
  if (!PHONE_REGEX.test(clean)) {
    return "Please enter a valid mobile number.";
  }
  return null;
}

