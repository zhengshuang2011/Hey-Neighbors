import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import "./Register.css";

function Register({ user, setUser }) {
  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      first_name,
      last_name,
      email,
      password,
    });
    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post("/api/users/register", data, {
        headers: headers,
      })
      .then((response) => {
        console.log("response", response.data);
        if (!response.data.id) {
          console.log("bad");
          setError(response.data);
          return;
        } else {
          console.log("yeah");
          setError("");
          setUser(response.data);
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };

  const validateForm = () => {
    return (
      first_name.length > 0 &&
      last_name.length > 0 &&
      email.length > 0 &&
      password.length > 0
    );
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
          <div className="auth__title title title_xl">Hey Neigbors</div>
          <div className="auth__subtitle title title_sm">
            Enter your details to explore more experiences
          </div>
        </div>
      </div>
      <div className="auth__container">
        <div className="auth__inner">
          <div className="auth__head">
            <div className="auth__title title title_xl">
              <p>Hey Neigbors</p>
              <p>Sign Up to getting started.</p>
            </div>
            <div className="auth__text">
              Enter your details to explore more experiences
            </div>
          </div>
          <form className="auth__form" action="" onSubmit={handleSubmit}>
            <div className="field auth__field">
              <div className="field__label">First name</div>
              <div className="field__wrap">
                <input
                  className="field__input"
                  type="text"
                  placeholder="Start typing…"
                  value={first_name}
                  onChange={(e) => setFirst(e.target.value)}
                  required
                />
                <div className="field__icon">
                  <i className="la la-user-alt " />
                </div>
              </div>
            </div>
            <div className="field auth__field">
              <div className="field__label">Last name</div>
              <div className="field__wrap">
                <input
                  className="field__input"
                  type="text"
                  placeholder="Start typing…"
                  value={last_name}
                  onChange={(e) => setLast(e.target.value)}
                  required
                />
                <div className="field__icon">
                  <i className="la la-user-alt " />
                </div>
              </div>
            </div>
            <div className="field auth__field">
              <div className="field__label">Email</div>
              <div className="field__wrap">
                <input
                  className="field__input"
                  type="email"
                  placeholder="Start typing…"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="field__icon">
                  <i className="la la-envelope " />
                </div>
              </div>
            </div>
            <div className="field auth__field">
              <div className="field__label">Password</div>
              <div className="field__wrap">
                <input
                  className="field__input"
                  type="password"
                  placeholder="Start typing…"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="field__icon">
                  <i className="la la-lock " />
                </div>
              </div>
            </div>
            {error && <p className="errormsg">{error}</p>}
            <div className="auth__flex">
              <label className="switch auth__switch">
                <input
                  className="switch__input"
                  type="radio"
                  name="terms"
                  defaultChecked=""
                />
                <span className="switch__content">
                  I agree with terms &amp; conditions
                </span>
              </label>
            </div>
            <div className="auth__btns">
              <button
                className="btn btn-primary submit"
                disabled={!validateForm}
              >
                Sign Up
              </button>
              <Link to="/signin">
                <button className="btn btn-secondary">Sign In</button>
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
        style={{ backgroundImage: "url(img/bg-login-sign-up.jpg)" }}
      />
    </div>
  );
}
Register.propTypes = {
  setUser: PropTypes.func.isRequired,
};
export default Register;
