import React from "react"
import CustomImage from "../CustomImage"
import dummyImg from "../../public/images/Dummy.png"
import { useDummyState } from "../../providers/componentProviders/DraggableProviders/DummyProvider"
import { useDrawingState } from "../../providers/componentProviders/DrawingProvider"

const Dummy = () => {
  const drawing = useDrawingState()
  const dummies = useDummyState()

  return (
    <>
      {dummies &&
        dummies.map((dummy) => {
          return (
            <div
              className={`draggable absolute dropable ${
                drawing ? null : `z-20`
              }`}
              key={dummy.id}
              id={dummy.id.toString()}
              data-type="Dummy"
            >
              <CustomImage
                size="w-[100px] h-[100px]"
                src={dummyImg}
                alt="Dummy"
              />
            </div>
          )
        })}
    </>
  )
}

export default Dummy
