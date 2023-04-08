import React, { createContext, useState } from "react"
import DefaultProvider from "../../DefaultProvider"

const KeeperStateContext = createContext(null)
const KeeperUpdateContext = createContext(null)

export const KeeperProvider = ({ children }) => {
  const [keepers, setKeepers] = useState([])

  return DefaultProvider({
    children: children,
    StateContext: KeeperStateContext,
    UpdateContext: KeeperUpdateContext,
    elements: keepers,
    setElements: setKeepers,
  })
}

export const useKeeperState = () => {
  const state = React.useContext(KeeperStateContext)

  if (state === undefined) {
    throw new Error("useKeeperState must be used within a KeeperProvider")
  }

  return state
}

export const useKeeperUpdate = () => {
  const update = React.useContext(KeeperUpdateContext)

  if (update === undefined) {
    throw new Error("useKeeperUpdate must be used within a KeeperProvider")
  }

  return update
}
