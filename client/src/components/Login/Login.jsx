import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import "./Login.css";

function Login({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // console.log("loginpage user", user);
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

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
        // console.log(response.data);
        setUser(response.data);
        setError("");
        navigate("/home");
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
    <div className="auth">
      <div
        className="auth__main"
        style={{ backgroundImage: "url(img/bg-login-mobile.jpg)" }}
      >
        <div className="auth__wrap">
          <div className="auth__preview">
            <img
              className="auth__pic"
              src="img/logo-white.svg"
              width={48}
              alt="Logo"
            />
          </div>
          <div className="auth__title title title_xl">Hey Neigbors!</div>
          <div className="auth__subtitle title title_sm">
            Enter your details to explore more experiences
          </div>
        </div>
      </div>
      <div className="auth__container">
        <div className="auth__inner">
          <div className="auth__head">
            <div className="auth__title title title_xl">
              <p>Hey Neigbors!</p>
              <p>Sign In to see latest updates.</p>
            </div>
            <div className="auth__text">
              Enter your details to explore more experiences
            </div>
          </div>
          <form className="auth__form" action="" onSubmit={handleSubmit}>
            <div className="field auth__field">
              <div className="field__label">Email</div>
              <div className="field__wrap">
                <input
                  className="field__input"
                  type="email"
                  placeholder="Start typing…"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="field__icon">
                  <i className="la la-envelope " />
                </div>
              </div>
            </div>
            <div className="field auth__field password">
              <div className="field__label">Password</div>
              <div className="field__wrap">
                <input
                  className="field__input"
                  type="password"
                  placeholder="Start typing…"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="field__icon">
                  <i className="la la-lock " />
                </div>
              </div>
            </div>
            {error && (
              <p className="errormsg">Please enter correct information</p>
            )}
            {/* <div className="auth__flex">
              <label className="switch auth__switch">
                <input
                  className="switch__input"
                  type="checkbox"
                  defaultChecked=""
                />
                <span className="switch__content">Remember me</span>
              </label>
            </div> */}
            <div className="auth__btns">
              <button
                className="btn btn-primary submit"
                typr="submit"
                disabled={!validateForm}
              >
                Sign In
              </button>
              <Link to="/signup">
                <button className="btn btn-secondary ">Sign Up</button>
              </Link>
            </div>
            {/* enter*/}
            <div className="auth__enter enter">
              <div className="enter__text">Or sign in with</div>
              <div className="enter__socials">
                <a className="enter__btn btn btn_only_icon" href="#">
                  <i className="la la-facebook " />
                </a>
                <a className="enter__btn btn btn_only_icon" href="#">
                  <i className="la la-google " />
                </a>
                <a className="enter__btn btn btn_only_icon" href="#">
                  <i className="la la-twitter " />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className="auth__bg"
        style={{ backgroundImage: "url(img/bg-login-sign-in.jpg)" }}
      ></div>
    </div>
  );
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};
export default Login;
