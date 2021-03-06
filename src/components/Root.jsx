import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "./LoginPage";
import LandingPage from "./LandingPage";

const Root = ({ store }) => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

Root.propTypes = {
  store: PropTypes.shape({
    place: PropTypes.object
  }).isRequired
};

export default Root;
