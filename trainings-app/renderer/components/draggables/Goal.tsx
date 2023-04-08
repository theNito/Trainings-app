import React from "react"
import CustomImage from "../CustomImage"
import BigGoalImg from "../../public/images/Big Goal.png"
import SmallGoalImg from "../../public/images/Small Goal.png"
import { useGoalState } from "../../providers/componentProviders/DraggableProviders/GoalProvider"
import { useDrawingState } from "../../providers/componentProviders/DrawingProvider"

const Goal = () => {
  const drawing = useDrawingState()
  const goals = useGoalState()

  const determineGoalType = (type) => {
    switch (type) {
      case "Small":
        return (
          <CustomImage
            size="w-[150px] h-[150px]"
            src={SmallGoalImg}
            alt="Goal"
          />
        )
      case "Big":
        return (
          <CustomImage size="w-[250px] h-[150px]" src={BigGoalImg} alt="Goal" />
        )
    }
  }

  return (
    <>
      {goals &&
        goals.map((goal) => {
          return (
            <div
              className={`draggable absolute dropable ${
                drawing ? null : `z-20`
              }`}
              key={goal.id}
              id={goal.id.toString()}
              data-type="Goal"
            >
              {determineGoalType(goal.variable)}
            </div>
          )
        })}
    </>
  )
}

export default Goal
