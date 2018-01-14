import "./style.css";

import React from "react";
import { Link } from "react-router-dom";

import Loader from "../Loader";

const LoginPage = ({ signInWithGoogle, logout, loggedIn, isLoading, userName }) => {
  if (loggedIn) {
    return (
      <div id="LoginPage">
        <div>
          <h3>Welcome! {userName}</h3>
          <Link to="/" className="btn btn-primary">
            Go to homepage
          </Link>
          <button onClick={logout} className="btn btn-secondary">
            Logout
          </button>
        </div>
      </div>
    );
  } else if (isLoading) {
    return (
      <div id="LoginPage">
        <Loader />
      </div>
    );
  }
  return (
    <div id="LoginPage">
      <div className="LoginPageItem">
        <button onClick={signInWithGoogle} className="btn btn-primary">
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
