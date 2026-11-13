/**
 * Authentication Service
 *
 * Provides service methods for login, registration, password recovery,
 * and email verification. Currently prepared for integration with Valencia's
 * backend API endpoints.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const authService = {
  /**
   * Sign in with email/phone and password
   */
  async login({ identifier, password, rememberMe }) {
    if (API_BASE_URL) {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password, rememberMe }),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Invalid email/mobile or password.");
      }
      return response.json();
    }

    // Client-side simulated authentication for UI development
    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
      success: true,
      user: {
        id: "usr_mock_1",
        identifier,
      },
    };
  },

  /**
   * Register a new account
   */
  async register({ fullName, countryCode, mobileNumber, email, password, consentMarketing }) {
    if (API_BASE_URL) {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone: `${countryCode}${mobileNumber}`,
          email,
          password,
          consentMarketing,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Registration failed. Please try again.");
      }
      return response.json();
    }

    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
      success: true,
      user: {
        id: "usr_mock_new",
        fullName,
        email,
      },
    };
  },

  /**
   * Request password reset link
   */
  async forgotPassword({ email }) {
    if (API_BASE_URL) {
      const response = await fetch(`${API_BASE_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Unable to send reset link.");
      }
      return response.json();
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      success: true,
      message: "Reset link dispatched.",
    };
  },

  /**
   * Resend password reset link
   */
  async resendResetLink({ email }) {
    if (API_BASE_URL) {
      const response = await fetch(`${API_BASE_URL}/api/auth/resend-reset-link`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Unable to resend email.");
      }
      return response.json();
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      success: true,
      message: "Reset link resent.",
    };
  },

  /**
   * Set new password with token
   */
  async resetPassword({ token, newPassword }) {
    if (API_BASE_URL) {
      const response = await fetch(`${API_BASE_URL}/api/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword }),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to reset password.");
      }
      return response.json();
    }

    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
      success: true,
      message: "Password reset successfully.",
    };
  },
};

