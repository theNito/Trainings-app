import React from "react"
import CustomImage from "../CustomImage"
import LadderImg from "../../public/images/Ladder.png"
import Ladder45Img from "../../public/images/Ladder 45 Degrees.png"
import Ladder90Img from "../../public/images/Ladder 90 Degrees.png"
import Ladder135Img from "../../public/images/Ladder 135 Degrees.png"
import { useLadderState } from "../../providers/componentProviders/DraggableProviders/LadderProvider"
import { useDrawingState } from "../../providers/componentProviders/DrawingProvider"

const Ladder = () => {
  const drawing = useDrawingState()
  const ladders = useLadderState()
  const defaultSize = "w-[150px] h-[150px]"

  const determineLadderType = (type) => {
    switch (type) {
      case "Normal":
        return <CustomImage size={defaultSize} src={LadderImg} alt="Ladder" />
      case "45":
        return <CustomImage size={defaultSize} src={Ladder45Img} alt="Ladder" />
      case "90":
        return <CustomImage size={defaultSize} src={Ladder90Img} alt="Ladder" />
      case "135":
        return (
          <CustomImage size={defaultSize} src={Ladder135Img} alt="Ladder" />
        )
    }
  }

  return (
    <>
      {ladders &&
        ladders.map((ladder) => {
          return (
            <div
              className={`draggable absolute dropable ${
                drawing ? null : `z-20`
              }`}
              key={ladder.id}
              id={ladder.id.toString()}
              data-type="Ladder"
            >
              {determineLadderType(ladder.variable)}
            </div>
          )
        })}
    </>
  )
}

export default Ladder
