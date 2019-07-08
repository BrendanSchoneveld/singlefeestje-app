import React from "react";
import Navigation from "../Navigation/Navigation";

import "./HeaderStyling.scss";

const Header = () => {
  return (
    <header className="app-header flex flex--align-b">
      <div className="container">
        <div className="row">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
