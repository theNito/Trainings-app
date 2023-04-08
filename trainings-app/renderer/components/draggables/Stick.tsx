import React from "react"
import CustomImage from "../CustomImage"
import StickImg from "../../public/images/Stick.png"
import Stick45Img from "../../public/images/Stick 45 Degrees.png"
import Stick90Img from "../../public/images/Stick 90 Degrees.png"
import Stick135Img from "../../public/images/Stick 135 Degrees.png"
import { useStickState } from "../../providers/componentProviders/DraggableProviders/StickProvider"
import { useDrawingState } from "../../providers/componentProviders/DrawingProvider"

const Stick = () => {
  const drawing = useDrawingState()
  const sticks = useStickState()
  const defaultSize = "w-[150px] h-[150px]"

  const determineStickType = (type) => {
    switch (type) {
      case "Normal":
        return <CustomImage size={defaultSize} src={StickImg} alt="Stick" />
      case "45":
        return <CustomImage size={defaultSize} src={Stick45Img} alt="Stick" />
      case "90":
        return <CustomImage size={defaultSize} src={Stick90Img} alt="Stick" />
      case "135":
        return <CustomImage size={defaultSize} src={Stick135Img} alt="Stick" />
    }
  }

  return (
    <>
      {sticks &&
        sticks.map((stick) => {
          return (
            <div
              className={`draggable absolute dropable ${
                drawing ? null : `z-20`
              }`}
              key={stick.id}
              id={stick.id.toString()}
              data-type="Stick"
            >
              {determineStickType(stick.variable)}
            </div>
          )
        })}
    </>
  )
}

export default Stick
