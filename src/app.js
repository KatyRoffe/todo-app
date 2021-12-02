import React from 'react';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import SettingsProvider from './context/settings'
import ToDo from './components/todo/todo.js';


export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <ToDo />
      </SettingsProvider>
    );
  }
}