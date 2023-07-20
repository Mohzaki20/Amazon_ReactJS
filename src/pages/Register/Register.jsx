import React from "react";
import "./style.css";
import logo from "../../assets/images/amazon-icon-21121.jpg";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig/FirebaseConfig";

export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <>
      <div>
        <div className="register">
          <img src={logo} id="amazon-icon" />
          <div className="card">
            <form  id="form" onSubmit={(e) => handleRegister(e)}>
              <h1>Create account</h1>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="First and Last name" />
              <label htmlFor="mobile">Mobile number or email</label>
              <input type="text" id="mobile" onChange={(e) => setEmail(e)}/>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="At least 6 Characters"
              />
              <div className="alert">
                <i className="fa-solid fa-info" style={{ color: "#629dba" }} />
                Passwords must be at least 6 characters.
              </div>
              <label htmlFor="re-password">Re-enter password</label>
              <input type="password" id="re-password" onChange={(e) => setPassword(e)}/>
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
              <div className="signIn">
                Already have an account?<a href="/Sign.html">Sign in</a>
                <i
                  className="fa-solid fa-caret-right"
                  style={{ "fontSize": "10px", color: "#0066c0" }}
                />
              </div>
            </div>
          </div>
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
      </div>
    </>
  );
}
