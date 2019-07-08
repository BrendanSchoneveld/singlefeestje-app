import React, { Fragment } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import LoginView from "../../../views/LoginView/LoginView";

const Main = () => {
  return (
    <div className="container">
      <div className="row">
        <Switch>
          <Route path="/login" render={props => <LoginView {...props} />} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
