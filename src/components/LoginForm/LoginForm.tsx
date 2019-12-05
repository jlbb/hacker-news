import React, { useState } from "react";
import bem from "bera";

const componentClass = bem("LoginForm");

interface LoginFormProps {}

const LoginForm = (props: LoginFormProps) => {
  const [signupMode, setSignupMode] = useState(false);

  const handleLoginSubmit = (e: any) => {
    e.preventDefault();

    console.log("FORM SUBMIT!!", e);
  };

  return (
    <form className={componentClass()} onSubmit={handleLoginSubmit}>
      <div className={componentClass("formContainer")}>
        <h2>{signupMode ? "Sign Up" : "Log In"}</h2>

        <label>
          <b>Username</b>
        </label>
        <input
          className={componentClass("inputField")}
          type="text"
          placeholder="Email"
          name="username"
          autoFocus
          required
        />

        <label>
          <b>Password</b>
        </label>
        <input
          className={componentClass("inputField")}
          type="password"
          placeholder="Password"
          name="password"
          required
        />

        {signupMode ? (
          <React.Fragment>
            <label>
              <b>Password confirmation</b>
            </label>
            <input
              className={componentClass("inputField")}
              type="password"
              placeholder="Password confirmation"
              name="password_confirm"
              required
            />
          </React.Fragment>
        ) : null}

        <p
          className={componentClass("loginSwitch")}
          onClick={() => setSignupMode(!signupMode)}
        >
          {signupMode
            ? "Do you already have an account? Login here"
            : "Don't have an account yet? Create it here"}
        </p>

        <button className={componentClass("submitButton")} type="submit">
          Login
        </button>
        {/* <label>
        <input type="checkbox" checked name="remember"></input>
      </label> */}
      </div>
    </form>
  );
};

export default LoginForm;
