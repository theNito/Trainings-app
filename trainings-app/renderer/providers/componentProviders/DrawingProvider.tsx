import React, { createContext, useState } from "react"

const DrawingStateContext = createContext(null)
const DrawingUpdateContext = createContext(null)

export const DrawingProvider = ({ children }) => {
  const [drawing, setDrawing] = useState(false)

  const updateElement = () => {
    setDrawing(!drawing)
  }

  return (
    <DrawingStateContext.Provider value={drawing}>
      <DrawingUpdateContext.Provider value={updateElement}>
        {children}
      </DrawingUpdateContext.Provider>
    </DrawingStateContext.Provider>
  )
}

export const useDrawingState = () => {
  const state = React.useContext(DrawingStateContext)

  if (state === undefined) {
    throw new Error("useDrawingState must be used within a DrawingProvider")
  }

  return state
}

export const useDrawingUpdate = () => {
  const update = React.useContext(DrawingUpdateContext)

  if (update === undefined) {
    throw new Error("useDrawingUpdate must be used within a DrawingProvider")
  }

  return update
}
