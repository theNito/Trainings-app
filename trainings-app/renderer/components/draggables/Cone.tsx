import React from "react"
import CustomImage from "../CustomImage"
import redConeImg from "../../public/images/Red Cone.png"
import blueConeImg from "../../public/images/Blue Cone.png"
import greenConeImg from "../../public/images/Green Cone.png"
import yellowConeImg from "../../public/images/Yellow Cone.png"
import { useConeState } from "../../providers/componentProviders/DraggableProviders/ConeProvider"
import { useDrawingState } from "../../providers/componentProviders/DrawingProvider"

const Cone = () => {
  const drawing = useDrawingState()
  const cones = useConeState()
  const defaultSize = "w-[50px] h-[50px]"

  const determineConeType = (type) => {
    switch (type) {
      case "Red":
        return <CustomImage size={defaultSize} src={redConeImg} alt="Cone" />
      case "Blue":
        return <CustomImage size={defaultSize} src={blueConeImg} alt="Cone" />
      case "Green":
        return <CustomImage size={defaultSize} src={greenConeImg} alt="Cone" />
      case "Yellow":
        return <CustomImage size={defaultSize} src={yellowConeImg} alt="Cone" />
    }
  }

  return (
    <>
      {cones &&
        cones.map((cone) => {
          return (
            <div
              className={`draggable absolute dropable ${
                drawing ? null : `z-20`
              }`}
              key={cone.id}
              id={cone.id.toString()}
              data-type="Cone"
            >
              {determineConeType(cone.variable)}
            </div>
          )
        })}
    </>
  )
}

export default Cone
