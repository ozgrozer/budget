import React, { useState, createContext } from 'react'

const MainContext = createContext()

const MainProvider = props => {
  const [state, setState] = useState({
    selectedPage: 'transactions'
  })

  const _setState = newState => {
    setState(state => ({
      ...state,
      ...newState
    }))
  }

  const value = {
    state,
    setState: _setState
  }

  return (
    <MainContext.Provider value={value}>
      {props.children}
    </MainContext.Provider>
  )
}

export {
  MainContext,
  MainProvider
}
