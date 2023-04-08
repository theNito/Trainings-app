import React, { createContext, useState } from "react"
import DefaultProvider from "../../DefaultProvider"

const DiscConeStateContext = createContext(null)
const DiscConeUpdateContext = createContext(null)

export const DiscConeProvider = ({ children }) => {
  const [discCones, setDiscCones] = useState([])

  return DefaultProvider({
    children: children,
    StateContext: DiscConeStateContext,
    UpdateContext: DiscConeUpdateContext,
    elements: discCones,
    setElements: setDiscCones,
  })
}

export const useDiscConeState = () => {
  const state = React.useContext(DiscConeStateContext)

  if (state === undefined) {
    throw new Error("useDiscConeState must be used within a DiscConeProvider")
  }

  return state
}

export const useDiscConeUpdate = () => {
  const update = React.useContext(DiscConeUpdateContext)

  if (update === undefined) {
    throw new Error("useDiscConeUpdate must be used within a DiscConeProvider")
  }

  return update
}
