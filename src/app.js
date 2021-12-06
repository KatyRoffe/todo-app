import React from 'react';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import SettingsProvider from './context/settings'
import ToDo from './components/todo/todo.js';
import Login from './components/auth/login.js';
import Auth from './components/auth/auth.js'


export default class App extends React.Component {
  render() {
    return (
    <>
      <Login />
      <Auth capability="read">
        <SettingsProvider>
          <ToDo />
        </SettingsProvider>
      </Auth>
    </>
    );
  }
}