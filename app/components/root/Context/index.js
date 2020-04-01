import React, {createContext, useEffect, useState} from 'react'

import initialStates from './states'

export const GlobalContext = createContext()
export const states = initialStates;

const Context = ({children, contextStates}) => {

  return <GlobalContext.Provider value={{...contextStates}}>
    {children}
  </GlobalContext.Provider>
}


export default Context
