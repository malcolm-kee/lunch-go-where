import "./style.css";

import React from "react";
import { Link } from "react-router-dom";

import Loader from "../Loader";

const AuthGroup = ({ logout, loggedIn, isLoading, userName }) => {
  if (loggedIn) {
    return (
      <div>
        <span className="text-warning userName">{userName}</span>
        <button onClick={logout} className="btn btn-outline-warning">
          Logout
        </button>
      </div>
    );
  } else if (isLoading) {
    return <Loader />;
  }
  return (
    <Link to="/login" className="btn btn-primary">
      Login
    </Link>
  );
};

export default AuthGroup;
