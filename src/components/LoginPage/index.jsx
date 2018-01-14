import React, { Component } from "react";
import { connect } from "react-redux";
import { isEmpty, isLoaded, withFirebase } from "react-redux-firebase";

import LoginPage from "./view";

class LoginPageContainer extends Component {
  signInWithGoogle = () => {
    const { firebase } = this.props;

    firebase.login({
      provider: "google",
      type: "redirect"
    });
  };

  logout = () => {
    const { firebase } = this.props;

    firebase.logout();
  };

  render() {
    const { auth } = this.props;

    return (
      <LoginPage
        signInWithGoogle={this.signInWithGoogle}
        logout={this.logout}
        loggedIn={!isEmpty(auth)}
        isLoading={!isLoaded(auth)}
        userName={auth.displayName}
      />
    );
  }
}

const mapStateToProps = ({ firebase: { auth } }) => ({ auth });

export default withFirebase(connect(mapStateToProps)(LoginPageContainer));
