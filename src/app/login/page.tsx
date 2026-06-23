"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Section } from "../../components/section";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export default function LoginPage() {
  const [email, setEmail] = useState("ayyaz.dev@email.com");
  const [password, setPassword] = useState("Password123!");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Signing in...");

    const response = await fetch(`${apiBaseUrl}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (!response.ok) {
      setMessage(result.message ?? "Login failed");
      return;
    }

    localStorage.setItem("portfolio_jwt", result.access_token);
    setMessage("Logged in successfully. Token saved locally.");
  }

  return (
    <Section
      eyebrow="JWT Authentication"
      title="Login"
      description="This route connects to the NestJS backend login endpoint."
      className="section-muted"
    >
      <div className="login-grid">
        <form className="glass-card contact-panel login-panel" onSubmit={handleSubmit}>
          <label>
            <span>Email</span>
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" />
          </label>
          <label>
            <span>Password</span>
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" />
          </label>
          <button className="button button-primary button-submit" type="submit">
            Sign In
          </button>
          {message ? <p className="form-message">{message}</p> : null}
        </form>

        <div className="glass-card detail-card">
          <p>
            The backend will expose JWT login, registration, and a protected profile route.
          </p>
        </div>
      </div>
    </Section>
  );
}