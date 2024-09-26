import React, { useState, useEffect } from "react";
import './Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEye, faEyeSlash, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faDiscord, faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const LoginRegister = () => {
  const [signUpMode, setSignUpMode] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [registerPasswordVisible, setRegisterPasswordVisible] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (theme) => {
    setTheme(theme);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleRegisterPasswordVisibility = () => {
    setRegisterPasswordVisible(!registerPasswordVisible);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  return (
    <div className={`container ${signUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign In Form */}
          <form className="sign-in-form">
            <h2 className="title">Login</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} />
              <input type="text" name="usuario" placeholder="Username" required autoComplete="username" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} />
              <input
                type={passwordVisible ? "text" : "password"}
                name="contraseña"
                placeholder="Password"
                required
                id="id_password"
                autoComplete="current-password"
              />
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              />
            </div>
            <a href="#" className="key use-keyboard-input">Virtual keyboard</a>
            <a className="pass" href="#">Forgot your password?</a>
            <input type="submit" value="Sign in" className="btn solid" />
            <p className="social-text">You can login with:</p>
            <div className="social-media">
              <a href="#" className="social-icon" aria-label="Login with Google">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className="social-icon" aria-label="Login with Discord">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a href="#" className="social-icon" aria-label="Login with Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-icon" aria-label="Login with Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
            <div className="social-media">
              <a className="icon-mode" onClick={() => toggleTheme('dark')}>
                <FontAwesomeIcon icon={faMoon} />
              </a>
              <a className="icon-mode" onClick={() => toggleTheme('light')}>
                <FontAwesomeIcon icon={faSun} />
              </a>
            </div>
            <p className="text-mode">Change theme</p>
          </form>

          {/* Sign Up Form */}
          <form className="sign-up-form">
            <h2 className="title">Register</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} />
              <input type="text" name="usuario" placeholder="Username" required autoComplete="username" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon="fas fa-envelope" />
              <input type="email" name="correo" placeholder="Email" required autoComplete="email" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} />
              <input
                type={registerPasswordVisible ? "text" : "password"}
                name="contraseña"
                placeholder="Password"
                required
                id="id_reg"
                autoComplete="current-password"
              />
              <FontAwesomeIcon
                icon={registerPasswordVisible ? faEyeSlash : faEye}
                onClick={toggleRegisterPasswordVisibility}
                style={{ cursor: "pointer" }}
              />
            </div>
            <a href="#" className="key use-keyboard-input">Virtual keyboard</a>
            <a href="https://priva.reversecode.repl.co/tools/pass.html" className="pass" target="_blank">Generate a strong password</a>
            <label className="check">
              <input type="checkbox" checked="checked" readOnly />
              <span className="checkmark">I accept the <a href="terms.html">terms and services</a></span>
            </label>
            <input type="submit" value="Create account" className="btn solid" />
            <p className="social-text">You can register with:</p>
            <div className="social-media">
              <a href="#" className="social-icon" aria-label="Register with Google">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className="social-icon" aria-label="Register with Discord">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a href="#" className="social-icon" aria-label="Register with Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-icon" aria-label="Register with Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>You don't have an account?</h3>
            <p>Create your account right now to follow people and like publications</p>
            <button className="btn transparent" onClick={handleSignUpClick}>Register</button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>Already have an account?</h3>
            <p>Login to see your notifications and post your favorite photos</p>
            <button className="btn transparent" onClick={handleSignInClick}>Sign in</button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
