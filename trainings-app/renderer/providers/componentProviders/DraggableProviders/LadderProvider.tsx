import React, { createContext, useState } from "react"
import DefaultProvider from "../../DefaultProvider"

const LadderStateContext = createContext(null)
const LadderUpdateContext = createContext(null)

export const LadderProvider = ({ children }) => {
  const [ladders, setLadders] = useState([])

  return DefaultProvider({
    children: children,
    StateContext: LadderStateContext,
    UpdateContext: LadderUpdateContext,
    elements: ladders,
    setElements: setLadders,
  })
}

export const useLadderState = () => {
  const state = React.useContext(LadderStateContext)

  if (state === undefined) {
    throw new Error("useLadderState must be used within a LadderProvider")
  }

  return state
}

export const useLadderUpdate = () => {
  const update = React.useContext(LadderUpdateContext)

  if (update === undefined) {
    throw new Error("useLadderUpdate must be used within a LadderProvider")
  }

  return update
}
