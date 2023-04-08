import React, { createContext, useState } from "react"
import DefaultProvider from "../../DefaultProvider"

const StickStateContext = createContext(null)
const StickUpdateContext = createContext(null)

export const StickProvider = ({ children }) => {
  const [sticks, setSticks] = useState([])

  return DefaultProvider({
    children: children,
    StateContext: StickStateContext,
    UpdateContext: StickUpdateContext,
    elements: sticks,
    setElements: setSticks,
  })
}

export const useStickState = () => {
  const state = React.useContext(StickStateContext)

  if (state === undefined) {
    throw new Error("useStickState must be used within a StickProvider")
  }

  return state
}

export const useStickUpdate = () => {
  const update = React.useContext(StickUpdateContext)

  if (update === undefined) {
    throw new Error("useStickUpdate must be used within a StickProvider")
  }

  return update
}
