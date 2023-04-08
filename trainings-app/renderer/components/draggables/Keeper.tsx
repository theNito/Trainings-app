import React from "react"
import CustomImage from "../CustomImage"
import KeeperImg from "../../public/images/Keeper.png"
import ActionKeeperImg from "../../public/images/Action Keeper.png"
import { useKeeperState } from "../../providers/componentProviders/DraggableProviders/KeeperProvider"
import { useDrawingState } from "../../providers/componentProviders/DrawingProvider"

const Keeper = () => {
  const drawing = useDrawingState()
  const keepers = useKeeperState()
  const defaultSize = "w-[100px] h-[100px]"

  const determineKeeperType = (type) => {
    switch (type) {
      case "Action":
        return (
          <CustomImage size={defaultSize} src={ActionKeeperImg} alt="Keeper" />
        )
      case "Normal":
        return <CustomImage size={defaultSize} src={KeeperImg} alt="Keeper" />
    }
  }

  return (
    <>
      {keepers &&
        keepers.map((keeper) => {
          return (
            <div
              className={`draggable absolute dropable ${
                drawing ? null : `z-20`
              }`}
              key={keeper.id}
              id={keeper.id.toString()}
              data-type="Keeper"
            >
              {determineKeeperType(keeper.variable)}
            </div>
          )
        })}
    </>
  )
}

export default Keeper
