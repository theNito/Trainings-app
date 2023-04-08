import React from "react"
import CustomImage from "../CustomImage"
import poleImg from "../../public/images/Pole.png"
import { usePoleState } from "../../providers/componentProviders/DraggableProviders/PoleProvider"
import { useDrawingState } from "../../providers/componentProviders/DrawingProvider"

const Pole = () => {
  const drawing = useDrawingState()
  const poles = usePoleState()

  return (
    <>
      {poles &&
        poles.map((pole) => {
          return (
            <div
              className={`draggable absolute dropable ${
                drawing ? null : `z-20`
              }`}
              key={pole.id}
              id={pole.id.toString()}
              data-type="Pole"
            >
              <CustomImage
                size="w-[100px] h-[100px]"
                src={poleImg}
                alt="Pole"
                data-type="Pole"
              />
            </div>
          )
        })}
    </>
  )
}

export default Pole
