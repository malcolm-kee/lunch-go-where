import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isEmpty, isLoaded, withFirebase } from "react-redux-firebase";

import AuthGroup from "./view";

class AuthGroupContainer extends Component {
  static propTypes = {
    firebase: PropTypes.shape({
      logout: PropTypes.func.isRequired
    }).isRequired,
    auth: PropTypes.shape({
      displayName: PropTypes.string
    }).isRequired
  };

  logout = () => {
    const { firebase } = this.props;

    firebase.logout();
  };

  render() {
    const { auth } = this.props;

    return (
      <AuthGroup
        logout={this.logout}
        loggedIn={!isEmpty(auth)}
        isLoading={!isLoaded(auth)}
        userName={auth.displayName}
      />
    );
  }
}

const mapStateToProps = ({ firebase: { auth } }) => ({ auth });

export default withFirebase(connect(mapStateToProps)(AuthGroupContainer));
