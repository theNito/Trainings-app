import React, { createContext, useState } from "react"
import DefaultProvider from "../../DefaultProvider"

const ConeStateContext = createContext(null)
const ConeUpdateContext = createContext(null)

export const ConeProvider = ({ children }) => {
  const [cones, setCones] = useState([])

  return DefaultProvider({
    children: children,
    StateContext: ConeStateContext,
    UpdateContext: ConeUpdateContext,
    elements: cones,
    setElements: setCones,
  })
}

export const useConeState = () => {
  const state = React.useContext(ConeStateContext)

  if (state === undefined) {
    throw new Error("useConeState must be used within a ConeProvider")
  }

  return state
}

export const useConeUpdate = () => {
  const update = React.useContext(ConeUpdateContext)

  if (update === undefined) {
    throw new Error("useConeUpdate must be used within a ConeProvider")
  }

  return update
}
