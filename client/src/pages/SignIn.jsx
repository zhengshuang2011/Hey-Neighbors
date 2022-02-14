import React, { useState } from "react";
import "./SignIn.css";
import PropTypes from "prop-types";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function SignIn({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  console.log(error);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      email,
      password,
    });
    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post("/api/users/login", data, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data);
        setToken(response.data.id);
        setError("");
      })
      .catch((err) => {
        console.log("Error : ", err);
        setError("error");
      });
  };

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <p>wrong information</p>}
        <div>
          <button type="submit" disabled={!validateForm}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

SignIn.propTypes = {
  setToken: PropTypes.func.isRequired,
};
