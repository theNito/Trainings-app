import React, { createContext, useState } from "react"
import DefaultProvider from "../../DefaultProvider"

const PoleStateContext = createContext(null)
const PoleUpdateContext = createContext(null)

export const PoleProvider = ({ children }) => {
  const [pole, setPoles] = useState([])

  return DefaultProvider({
    children: children,
    StateContext: PoleStateContext,
    UpdateContext: PoleUpdateContext,
    elements: pole,
    setElements: setPoles,
  })
}

export const usePoleState = () => {
  const state = React.useContext(PoleStateContext)

  if (state === undefined) {
    throw new Error("usePoleState must be used within a PoleProvider")
  }

  return state
}

export const usePoleUpdate = () => {
  const update = React.useContext(PoleUpdateContext)

  if (update === undefined) {
    throw new Error("usePoleUpdate must be used within a PoleProvider")
  }

  return update
}
