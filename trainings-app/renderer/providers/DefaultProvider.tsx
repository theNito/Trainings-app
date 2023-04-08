import React from "react"

interface DefaultProviderProps {
  children: any
  StateContext: React.Context<any>
  UpdateContext: React.Context<any>
  elements: Array<any>
  setElements: Function
}

const DefaultProvider = (props: DefaultProviderProps) => {
  const { children, StateContext, UpdateContext, elements, setElements } = props
  const updateElements = (
    add: boolean,
    elementId: number,
    position: any,
    update?: boolean,
    variable?: string
  ) => {
    let newElements = []
    if (add === true) {
      setElements([
        ...elements,
        elements.length == 0
          ? { id: 1, variable: variable, position: position }
          : {
              id: elements[elements.length - 1].id + 1,
              variable: variable,
              position: position,
            },
      ])
    } else if (update === true) {
      let objIndex = elements.findIndex((obj) => obj.id == elementId)
      elements[objIndex].position = position
      setElements(elements)
    } else {
      elements.filter((number) => {
        if (number.id != elementId) {
          newElements.push(number)
        }
      })
      setElements(newElements)
    }
  }

  return (
    <StateContext.Provider value={elements}>
      <UpdateContext.Provider value={updateElements}>
        {children}
      </UpdateContext.Provider>
    </StateContext.Provider>
  )
}

export default DefaultProvider
