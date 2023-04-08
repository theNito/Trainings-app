import React from "react"
import { Popover } from "@headlessui/react"
import { RefreshIcon, XIcon } from "@heroicons/react/outline"

const RefreshPopup = () => {
  const onClose = (close) => {
    close()
  }

  return (
    <Popover>
      {({ open, close }) => (
        <>
          {open && (
            <div
              className={`absolute w-full h-[1373px] z-9 left-0 top-0 ${
                open && "bg-black opacity-70"
              }`}
              onClick={close}
            />
          )}
          <Popover.Button className="hover:bg-[#0C318D] py-2 w-[218px] bg-[#233B78] rounded-r-2xl">
            <RefreshIcon className="mx-auto mb-2" width={25} height={25} />
            Refresh
          </Popover.Button>
          <Popover.Panel className="absolute my-auto top-[200px] w-1/3 left-1/3">
            <div className="bg-[#233B78] w-ful my-auto mx-auto rounded-2xl">
              <div className="p-[20px] flex justify-between">
                <p className="my-auto">Refresh</p>
                <XIcon
                  onClick={() => onClose(close)}
                  className="hover:opacity-50 hover:cursor-pointer"
                  height={30}
                  width={30}
                />
              </div>
              <div className="bg-white rounded-b-2xl text-black p-[20px]">
                Weet je zeker dat je wilt refreshen? <br /> Je verliest hiermee
                onderstaande training.
                <div className="flex w-full flex-row-reverse">
                  <button
                    className="hover:opacity-90 mt-[20px] p-[10px] bg-[#233B78] text-white rounded-2xl"
                    onClick={() => window.location.reload()}
                  >
                    Refresh
                  </button>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  )
}

export default RefreshPopup
