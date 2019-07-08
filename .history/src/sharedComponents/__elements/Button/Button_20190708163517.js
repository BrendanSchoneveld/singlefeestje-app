import React from "react";

const Button = ({ text }) => {
  return (
    <button className="btn-default" type="button">
      {text}
    </button>
  );
};

export default Button;
