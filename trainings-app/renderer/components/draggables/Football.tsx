import React from "react"
import CustomImage from "../CustomImage"
import footballImg from "../../public/images/Football.png"
import { useFootballState } from "../../providers/componentProviders/DraggableProviders/FootballProvider"
import { useDrawingState } from "../../providers/componentProviders/DrawingProvider"

const Football = () => {
  const drawing = useDrawingState()
  const footballs = useFootballState()

  return (
    <>
      {footballs &&
        footballs.map((football) => {
          return (
            <div
              className={`draggable absolute dropable ${
                drawing ? null : `z-20`
              }`}
              key={football.id}
              id={football.id}
              data-type="Football"
            >
              <CustomImage
                size="w-[50px] h-[100px]"
                src={footballImg}
                alt="Footfootball"
              />
            </div>
          )
        })}
    </>
  )
}

export default Football
