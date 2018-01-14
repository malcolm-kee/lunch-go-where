import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./style.css";

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

AuthGroup.propTypes = {
  logout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  userName: PropTypes.string
};

AuthGroup.defaultProps = {
  userName: ""
};

export default AuthGroup;
