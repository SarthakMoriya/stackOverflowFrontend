import React, { useState } from "react";

import icon from "../../assets/icon.png";
import "./Auth.css";
import AboutAuth from "./AboutAuth";
const Auth = () => {
  //isSignupPage?? initially false ie we are not on signup
  const [isSignup, setIsSignup] = useState(false);
  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };
  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignup && (
          <img src={icon} alt="StackOverflow Icon" className="login-logo" />
        )}
        <form>
          {isSignup && (
            <label htmlFor="name">
              <h4>Username:</h4>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Display Name:"
                className='input-width'
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email:</h4>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            className='input-width'
          />
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password:</h4>
              {!isSignup && (
                <h4 style={{ color: "#007ac6", fontSize: "13px" }}>
                  Forgot Password?
                </h4>
              )}
            </div>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            className='input-width'
          />
          {isSignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              password must contain 8 characters ,<br /> including atleast 1
              letter and number
            </p>
          )}

          {isSignup && (
            <label htmlFor="check" className='flex1'>
              <input type="checkbox" id="check" />
              <p style={{ fontSize: "13px" }}>
                Opt-in to recieve occastional <br /> product updates , user
                research invitations,
                <br />
                company announcements, and digests.
              </p>
            </label>
          )}

          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Log in"}
          </button>
          {isSignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking "Sign up" , you agree to our
              <span style={{ color: "#007ac6" }}>
                {" "}
                terms of <br />
                service
              </span>
              ,<span style={{ color: "#007ac6" }}> privacy policy</span>, and
              <span style={{ color: "#007ac6" }}> cookie policy</span>
            </p>
          )}
        </form>
        <p>
          {isSignup ? "Already have an Account?" : "Create a new Account"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Login" : "Signup"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
