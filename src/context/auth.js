import React, { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies'

export const AuthContext = React.createContext();

const testUsers = {
  admin: {username: 'admin', password: 'test', capabilities:['create', 'read', 'update', 'delete']},
  user: {username: 'user', password: 'test', capabilities:['read']}
}

const SECRET = process.env.REACT_APP_SECRET|| 'itsasecret';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: '',
    token: '',
    capabilities: [],
  });

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  const isUserAuthorized = (capability) => {
    return user?.capabilities?.includes(capability);
  }

  const login = (username, password) => {

    const user = testUsers[username];

    if(user){
      const token = jwt.sign({ user }, SECRET);
      setUser({
        username: user.username,
        token: token,
        capabilities: user.capabilities
      });
      setIsUserLoggedIn(true);
    }
  }

  const logout = () => {

    if(isUserLoggedIn){
      setUser({username: '', token: '', capabilities: [] });
      setIsUserLoggedIn(false)
    }
  }

  const setLogInState = (boolean, token, user) => {
    cookie.save('auth', token);
    setIsUserLoggedIn(boolean);
    setToken(token);
    setUser(user);
  }

  const validateToken = (token) => {
    try{
      let user = jwt.verify(token, SECRET);
      setLogInState(true, token, user);
    } catch (e) {
      setLogInState(false, null, {});
      console.log('Error validating token:', e);
    }
  }

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');
    const token = query.get('token') || cookieToken || null;
    validateToken(token);
  }, []);

  

  return (

    <AuthContext.Provider value={{user, isUserLoggedIn, login, logout, isUserAuthorized, setLogInState}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;