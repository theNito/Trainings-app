import React, { createContext, useState } from "react"
import DefaultProvider from "../../DefaultProvider"

const TextStateContext = createContext(null)
const TextUpdateContext = createContext(null)

export const TextProvider = ({ children }) => {
  const [texts, setTexts] = useState([])

  return DefaultProvider({
    children: children,
    StateContext: TextStateContext,
    UpdateContext: TextUpdateContext,
    elements: texts,
    setElements: setTexts,
  })
}

export const useTextState = () => {
  const state = React.useContext(TextStateContext)

  if (state === undefined) {
    throw new Error("useTextState must be used within a TextProvider")
  }

  return state
}

export const useTextUpdate = () => {
  const update = React.useContext(TextUpdateContext)

  if (update === undefined) {
    throw new Error("useTextUpdate must be used within a TextProvider")
  }

  return update
}
