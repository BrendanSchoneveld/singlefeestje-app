import React from "react";

const Button = ({ text }) => {
  return (
    <button className="btn-default p-all-4" type="button">
      {text}
    </button>
  );
};

export default Button;
