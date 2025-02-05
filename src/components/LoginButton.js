import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';

// Please include attribution for code like this that comes in part from the documentation!
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button variant="primary" onClick={() => loginWithRedirect()}>
      Log In
    </Button>
  )
};

export default LoginButton;
