import React from "react";
import "./style.css"
import logo from "../../assets/images/amazon-icon-21121.jpg"
import { Link } from "react-router-dom";
export default function Sign() {
  return (
    <>
        <div className="sign">
          <img src={logo} id="amazon-icon" />
          <div className="card">
            <form action="/index.html" id="SignForm">
              <h1>Sign in</h1>
              <label htmlFor="email">Email or mobile phone number</label>
              <input type="text" id="email" />
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

            <Link to="/register" id="create-btn">Create your New Amazon Account</Link>

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
