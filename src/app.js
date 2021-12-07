import React from 'react';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import SettingsProvider from './context/settings'
import ToDo from './components/todo/todo.js';
import Login from './components/auth/login.js';
import Auth from './components/auth/auth.js'


function App() {

  return (
    <>
      <Login />
      <Auth capability="delete">
        <p>Welcome, Admin!</p>
        <SettingsProvider>
          <ToDo />
        </SettingsProvider>
      </Auth>
    </>
  );
}

export default App;