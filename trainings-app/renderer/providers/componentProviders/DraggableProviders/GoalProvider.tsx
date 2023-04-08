import React, { createContext, useState } from "react"
import DefaultProvider from "../../DefaultProvider"

const GoalStateContext = createContext(null)
const GoalUpdateContext = createContext(null)

export const GoalProvider = ({ children }) => {
  const [goals, setGoals] = useState([])

  return DefaultProvider({
    children: children,
    StateContext: GoalStateContext,
    UpdateContext: GoalUpdateContext,
    elements: goals,
    setElements: setGoals,
  })
}

export const useGoalState = () => {
  const state = React.useContext(GoalStateContext)

  if (state === undefined) {
    throw new Error("useGoalState must be used within a GoalProvider")
  }

  return state
}

export const useGoalUpdate = () => {
  const update = React.useContext(GoalUpdateContext)

  if (update === undefined) {
    throw new Error("useGoalUpdate must be used within a GoalProvider")
  }

  return update
}
