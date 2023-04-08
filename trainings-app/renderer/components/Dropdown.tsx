import React from "react"
import { useDrawingState } from "../providers/componentProviders/DrawingProvider"
import CustomImage from "./CustomImage"
interface DropdownProps {
  items: any
  spaceX?: boolean
  setElements?: any
}

const Dropdown = (props: DropdownProps) => {
  const drawing = useDrawingState()
  const { items, spaceX = false, setElements } = props

  return (
    <div className={`relative ${drawing ? null : "dropdown"} inline-block`}>
      <div className={`image rounded-t-2xl ${spaceX && "px-[10px]"}`}>
        <CustomImage
          size={items[0].size}
          src={items[0].src}
          alt={items[0].alt}
          className="py-[10px]"
        />
      </div>
      <div
        className={`bg-[#1C2335] shadow-2xl rounded-b-2xl rounded-tr-2xl hidden ${
          drawing ? null : "dropdown-content"
        } absolute z-30`}
      >
        {items.map((item, i) => {
          return (
            <div key={i}>
              <button
                className="hover:opacity-50 py-[30px] p-6"
                onClick={() =>
                  setElements(true, null, { x: 0, y: 0 }, false, item.variable)
                }
              >
                <CustomImage size={item.size} src={item.src} alt={item.alt} />
              </button>
              {i != items.length - 1 && (
                <div className="text-sky-500">
                  <hr className="mx-2 border-solid border-[1px] opacity-70 border-blue-900" />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dropdown
