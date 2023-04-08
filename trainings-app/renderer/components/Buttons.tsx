import React from "react"
import {
  PrinterIcon,
  LockClosedIcon,
  LockOpenIcon,
} from "@heroicons/react/outline"
import RefreshPopup from "./RefreshPoup"
import { useDrawingUpdate } from "../providers/componentProviders/DrawingProvider"
import { useDrawingState } from "../providers/componentProviders/DrawingProvider"

let fs = require("fs")

const Buttons = () => {
  const drawing = useDrawingState()
  const setDrawing = useDrawingUpdate()

  const toggleDrawing = () => {
    setDrawing(!drawing)
  }

  return (
    <div className="flex mx-auto mt-[10px]">
      <div className="flex mx-auto">
        <button
          className="hover:bg-[#0C318D] py-2 w-[218px] bg-[#233B78] rounded-l-2xl"
          onClick={() => toggleDrawing()}
        >
          {drawing ? (
            <LockOpenIcon className="mx-auto mb-2" width={25} height={25} />
          ) : (
            <LockClosedIcon className="mx-auto mb-2" width={25} height={25} />
          )}
          {drawing ? <>Tekenen uitschakelen</> : <>Tekenen inschakelen</>}
        </button>
        <button
          className="hover:bg-[#0C318D] py-2 w-[218px] bg-[#233B78]"
          onClick={() => window.print()}
        >
          <PrinterIcon className="mx-auto mb-2" width={25} height={25} />
          Print uit
        </button>
        <RefreshPopup />
      </div>
    </div>
  )
}

export default Buttons
