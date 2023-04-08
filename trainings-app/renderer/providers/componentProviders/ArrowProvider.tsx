import React, { createContext, useState } from "react"

const ArrowStateContext = createContext(null)
const ArrowUpdateContext = createContext(null)

export const ArrowProvider = ({ children }) => {
  const [arrows, setArrows] = useState([])

  return (
    <ArrowStateContext.Provider value={arrows}>
      <ArrowUpdateContext.Provider value={setArrows}>
        {children}
      </ArrowUpdateContext.Provider>
    </ArrowStateContext.Provider>
  )
}

export const useArrowState = () => {
  const state = React.useContext(ArrowStateContext)

  if (state === undefined) {
    throw new Error("useArrowState must be used within a ArrowProvider")
  }

  return state
}

export const useArrowUpdate = () => {
  const update = React.useContext(ArrowUpdateContext)

  if (update === undefined) {
    throw new Error("useArrowUpdate must be used within a ArrowProvider")
  }

  return update
}
