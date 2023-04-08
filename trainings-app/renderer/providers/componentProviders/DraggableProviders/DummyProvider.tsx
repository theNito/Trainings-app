import React, { createContext, useState } from "react"
import DefaultProvider from "../../DefaultProvider"

const DummyStateContext = createContext(null)
const DummyUpdateContext = createContext(null)

export const DummyProvider = ({ children }) => {
  const [dummies, setDummies] = useState([])

  return DefaultProvider({
    children: children,
    StateContext: DummyStateContext,
    UpdateContext: DummyUpdateContext,
    elements: dummies,
    setElements: setDummies,
  })
}

export const useDummyState = () => {
  const state = React.useContext(DummyStateContext)

  if (state === undefined) {
    throw new Error("useDummyState must be used within a DummyProvider")
  }

  return state
}

export const useDummyUpdate = () => {
  const update = React.useContext(DummyUpdateContext)

  if (update === undefined) {
    throw new Error("useDummyUpdate must be used within a DummyProvider")
  }

  return update
}
