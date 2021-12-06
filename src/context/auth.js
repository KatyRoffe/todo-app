import React, { useState } from 'react';
import jwt from 'jsonwebtoken';

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

  return (

    <AuthContext.Provider value={{user, isUserLoggedIn, login, logout, isUserAuthorized}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;