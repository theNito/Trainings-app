import React from "react"
import CustomImage from "../CustomImage"
import rebouncerImg from "../../public/images/Rebouncer.png"
import { useRebouncerState } from "../../providers/componentProviders/DraggableProviders/RebouncerProvider"
import { useDrawingState } from "../../providers/componentProviders/DrawingProvider"

const Rebouncer = () => {
  const drawing = useDrawingState()
  const rebouncers = useRebouncerState()

  return (
    <>
      {rebouncers &&
        rebouncers.map((rebouncer) => {
          return (
            <div
              className={`draggable absolute dropable ${
                drawing ? null : `z-20`
              }`}
              key={rebouncer.id}
              id={rebouncer.id.toString()}
              data-type="Rebouncer"
            >
              <CustomImage
                size="w-[150px] h-[100px]"
                src={rebouncerImg}
                alt="Rebouncer"
              />
            </div>
          )
        })}
    </>
  )
}

export default Rebouncer
