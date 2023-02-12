import React from "react"

enum labelType {
  PRESENT = 'present',
  PERMISSION = 'permission',
  ABSENT = 'absent',
  LATE = 'late'
}

type LabelPropType = {
  group: (
    | labelType.PRESENT
    | labelType.PERMISSION
    | labelType.ABSENT
    | labelType.LATE
    | string
  ),
  noBorder?: boolean,
  [propsName: string]: (string | number | React.ReactNode)
}

export {
  LabelPropType,
  labelType,
}