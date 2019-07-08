import React from "react";
import Navigation from "../Navigation/Navigation";

import "./HeaderStyling.scss";

const Header = () => {
  return (
    <header className="app-header flex flex--align-bottom">
      <div className="container">
        <div className="row">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
