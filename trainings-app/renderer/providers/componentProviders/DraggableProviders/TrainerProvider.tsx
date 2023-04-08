import React, { createContext, useState } from "react"
import DefaultProvider from "../../DefaultProvider"

const TrainerStateContext = createContext(null)
const TrainerUpdateContext = createContext(null)

export const TrainerProvider = ({ children }) => {
  const [trainers, setTrainers] = useState([])

  return DefaultProvider({
    children: children,
    StateContext: TrainerStateContext,
    UpdateContext: TrainerUpdateContext,
    elements: trainers,
    setElements: setTrainers,
  })
}

export const useTrainerState = () => {
  const state = React.useContext(TrainerStateContext)

  if (state === undefined) {
    throw new Error("useTrainerState must be used within a TrainerProvider")
  }

  return state
}

export const useTrainerUpdate = () => {
  const update = React.useContext(TrainerUpdateContext)

  if (update === undefined) {
    throw new Error("useTrainerUpdate must be used within a TrainerProvider")
  }

  return update
}
