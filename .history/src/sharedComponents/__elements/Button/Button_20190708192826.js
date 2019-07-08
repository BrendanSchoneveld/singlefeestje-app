import React from "react";

import "./Button.scss";

const Button = ({ text }) => {
  return (
    <button className="btn btn-default" type="button">
      {text}
    </button>
  );
};

export default Button;
