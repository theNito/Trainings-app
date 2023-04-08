import React from "react"
import CustomImage from "../CustomImage"
import trainerImg from "../../public/images/Trainer.png"
import { useTrainerState } from "../../providers/componentProviders/DraggableProviders/TrainerProvider"
import { useDrawingState } from "../../providers/componentProviders/DrawingProvider"

const Trainer = () => {
  const drawing = useDrawingState()
  const trainers = useTrainerState()

  return (
    <>
      {trainers &&
        trainers.map((trainer) => {
          return (
            <div
              className={`draggable absolute dropable ${
                drawing ? null : `z-20`
              }`}
              key={trainer.id}
              id={trainer.id.toString()}
              data-type="Trainer"
            >
              <CustomImage
                size="w-[100px] h-[100px]"
                src={trainerImg}
                alt="Trainer"
              />
            </div>
          )
        })}
    </>
  )
}

export default Trainer
