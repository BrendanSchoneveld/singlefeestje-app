import React from "react";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="app-header">
      <div className="container">
        <div className="row">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
