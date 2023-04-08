import React from "react"
import { Arrow } from "react-konva"
import { useArrowState } from "../providers/componentProviders/ArrowProvider"

const Arrows = () => {
  const arrows = useArrowState()

  return (
    <>
      {arrows &&
        arrows.map((arrow) => {
          const points = [arrow.startX, arrow.startY, arrow.X, arrow.Y]
          return (
            <div
              className="draggable absolute dropable"
              key={arrow}
              id={arrow.toString()}
              data-type="Dummy"
            >
              <Arrow
                key={arrow.id}
                points={points}
                fill="black"
                stroke="black"
              />
            </div>
          )
        })}
    </>
  )
}

export default Arrows
