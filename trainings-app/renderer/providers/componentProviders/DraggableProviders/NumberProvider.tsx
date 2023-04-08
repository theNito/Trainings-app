import React, { createContext, useState } from "react"
import DefaultProvider from "../../DefaultProvider"

const NumberStateContext = createContext(null)
const NumberUpdateContext = createContext(null)

export const NumberProvider = ({ children }) => {
  const [numbers, setNumbers] = useState([])

  return DefaultProvider({
    children: children,
    StateContext: NumberStateContext,
    UpdateContext: NumberUpdateContext,
    elements: numbers,
    setElements: setNumbers,
  })
}

export const useNumberState = () => {
  const state = React.useContext(NumberStateContext)

  if (state === undefined) {
    throw new Error("useNumberState must be used within a NumberProvider")
  }

  return state
}

export const useNumberUpdate = () => {
  const update = React.useContext(NumberUpdateContext)

  if (update === undefined) {
    throw new Error("useNumberUpdate must be used within a NumberProvider")
  }

  return update
}
