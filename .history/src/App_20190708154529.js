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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  );
}

export default App;
