import React from "react";

const Login = (props) => {
  <nav className="login">
    <h2>Login here</h2>
    <p>Sign in to manage your favorite animals</p>
    <button className="github"
      	    onClick={() => props.authenticate("Github")}>
      Login with github
    </button>
    <button className="google"
	    onClick={() => props.authenticate("Google")}>
      Login with Google
    </button>
  </nav>
);

export default Login;
