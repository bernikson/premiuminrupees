import React, { useState } from "react";
import styles from "./Auth.module.css";
import Close from "../../svgs/Close";
import { useStore } from "../../store/store";

const Auth: React.FC = () => {
  //! Initialization
  const [authState, setAuthState] = useStore((state) => [
    state.authState,
    state.setAuthState,
  ]);

  return (
    <section
      className={`${styles.auth_wrapper} ${
        authState?.isOpen ? styles["auth_toggle"] : ""
      }`}
      role="region"
      aria-labelledby="auth-heading"
    >
      {authState?.render === "login" && (
        <form action="" autoComplete="off" aria-labelledby="auth-heading">
          <div
            className={styles["form_close"]}
            onClick={() => setAuthState(false)}
          >
            <Close />
          </div>
          <div className={styles.auth_logo} aria-hidden="true"></div>
          <h2 id="auth-heading">Sign in</h2>
          <label htmlFor="email-input">Email</label>
          <input
            type="email"
            id="email-input"
            name="email"
            placeholder="Enter your email"
            maxLength={50}
            required
          />
          <label htmlFor="password-input">Password</label>
          <input
            type="password"
            id="password-input"
            name="password"
            placeholder="Enter your password"
            required
          />
          <div className={styles.auth_misc}>
            <div>
              <input type="checkbox" id="remember-me" name="remember" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <span onClick={() => setAuthState(true, "forgot_password")}>
              Forgot your password?
            </span>
          </div>
          <button type="submit">Sign in</button>
          <p>
            Don&apos;t have an account?{" "}
            <span onClick={() => setAuthState(true, "register")}>Sign up</span>
          </p>
        </form>
      )}
      {authState?.render === "forgot_password" && (
        <form action="" autoComplete="off" aria-labelledby="auth-heading">
          <div
            className={styles["form_close"]}
            onClick={() => setAuthState(false)}
          >
            <Close />
          </div>
          <div className={styles.auth_logo} aria-hidden="true"></div>
          <h2 id="auth-heading">Forgot password?</h2>
          <label htmlFor="email-input">Email</label>
          <input
            type="email"
            id="email-input"
            name="email"
            placeholder="Enter your email"
            maxLength={50}
            required
          />

          <button
            style={{ marginTop: "0rem", marginBottom: "2rem" }}
            type="submit"
          >
            Send email
          </button>
        </form>
      )}
      {authState?.render === "register" && (
        <form action="" autoComplete="off" aria-labelledby="auth-heading">
          <div
            className={styles["form_close"]}
            onClick={() => setAuthState(false)}
          >
            <Close />
          </div>
          <div className={styles.auth_logo} aria-hidden="true"></div>
          <h2 id="auth-heading">Sign up</h2>
          <label htmlFor="email-input">username</label>
          <input
            type="text"
            id="text-input"
            name="username"
            placeholder="Enter your username"
            maxLength={50}
            required
          />
          <label htmlFor="email-input">Email</label>
          <input
            type="email"
            id="email-input"
            name="email"
            placeholder="Enter your email"
            maxLength={50}
            required
          />
          <label htmlFor="password-input">Password</label>
          <input
            type="password"
            id="password-input"
            name="password"
            placeholder="Enter your password"
            required
          />
          <label htmlFor="password-input">Confirm password</label>
          <input
            type="password"
            id="confPassword-input"
            name="confPassword"
            placeholder="Confirm your password"
            required
          />

          <button style={{ marginTop: "0rem" }} type="submit">
            Sign in
          </button>
          <p>
            Already have an account?{" "}
            <span onClick={() => setAuthState(true, "login")}>Sign in</span>
          </p>
        </form>
      )}
    </section>
  );
};

export default Auth;
