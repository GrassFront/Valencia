"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const DEFAULT_USER = {
  id: "usr_aarav_sharma",
  firstName: "Aarav",
  lastName: "Sharma",
  fullName: "Aarav Sharma",
  email: "aarav@example.com",
  mobile: "+91 98765 43210",
  displayMobile: "+91 • • • • • • 3210",
  initials: "AS",
  avatarBg: "#134D39",
  marketingConsent: true,
};

const AuthContext = createContext({
  user: DEFAULT_USER,
  isAuthenticated: true,
  isLoaded: false,
  login: async () => {},
  logout: () => {},
  updateProfile: () => {},
  resetToDemoUser: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(DEFAULT_USER);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("valencia_auth_user");
      if (stored) {
        if (stored === "null") {
          setUser(null);
        } else {
          setUser(JSON.parse(stored));
        }
      } else {
        // Default to authenticated demo user so reviewer can explore immediately
        localStorage.setItem("valencia_auth_user", JSON.stringify(DEFAULT_USER));
        setUser(DEFAULT_USER);
      }
    } catch {
      setUser(DEFAULT_USER);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const login = async ({ identifier = "aarav@example.com", password = "", rememberMe = false } = {}) => {
    let firstName = "Aarav";
    let lastName = "Sharma";
    let email = "aarav@example.com";
    let initials = "AS";

    if (identifier && identifier.includes("@")) {
      email = identifier;
      const namePart = identifier.split("@")[0].replace(/[._-]/g, " ");
      const words = namePart.split(" ").filter(Boolean);
      if (words.length > 0) {
        firstName = words[0].charAt(0).toUpperCase() + words[0].slice(1);
        lastName = words.length > 1 ? words[1].charAt(0).toUpperCase() + words[1].slice(1) : "Sharma";
        initials = (firstName[0] || "") + (lastName[0] || "");
      }
    }

    const newUser = {
      id: "usr_" + Date.now(),
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
      email,
      mobile: "+91 98765 43210",
      displayMobile: "+91 • • • • • • 3210",
      initials: initials.toUpperCase() || "AS",
      avatarBg: "#134D39",
      marketingConsent: true,
      rememberMe,
    };

    setUser(newUser);
    try {
      localStorage.setItem("valencia_auth_user", JSON.stringify(newUser));
    } catch {}

    return newUser;
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.setItem("valencia_auth_user", "null");
    } catch {}
  };

  const resetToDemoUser = () => {
    setUser(DEFAULT_USER);
    try {
      localStorage.setItem("valencia_auth_user", JSON.stringify(DEFAULT_USER));
    } catch {}
  };

  const updateProfile = (updates) => {
    setUser((prev) => {
      const updated = {
        ...(prev || DEFAULT_USER),
        ...updates,
        fullName:
          updates.firstName || updates.lastName
            ? `${updates.firstName || prev?.firstName || ""} ${updates.lastName || prev?.lastName || ""}`.trim()
            : prev?.fullName || DEFAULT_USER.fullName,
        initials:
          updates.firstName && updates.lastName
            ? `${updates.firstName[0]}${updates.lastName[0]}`.toUpperCase()
            : prev?.initials || "AS",
      };
      try {
        localStorage.setItem("valencia_auth_user", JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoaded,
        login,
        logout,
        updateProfile,
        resetToDemoUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
