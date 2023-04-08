import React from "react"
import CustomImage from "../CustomImage"
import redDiscConeImg from "../../public/images/Red Disc Cone.png"
import blueDiscConeImg from "../../public/images/Blue Disc Cone.png"
import greenDiscConeImg from "../../public/images/Green Disc Cone.png"
import yellowDiscConeImg from "../../public/images/Yellow Disc Cone.png"
import { useDiscConeState } from "../../providers/componentProviders/DraggableProviders/DiskConeProvider"
import { useDrawingState } from "../../providers/componentProviders/DrawingProvider"

const DiscCone = () => {
  const drawing = useDrawingState()
  const discCones = useDiscConeState()
  const defaultSize = "w-[60px] h-[40px]"

  const determineDiscConeType = (type) => {
    switch (type) {
      case "Red":
        return (
          <CustomImage size={defaultSize} src={redDiscConeImg} alt="DiscCone" />
        )
      case "Blue":
        return (
          <CustomImage
            size={defaultSize}
            src={blueDiscConeImg}
            alt="DiscCone"
          />
        )
      case "Green":
        return (
          <CustomImage
            size={defaultSize}
            src={greenDiscConeImg}
            alt="DiscCone"
          />
        )
      case "Yellow":
        return (
          <CustomImage
            size={defaultSize}
            src={yellowDiscConeImg}
            alt="DiscCone"
          />
        )
    }
  }

  return (
    <>
      {discCones &&
        discCones.map((discCone) => {
          return (
            <div
              className={`draggable absolute dropable ${
                drawing ? null : `z-20`
              }`}
              key={discCone.id}
              id={discCone.id.toString()}
              data-type="DiscCone"
            >
              {determineDiscConeType(discCone.variable)}
            </div>
          )
        })}
    </>
  )
}

export default DiscCone
