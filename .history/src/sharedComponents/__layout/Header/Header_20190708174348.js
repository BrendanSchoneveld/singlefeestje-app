import React from "react";
import Navigation from "../Navigation/Navigation";

import "./HeaderStyling.scss";

const Header = () => {
  return (
    <header className="app-header">
      <div className="container flex flex--align-b">
        <div className="row">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
