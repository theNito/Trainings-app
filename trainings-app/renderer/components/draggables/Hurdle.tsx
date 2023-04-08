import React from "react"
import CustomImage from "../CustomImage"
import HighHurdleImg from "../../public/images/High Hurdle.png"
import SmallHurdleImg from "../../public/images/Low Hurdle.png"
import { useHurdleState } from "../../providers/componentProviders/DraggableProviders/HurdleProvider"
import { useDrawingState } from "../../providers/componentProviders/DrawingProvider"

const Hurdle = () => {
  const drawing = useDrawingState()
  const hurdles = useHurdleState()
  const defaultSize = "w-[70px] h-[70px]"

  const determineHurdleType = (type) => {
    switch (type) {
      case "Low":
        return (
          <CustomImage size={defaultSize} src={SmallHurdleImg} alt="Hurdle" />
        )
      case "High":
        return (
          <CustomImage size={defaultSize} src={HighHurdleImg} alt="Hurdle" />
        )
    }
  }

  return (
    <>
      {hurdles &&
        hurdles.map((hurdle) => {
          return (
            <div
              className={`draggable absolute dropable ${
                drawing ? null : `z-20`
              }`}
              key={hurdle.id}
              id={hurdle.id.toString()}
              data-type="Hurdle"
            >
              {determineHurdleType(hurdle.variable)}
            </div>
          )
        })}
    </>
  )
}

export default Hurdle
