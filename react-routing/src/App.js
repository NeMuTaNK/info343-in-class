import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SignUpView from "./Components/SignUp";
import SignInView from "./Components/SignIn";
import ChannelView from "./Components/Channel";
import constants from "./Components/constants";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="jumbotron bg-dark">
          <h1 className="display-3 text-light">React: Router Demo</h1>
        </header>
        <div className="container">
          <div className="row">
            <Router>
              <Switch>
                {/* These matching are done pretty loosely */}
                <Route exact path = {constants.routes.signin} component = {SignInView} />
                <Route path = {constants.routes.signup} component = {SignUpView} />
                <Route path = {constants.routes.channel} component = {ChannelView} />
                <Route component = {SignUpView} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
