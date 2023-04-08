import React, { useEffect, useState } from "react"
import Image from "next/image"
import halfField from "../public/images/Half Field.png"
import interact from "interactjs"
import { useTrainerUpdate } from "../providers/componentProviders/DraggableProviders/TrainerProvider"
import { useRebouncerUpdate } from "../providers/componentProviders/DraggableProviders/RebouncerProvider"
import { useFootballUpdate } from "../providers/componentProviders/DraggableProviders/FootballProvider"
import { usePoleUpdate } from "../providers/componentProviders/DraggableProviders/PoleProvider"
import { useDummyUpdate } from "../providers/componentProviders/DraggableProviders/DummyProvider"
import { useConeUpdate } from "../providers/componentProviders/DraggableProviders/ConeProvider"
import { useDiscConeUpdate } from "../providers/componentProviders/DraggableProviders/DiskConeProvider"
import { useHurdleUpdate } from "../providers/componentProviders/DraggableProviders/HurdleProvider"
import { useKeeperUpdate } from "../providers/componentProviders/DraggableProviders/KeeperProvider"
import { useGoalUpdate } from "../providers/componentProviders/DraggableProviders/GoalProvider"
import { useLadderUpdate } from "../providers/componentProviders/DraggableProviders/LadderProvider"
import { useStickUpdate } from "../providers/componentProviders/DraggableProviders/StickProvider"
import { useNumberUpdate } from "../providers/componentProviders/DraggableProviders/NumberProvider"
import { useTextUpdate } from "../providers/componentProviders/DraggableProviders/TextProvider"
import { useDrawingState } from "../providers/componentProviders/DrawingProvider"
import Pole from "./draggables/Pole"
import Dummy from "./draggables/Dummy"
import Cone from "./draggables/Cone"
import Text from "./draggables/Text"
import Number from "./draggables/Number"
import Ladder from "./draggables/Ladder"
import Keeper from "./draggables/Keeper"
import Goal from "./draggables/Goal"
import Stick from "./draggables/Stick"
import DiscCone from "./draggables/DiscCone"
import Hurdle from "./draggables/Hurdle"
import Rebouncer from "./draggables/Rebouncer"
import Trainer from "./draggables/Trainer"
import Football from "./draggables/Football"
import { Stage, Layer, Arrow } from "react-konva"
import {
  useArrowState,
  useArrowUpdate,
} from "../providers/componentProviders/ArrowProvider"

const Field = () => {
  const [newArrow, setNewArrow] = useState([])

  const drawing = useDrawingState()
  const arrows = useArrowState()
  const setArrows = useArrowUpdate()
  const setTrainers = useTrainerUpdate()
  const setRebouncers = useRebouncerUpdate()
  const setFootballs = useFootballUpdate()
  const setPoles = usePoleUpdate()
  const setDummies = useDummyUpdate()
  const setCones = useConeUpdate()
  const setDiscCones = useDiscConeUpdate()
  const setHurdles = useHurdleUpdate()
  const setKeepers = useKeeperUpdate()
  const setGoals = useGoalUpdate()
  const setLadders = useLadderUpdate()
  const setSticks = useStickUpdate()
  const setNumbers = useNumberUpdate()
  const setTexts = useTextUpdate()

  const determineType = (type: string, id: number) => {
    switch (type) {
      case "Trainer":
        setTrainers(false, id)
        break
      case "Football":
        setFootballs(false, id)
        break
      case "Rebouncer":
        setRebouncers(false, id)
        break
      case "Pole":
        setPoles(false, id)
        break
      case "Dummy":
        setDummies(false, id)
        break
      case "Cone":
        setCones(false, id)
        break
      case "DiscCone":
        setDiscCones(false, id)
        break
      case "Hurdle":
        setHurdles(false, id)
        break
      case "Keeper":
        setKeepers(false, id)
        break
      case "Goal":
        setGoals(false, id)
        break
      case "Ladder":
        setLadders(false, id)
        break
      case "Stick":
        setSticks(false, id)
        break
      case "Number":
        setNumbers(false, id)
        break
      case "Text":
        setTexts(false, id)
        break
      default:
        break
    }
  }

  useEffect(() => {
    interact(".dropzone").dropzone({
      accept: ".dropable",
      overlap: 0.5,

      ondropactivate: (event) => {
        event.target.classList.add("drop-active")
      },
      ondragenter: (event) => {
        let dropzoneElement = event.target

        dropzoneElement.classList.remove("bg-[#991B1E]")
        dropzoneElement.classList.add("bg-[#B9383B]")
      },
      ondragleave: (event) => {
        event.target.classList.remove("bg-[#B9383B]")
        event.target.classList.add("bg-[#991B1E]")
      },
      ondrop: (event) => {
        event.target.classList.remove("bg-[#B9383B]")
        event.target.classList.add("bg-[#991B1E]")
        determineType(
          event.relatedTarget.getAttribute("data-type"),
          event.relatedTarget.id
        )
      },
      ondropdeactivate: (event) => {
        event.target.classList.remove("bg-[#B9383B]")
        event.target.classList.add("bg-[#991B1E]")
      },
    })

    interact(".draggable").draggable({
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: "parent",
        }),
      ],

      listeners: {
        move: dragMoveListener,
      },
    })

    interact(".resizable")
      .resizable({
        edges: { left: false, right: true, bottom: true, top: false },
        listeners: {
          move(event) {
            let target = event.target
            let x = parseFloat(target.getAttribute("data-x")) || 0
            let y = parseFloat(target.getAttribute("data-y")) || 0

            target.style.width = event.rect.width + "px"
            target.style.height = event.rect.height + "px"

            x += event.deltaRect.left
            y += event.deltaRect.top

            target.style.transform = "translate(" + x + "px," + y + "px)"

            target.setAttribute("data-x", x)
            target.setAttribute("data-y", y)
          },
        },
        modifiers: [
          interact.modifiers.restrictEdges({
            outer: "parent",
          }),

          interact.modifiers.restrictSize({
            min: { width: 100, height: 50 },
          }),
        ],
      })
      .draggable({
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "parent",
          }),
        ],
        listeners: {
          move: dragMoveListener,
        },
      })
  })

  const dragMoveListener = (event) => {
    let target = event.target
    let x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx
    let y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy

    target.style.transform = "translate(" + x + "px, " + y + "px)"

    target.setAttribute("data-x", x)
    target.setAttribute("data-y", y)
  }

  const handleMouseDown = (e) => {
    if (newArrow.length === 0) {
      const { x, y } = e.target.getStage().getPointerPosition()
      setNewArrow([{ id: arrows.length + 1, startX: x, startY: y }])
    }
  }

  const handleMouseMove = (e) => {
    if (newArrow.length === 1) {
      const { x, y } = e.target.getStage().getPointerPosition()
      setNewArrow([
        {
          id: newArrow[0].id,
          startX: newArrow[0].startX,
          startY: newArrow[0].startY,
          X: x,
          Y: y,
        },
      ])
    }
  }

  const handleMouseUp = (e) => {
    if (newArrow.length === 1) {
      const { x, y } = e.target.getStage().getPointerPosition()
      setNewArrow([
        {
          id: newArrow[0].id,
          startX: newArrow[0].startX,
          startY: newArrow[0].startY,
          X: x,
          Y: y,
        },
      ])
      setArrows([...arrows, newArrow[0]])
      setNewArrow([])
    }
  }

  const points = () => {
    if (newArrow[0]) {
      return [
        newArrow[0].startX,
        newArrow[0].startY,
        newArrow[0].X,
        newArrow[0].Y,
      ]
    }
  }

  const deleteLastArrow = () => {
    const oldArrow = arrows.pop()
    let newArrows = []
    arrows.map((arrow) => {
      if (arrow !== oldArrow) {
        newArrows.push(arrow)
      }
    })
    setArrows(newArrows)
  }

  return (
    <div className="flex flex-col mx-auto w-[1500px] mt-[10px]">
      <Stage
        onMouseDown={drawing ? handleMouseDown : null}
        onMouseUp={drawing ? handleMouseUp : null}
        onMouseMove={drawing ? handleMouseMove : null}
        width={1500}
        height={695}
        className={`absolute mt-[105px] z-10`}
      >
        <Layer>
          {newArrow[0] && (
            <Arrow points={points()} fill="black" stroke="black" />
          )}
          {arrows.map((arrow, i) => {
            const points = [arrow.startX, arrow.startY, arrow.X, arrow.Y]
            return <Arrow key={i} points={points} fill="black" stroke="black" />
          })}
        </Layer>
      </Stage>
      <input
        className="print:bg-none print:text-black rounded-t-2xl bg-[#1C2335] text-[50px] p-[15px] focus:outline-none focus:ring focus:ring-blue-900"
        placeholder="Titel..."
      />
      <div className=" flex flex-col w-[1500px]" id="field">
        <Image
          draggable={false}
          src={halfField}
          className="opacity-50"
          alt="Half Field"
          height={695}
          width={1500}
        />
        <Trainer />
        <Football />
        <Rebouncer />
        <Pole />
        <Dummy />
        <Cone />
        <DiscCone />
        <Hurdle />
        <Keeper />
        <Goal />
        <Ladder />
        <Stick />
        <Number />
        <Text />
        <div className="bg-[#991B1E] py-[38px] text-center rounded-b-2xl mb-2 dropzone print:hidden">
          <div className="font-bold text-[24px]">
            Drop element om te verwijderen
          </div>
        </div>
      </div>
      <button
        className="w-3/12 mx-auto p-[10px] bg-[#991B1E] hover:bg-[#B9383B] rounded-2xl mb-5 print:hidden"
        onClick={deleteLastArrow}
      >
        <div className="font-bold text-[24px]">Verwijder laatste pijl</div>
      </button>
    </div>
  )
}

export default Field
