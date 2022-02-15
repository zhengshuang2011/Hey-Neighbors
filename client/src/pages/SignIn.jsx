import React from "react";
import "./SignIn.css";
import PropTypes from "prop-types";
import Login from "../components/Login/Login";

export default function SignIn({ setToken }) {
  return <Login setToken={setToken} />;
}

SignIn.propTypes = {
  setToken: PropTypes.func.isRequired,
};
