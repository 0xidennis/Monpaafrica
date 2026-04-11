"use client";

import { useState, createContext, useContext, useEffect, ReactNode } from "react";

// ================= AUTH TYPES =================
export interface User {
  id: string;
  email: string;
  name?: string;
  // Add other user fields as per backend response
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  pendingUserId: string | null;
  login: (email: string, password: string) => Promise<any>;
  signup: (email: string, password: string, name?: string) => Promise<any>;
  logout: () => void;
  verifyOtp: (userId: string, otp: string) => Promise<any>;
  resendOtp: (userId: string) => Promise<any>;
}

interface AuthProviderProps {
  children: ReactNode;
}

// ================= AUTH CONTEXT =================
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [pendingUserId, setPendingUserId] = useState<string | null>(null);

  // Persistence: Load user + token on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (savedUser && savedToken) {
      try {
        setUser(JSON.parse(savedUser));
        setToken(savedToken);
      } catch (e) {
        console.error("Failed to parse saved user", e);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
    setLoading(false);
  }, []);

   // ✅ SIGNUP FUNCTION
  const signup = async (email: string, password: string, name?: string) => {
    try {
      setLoading(true);

      const res = await fetch("https://monpa-backend.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Signup failed");
      }

      // Store pending userId for OTP verification
      const userId = result.userId || result.user?.id || result.data?.userId;
      if (userId) {
        setPendingUserId(userId);
      }

      return result;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    const res = await fetch("https://monpa-backend.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    // Save token + user in both React state and localStorage
    if (data.token) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
    }
    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
    }

    return data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
    setPendingUserId(null);
  };

  // ✅ VERIFY OTP
  const verifyOtp = async (userId: string, otp: string) => {
    try {
      setLoading(true);
      const res = await fetch("https://monpa-backend.onrender.com/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, otp }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "OTP verification failed");
      }

      // Persist token + user after successful OTP verification
      if (result.token) {
        localStorage.setItem("token", result.token);
        setToken(result.token);
      }
      if (result.user) {
        localStorage.setItem("user", JSON.stringify(result.user));
        setUser(result.user);
      }

      setPendingUserId(null);
      return result;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ✅ RESEND OTP
  const resendOtp = async (userId: string) => {
    try {
      const res = await fetch("https://monpa-backend.onrender.com/api/auth/resend-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to resend OTP");
      }

      return result;
    } catch (err) {
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, pendingUserId, login, signup, logout, verifyOtp, resendOtp }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
