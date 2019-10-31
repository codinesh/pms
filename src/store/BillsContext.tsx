import * as React from 'react'
import { Action, initialState, appReducer } from './AppReducer'

const AppContext = React.createContext(initialState)
const AppDispatch = React.createContext((() => 0) as React.Dispatch<Action>)

export const BillContextProvider = ({ children }: any) => {
  const [state, dispatch] = React.useReducer(appReducer, initialState)
  return (
    <AppDispatch.Provider value={dispatch}>
      <AppContext.Provider value={state}>{children}</AppContext.Provider>
    </AppDispatch.Provider>
  )
}

export const useDispatch = () => {
  return React.useContext(AppDispatch)
}

export const useGlobalState = () => {
  const state = React.useContext(AppContext)
  return state
}
