import React from "react"

enum labelType {
  PRESENT = 'Hadir',
  PERMISSION = 'Izin',
  ABSENT = 'absent',
  LATE = 'late'
}

type LabelPropType = {
  group: (
    | labelType.PRESENT
    | labelType.PERMISSION
    | labelType.ABSENT
    | labelType.LATE
  ),
  [propsName: string]: (string | number | React.ReactNode)
}

export {
  LabelPropType,
  labelType
}