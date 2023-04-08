import React from "react"
import Dropdown from "./Dropdown"

import redDiskCone from "../public/images/Red Disc Cone.png"
import blueDiskCone from "../public/images/Blue Disc Cone.png"
import yellowDiskCone from "../public/images/Yellow Disc Cone.png"
import greenDiskCone from "../public/images/Green Disc Cone.png"
import highHurdle from "../public/images/High Hurdle.png"
import lowHurdle from "../public/images/Low Hurdle.png"
import keeper from "../public/images/Keeper.png"
import actionKeeper from "../public/images/Action Keeper.png"
import trainer from "../public/images/Trainer.png"
import football from "../public/images/Football.png"
import bigGoal from "../public/images/Big Goal.png"
import smallGoal from "../public/images/Small Goal.png"
import pole from "../public/images/Pole.png"
import ladder from "../public/images/Ladder.png"
import ladder45 from "../public/images/Ladder 45 Degrees.png"
import ladder90 from "../public/images/Ladder 90 Degrees.png"
import ladder135 from "../public/images/Ladder 135 Degrees.png"
import rebouncer from "../public/images/Rebouncer.png"
import dummy from "../public/images/Dummy.png"
import stick from "../public/images/Stick.png"
import stick45 from "../public/images/Stick 45 Degrees.png"
import stick90 from "../public/images/Stick 90 Degrees.png"
import stick135 from "../public/images/Stick 135 Degrees.png"
import numbers from "../public/images/Numbers.png"
import text from "../public/images/Text.png"
import redCone from "../public/images/Red Cone.png"
import blueCone from "../public/images/Blue Cone.png"
import yellowCone from "../public/images/Yellow Cone.png"
import greenCone from "../public/images/Green Cone.png"
import CustomImage from "./CustomImage"
import { useTrainerUpdate } from "../providers/componentProviders/DraggableProviders/TrainerProvider"
import { useFootballUpdate } from "../providers/componentProviders/DraggableProviders/FootballProvider"
import { useDummyUpdate } from "../providers/componentProviders/DraggableProviders/DummyProvider"
import { usePoleUpdate } from "../providers/componentProviders/DraggableProviders/PoleProvider"
import { useRebouncerUpdate } from "../providers/componentProviders/DraggableProviders/RebouncerProvider"
import { useConeUpdate } from "../providers/componentProviders/DraggableProviders/ConeProvider"
import { useDiscConeUpdate } from "../providers/componentProviders/DraggableProviders/DiskConeProvider"
import { useHurdleUpdate } from "../providers/componentProviders/DraggableProviders/HurdleProvider"
import { useKeeperUpdate } from "../providers/componentProviders/DraggableProviders/KeeperProvider"
import { useGoalUpdate } from "../providers/componentProviders/DraggableProviders/GoalProvider"
import { useLadderUpdate } from "../providers/componentProviders/DraggableProviders/LadderProvider"
import { useStickUpdate } from "../providers/componentProviders/DraggableProviders/StickProvider"
import { useNumberUpdate } from "../providers/componentProviders/DraggableProviders/NumberProvider"
import { useTextUpdate } from "../providers/componentProviders/DraggableProviders/TextProvider"
import Buttons from "./Buttons"
import { useDrawingState } from "../providers/componentProviders/DrawingProvider"

const Navbar = () => {
  const drawing = useDrawingState()
  const setTrainers = useTrainerUpdate()
  const setFootballs = useFootballUpdate()
  const setDummies = useDummyUpdate()
  const setPoles = usePoleUpdate()
  const setRebouncers = useRebouncerUpdate()
  const setCones = useConeUpdate()
  const setDiscCones = useDiscConeUpdate()
  const setHurdles = useHurdleUpdate()
  const setKeepers = useKeeperUpdate()
  const setGoals = useGoalUpdate()
  const setLadders = useLadderUpdate()
  const setSticks = useStickUpdate()
  const setNumbers = useNumberUpdate()
  const setTexts = useTextUpdate()

  const defaultSize = "w-[100px] h-[100px]"
  const menuItemClassName = `${
    drawing ? "cursor-default" : "hover:bg-[#1C2335]"
  } py-[10px]`

  return (
    <div className="w-full print:hidden">
      <div className="flex justify-evenly px-[100px] mt-[10px]">
        <Dropdown
          setElements={setCones}
          items={[
            {
              src: redCone,
              alt: "Red Cone",
              size: defaultSize,
              variable: "Red",
            },
            {
              src: blueCone,
              alt: "Blue Cone",
              size: defaultSize,
              variable: "Blue",
            },
            {
              src: yellowCone,
              alt: "Yellow Cone",
              size: defaultSize,
              variable: "Yellow",
            },
            {
              src: greenCone,
              alt: "Green Cone",
              size: defaultSize,
              variable: "Green",
            },
          ]}
          spaceX={true}
        />
        <Dropdown
          setElements={setDiscCones}
          items={[
            {
              src: redDiskCone,
              alt: "Red Disk Cone",
              size: defaultSize,
              variable: "Red",
            },
            {
              src: blueDiskCone,
              alt: "Blue Disk Cone",
              size: defaultSize,
              variable: "Blue",
            },
            {
              src: yellowDiskCone,
              alt: "Yellow Disk Cone",
              size: defaultSize,
              variable: "Yellow",
            },
            {
              src: greenDiskCone,
              alt: "Green Disk Cone",
              size: defaultSize,
              variable: "Green",
            },
          ]}
          spaceX={true}
        />
        <Dropdown
          setElements={setHurdles}
          items={[
            {
              src: highHurdle,
              alt: "High Hurdle",
              size: defaultSize,
              variable: "High",
            },
            {
              src: lowHurdle,
              alt: "Low Hurdle",
              size: defaultSize,
              variable: "Low",
            },
          ]}
          spaceX={true}
        />
        <Dropdown
          setElements={setKeepers}
          items={[
            {
              src: keeper,
              alt: "Keeper",
              size: defaultSize,
              variable: "Normal",
            },
            {
              src: actionKeeper,
              alt: "Action Keeper",
              size: defaultSize,
              variable: "Action",
            },
          ]}
        />
        <Dropdown
          setElements={setGoals}
          items={[
            {
              src: bigGoal,
              alt: "Big Goal",
              size: "w-[250px] h-[100px]",
              variable: "Big",
            },
            {
              src: smallGoal,
              alt: "Small Goal",
              size: "w-[250px] h-[100px]",
              variable: "Small",
            },
          ]}
        />

        <Dropdown
          setElements={setLadders}
          items={[
            {
              src: ladder,
              alt: "Ladder",
              size: defaultSize,
              variable: "Normal",
            },
            {
              src: ladder90,
              alt: "Ladder 90 Degrees",
              size: "w-[100px] h-[100px]",
              variable: "90",
            },
            {
              src: ladder45,
              alt: "Ladder 45 Degrees",
              size: "w-[100px] h-[90px]",
              variable: "45",
            },
            {
              src: ladder135,
              alt: "Ladder 135 Degrees",
              size: "w-[100px] h-[90px]",
              variable: "135",
            },
          ]}
        />
        <Dropdown
          setElements={setSticks}
          items={[
            { src: stick, alt: "Stick", size: defaultSize, variable: "Normal" },
            {
              src: stick90,
              alt: "Stick 90 Degrees",
              size: "w-[100px] h-[50px]",
              variable: "90",
            },
            {
              src: stick45,
              alt: "Stick 45 Degrees",
              size: "w-[100px] h-[70px]",
              variable: "45",
            },
            {
              src: stick135,
              alt: "Stick 135 Degrees",
              size: "w-[100px] h-[70px]",
              variable: "135",
            },
          ]}
        />
        <button
          onClick={() => {
            drawing ? null : setTrainers(true, null, { x: 0, y: 0 })
          }}
        >
          <CustomImage
            size={defaultSize}
            src={trainer}
            alt="Trainer"
            className={menuItemClassName}
          />
        </button>
        <button
          onClick={() => {
            drawing ? null : setFootballs(true, null, { x: 0, y: 0 })
          }}
        >
          <CustomImage
            size="w-[50px] h-[100px]"
            src={football}
            alt="Football"
            className={menuItemClassName}
          />
        </button>
        <button
          onClick={() => {
            drawing ? null : setPoles(true, null, { x: 0, y: 0 })
          }}
        >
          <CustomImage
            size={defaultSize}
            src={pole}
            alt="Pole"
            className={menuItemClassName}
          />
        </button>
        <button
          onClick={() => {
            drawing ? null : setRebouncers(true, null, { x: 0, y: 0 })
          }}
        >
          <CustomImage
            size="w-[200px] h-[100px]"
            src={rebouncer}
            alt="Rebouncer"
            className={menuItemClassName}
          />
        </button>
        <button
          onClick={() => {
            drawing ? null : setDummies(true, null, { x: 0, y: 0 })
          }}
        >
          <CustomImage
            size={defaultSize}
            src={dummy}
            alt="Dummy"
            className={menuItemClassName}
          />
        </button>
      </div>
      <div className="flex justify-center gap-20 mt-[10px]">
        <button
          onClick={() => {
            drawing ? null : setNumbers(true, null, { x: 0, y: 0 })
          }}
        >
          <CustomImage
            size={defaultSize}
            src={numbers}
            alt="Numbers"
            className={`${menuItemClassName} px-[20px]`}
          />
        </button>
        <button
          onClick={() => {
            drawing ? null : setTexts(true, null, { x: 0, y: 0 })
          }}
        >
          <CustomImage
            size={defaultSize}
            src={text}
            alt="Text"
            className={`${menuItemClassName} px-[20px]`}
          />
        </button>
      </div>
      <Buttons />
    </div>
  )
}

export default Navbar
