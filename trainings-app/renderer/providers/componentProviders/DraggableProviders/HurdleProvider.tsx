import React, { createContext, useState } from "react"
import DefaultProvider from "../../DefaultProvider"

const HurdleStateContext = createContext(null)
const HurdleUpdateContext = createContext(null)

export const HurdleProvider = ({ children }) => {
  const [hurdles, setHurdles] = useState([])

  return DefaultProvider({
    children: children,
    StateContext: HurdleStateContext,
    UpdateContext: HurdleUpdateContext,
    elements: hurdles,
    setElements: setHurdles,
  })
}

export const useHurdleState = () => {
  const state = React.useContext(HurdleStateContext)

  if (state === undefined) {
    throw new Error("useHurdleState must be used within a HurdleProvider")
  }

  return state
}

export const useHurdleUpdate = () => {
  const update = React.useContext(HurdleUpdateContext)

  if (update === undefined) {
    throw new Error("useHurdleUpdate must be used within a HurdleProvider")
  }

  return update
}
