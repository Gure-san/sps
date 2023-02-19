// Type
import React from "react"
import { FormGroupReducerPropType } from "./formGroupType"

type ConfirmActionModalPropType = {
  dispatch: () => void,
  refActiver: React.RefObject<HTMLButtonElement>,
  children: React.ReactNode
}

export {
  ConfirmActionModalPropType
}