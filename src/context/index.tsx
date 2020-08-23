import React, { useReducer } from 'react'

import reducer from './reducer'
import initialState from './reducer/initialState'


const StateContext = React.createContext<any>({});
const DispatchContext = React.createContext<any>({});


const AppContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

function useState() {
  const context = React.useContext(StateContext)

  if (context === undefined) {
    throw new Error('useState must be used within a Provider')
  }

  return context
}

function useDispatch() {
  const context = React.useContext(DispatchContext)

  if (context === undefined) {
    throw new Error('useDispatch must be used within a Provider')
  }

  return context
}

function useAppContext() {
  return [useState(), useDispatch()]
}

export { useAppContext, AppContextProvider }
