import React from 'react'

function Login() {
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
            <div className="auth__text">Enter your details to explore more experiences</div>
          </div>
          <form className="auth__form" action="">
            <div className="field auth__field">
              <div className="field__label">Email</div>
              <div className="field__wrap">
                <input
                  className="field__input"
                  type="email"
                  placeholder="Start typing…"
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
                />
                <div className="field__icon">
                  <i className="la la-lock " />
                </div>
              </div>
            </div>
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
              <button className="btn auth__btn">Sign In</button>
              <button className="btn btn_light auth__btn">Sign Up</button>
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

  )
}

export default Login