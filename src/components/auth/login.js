import { useContext, useState } from 'react';
import  { Button, InputGroup } from '@blueprintjs/core';

import { AuthContext } from '../../context/auth';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isUserLoggedIn, login, logout } = useContext(AuthContext);

  const handleChange = e => {
    let { name, value } = e.target;

    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  }

  return (
    <>
      {isUserLoggedIn
        ? <Button onClick={logout}>Logout</Button>

        : <form onSubmit={handleSubmit}>
            <InputGroup onChange={handleChange} name="username" placeholder="username" />
            <InputGroup onChange={handleChange} name="password" placeholder="password" />
            <Button type="submit">Login</Button>
        </form>
      }
    </>
  )
}

export default Login;