import React from "react";
import "./SignIn.css";
import Login from "../components/Login/Login";

export default function SignIn({ user, setUser }) {
  return <Login user={user} setUser={setUser} />;
}
