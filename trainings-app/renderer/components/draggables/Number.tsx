import React from "react"
import { useNumberState } from "../../providers/componentProviders/DraggableProviders/NumberProvider"
import { useDrawingState } from "../../providers/componentProviders/DrawingProvider"

const Number = () => {
  const drawing = useDrawingState()
  const numbers = useNumberState()

  return (
    <>
      {numbers &&
        numbers.map((number, i) => {
          return (
            <div
              className={`print:text-black draggable absolute dropable ${
                drawing ? null : `z-20`
              }`}
              key={number.id}
              id={number.id.toString()}
              data-type="Number"
            >
              <p className="text-[50px]">{i + 1}</p>
            </div>
          )
        })}
    </>
  )
}

export default Number
