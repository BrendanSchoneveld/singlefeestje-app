import React, { Fragment } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

const Main = () => {
  return (
    <div className="container">
      <div className="row">
        <Switch>
          <Route
            path="/"
            render={props => (
              <Component fetchData={this.fetchData} {...props} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
