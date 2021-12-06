import React, { useContext } from 'react';
import { AuthContext } from '../../context/Auth.js';


const IsUserAuthorized = ({ children, capability }) => {

  const authContext = useContext(AuthContext);

  const isUserLoggedIn = authContext.isUserLoggedIn;
  const isUserAuthorized = authContext.isUserAuthorized(capability);
  const isOkToRender = isUserLoggedIn && isUserAuthorized;

  return (
    <>
      {isOkToRender ? children : null}
    </>
  )
}

export default IsUserAuthorized;