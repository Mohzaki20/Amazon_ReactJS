import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/images/amazon-icon-21121.jpg";
import { Link, Navigate } from "react-router-dom";
import { auth } from "../../FirebaseConfig/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
export default function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSign(e) {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      Navigate("./Home")
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="sign">
        <img src={logo} id="amazon-icon" alt="" />
        <div className="card">
          <form
            action="/index.html"
            id="SignForm"
            onSubmit={(e) => handleSign(e)}
          >
            <h1>Sign in</h1>
            <label htmlFor="email">Email or mobile phone number</label>
            <input type="text" id="email" onChange={(e) => setEmail(e)} />
            <div className="error-msg" />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e)}
            />
            <div className="error-msg" />
            <button type="submit" id="btn">
              Continue
            </button>
          </form>
          <p className="services">
            By continuing, you agree to Amazon's{" "}
            <a href="#">Conditions of Use</a> and{" "}
            <a href="#">Privacy Notice.</a>
          </p>
          <div className="helping">
            <i
              className="fa-solid fa-caret-right"
              style={{ fontSize: "12px", color: "#666" }}
            />
            <span>
              <a href="#" id="sign-link">
                Need help?
              </a>
            </span>
          </div>
        </div>
        <div className="line" />

        <Link to="/register" id="create-btn">
          Create your New Amazon Account
        </Link>
      </div>
      <div className="bottom-section">
        <div>
          <div className="link">
            <a href="#">Conditions of Use</a>
            <a href="#">Privacy Notice.</a>
            <a href="#">Help</a>
          </div>
          <div className="description">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </>
  );
}
