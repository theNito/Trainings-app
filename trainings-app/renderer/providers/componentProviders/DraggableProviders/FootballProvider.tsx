import React, { createContext, useState } from "react"
import DefaultProvider from "../../DefaultProvider"

const FootballStateContext = createContext(null)
const FootballUpdateContext = createContext(null)

export const FootballProvider = ({ children }) => {
  const [footballs, setFootballs] = useState([])

  return DefaultProvider({
    children: children,
    StateContext: FootballStateContext,
    UpdateContext: FootballUpdateContext,
    elements: footballs,
    setElements: setFootballs,
  })
}

export const useFootballState = () => {
  const state = React.useContext(FootballStateContext)

  if (state === undefined) {
    throw new Error("useFootballState must be used within a FootballProvider")
  }

  return state
}

export const useFootballUpdate = () => {
  const update = React.useContext(FootballUpdateContext)

  if (update === undefined) {
    throw new Error("useFootballUpdate must be used within a FootballProvider")
  }

  return update
}
