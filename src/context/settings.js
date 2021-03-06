import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {

  const [hide, setHide] = useState(false);
  const [displayNumberOfItems, setDisplayNumberOfItems] = useState(5);
  const [sort, setSort] = useState('difficulty')

  return (
    <SettingsContext.Provider value={{hide, displayNumberOfItems, sort, setHide, setDisplayNumberOfItems, setSort}}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;