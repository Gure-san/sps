import React from "react"

type UseClickOutsidePropType = {
  refActiver?: React.RefObject<HTMLElement>,
  refElement: React.RefObject<HTMLElement>,
  closeTrigger: () => void,
  element?: HTMLElement
}

export {
  UseClickOutsidePropType
}