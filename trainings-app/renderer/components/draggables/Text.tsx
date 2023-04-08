import React from "react"
import { useTextState } from "../../providers/componentProviders/DraggableProviders/TextProvider"
import { useDrawingState } from "../../providers/componentProviders/DrawingProvider"

const Text = () => {
  const drawing = useDrawingState()
  const texts = useTextState()

  return (
    <>
      {texts &&
        texts.map((text) => {
          return (
            <textarea
              key={text.id}
              id={text.id}
              data-type="Text"
              className={`print:text-black text-[28px] print:bg-opacity-0 absolute bg-[#1C2335] rounded focus:outline-none focus:ring focus:ring-blue-900 overflow-hidden resizable dropable ${
                drawing ? null : `z-20`
              }`}
            />
          )
        })}
    </>
  )
}

export default Text
