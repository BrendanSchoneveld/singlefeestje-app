import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

import logo from "./logo.svg";
import "./App.scss";
import Header from "./sharedComponents/__layout/Header/Header";
import Main from "./sharedComponents/__layout/Main/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Main />
      </div>
    </Router>
  );
}

export default App;
