import React from "react";
import Button from "../../sharedComponents/__elements/Button/Button";

const LoginView = () => {
  const buttonText = "Login with Spotify";
  return (
    <div className="row">
      <div className="col-12">
        <Button text={buttonText} />
      </div>
    </div>
  );
};

export default LoginView;
