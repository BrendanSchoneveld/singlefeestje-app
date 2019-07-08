import React, { Fragment } from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  NavLink
} from "react-router-dom";
import LoginView from "../../../views/LoginView/LoginView";

const Main = () => {
  const loggedIn = false;

  return (
    <div className="container">
      <div className="row">
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              loggedIn ? <Redirect to="/home" /> : <LoginView {...props} />
            }
          />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
