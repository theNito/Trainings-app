import React, { createContext, useState } from "react"
import DefaultProvider from "../../DefaultProvider"

const RebouncerStateContext = createContext(null)
const RebouncerUpdateContext = createContext(null)

export const RebouncerProvider = ({ children }) => {
  const [rebouncers, setRebouncers] = useState([])

  return DefaultProvider({
    children: children,
    StateContext: RebouncerStateContext,
    UpdateContext: RebouncerUpdateContext,
    elements: rebouncers,
    setElements: setRebouncers,
  })
}

export const useRebouncerState = () => {
  const state = React.useContext(RebouncerStateContext)

  if (state === undefined) {
    throw new Error("useRebouncerState must be used within a RebouncerProvider")
  }

  return state
}

export const useRebouncerUpdate = () => {
  const update = React.useContext(RebouncerUpdateContext)

  if (update === undefined) {
    throw new Error(
      "useRebouncerUpdate must be used within a RebouncerProvider"
    )
  }

  return update
}
