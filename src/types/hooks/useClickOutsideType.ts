import React from "react"

type UseClickOutsidePropType = {
  refElement: React.RefObject<HTMLElement>,
  closeTrigger: () => void,
  element?: HTMLElement
}

export {
  UseClickOutsidePropType
}