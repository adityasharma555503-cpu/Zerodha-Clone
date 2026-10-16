import React, { useState } from "react";
import "./auth.css";

const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:3002";
const DASHBOARD_URL =
  process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

export default function AuthForm({ mode = "login" }) {
  const isSignup = mode === "signup";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/auth/${isSignup ? "signup" : "login"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(
            isSignup ? { name: name.trim(), email: email.trim(), password } : { email: email.trim(), password }
          ),
        }
      );

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || "Authentication failed. Please try again.");
      }

      // Backend sets an HttpOnly cookie; do not store auth tokens in localStorage.
      window.location.assign(data.dashboardUrl || DASHBOARD_URL);
    } catch (err) {
      setError(
        err.message ||
          "Unable to connect to the server. Make sure the backend is running on port 3002."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <a className="auth-brand" href="/">ZERODHA CLONE</a>
        <h1>{isSignup ? "Create your account" : "Welcome back"}</h1>
        <p className="auth-subtitle">
          {isSignup
            ? "Sign up to access your trading dashboard."
            : "Log in to continue to your dashboard."}
        </p>

        {isSignup && (
          <label>
            Full name
            <input
              type="text"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              maxLength={80}
              required
            />
          </label>
        )}

        <label>
          Email address
          <input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            autoComplete={isSignup ? "new-password" : "current-password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder={isSignup ? "At least 8 characters" : "Your password"}
            minLength={isSignup ? 8 : undefined}
            required
          />
        </label>

        {error && <div className="auth-error" role="alert">{error}</div>}

        <button className="auth-submit" type="submit" disabled={loading}>
          {loading ? "Please wait..." : isSignup ? "Create account" : "Log in"}
        </button>

        <p className="auth-switch">
          {isSignup ? "Already have an account? " : "New to Zerodha Clone? "}
          <a href={isSignup ? "/login" : "/signup"}>
            {isSignup ? "Log in" : "Sign up"}
          </a>
        </p>
      </form>
    </main>
  );
}
