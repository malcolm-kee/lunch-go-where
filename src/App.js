import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import store from "./config/store";

import LoginPage from "./components/LoginPage";
import LandingPage from "./components/LandingPage";

class App extends Component {
  render() {
    return (
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
  }
}

export default App;
