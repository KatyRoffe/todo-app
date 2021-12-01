import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function Settings(props) {

  const [hide, setHide] = useState(false);
  const [displayNumberOfItems, setDisplayNumberOfItems] = useState(5);
  const [sort, setSort] = useState('')

  return (
    <SettingsContext.Provider value={{hide, displayNumberOfItems, sort}}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default Settings;