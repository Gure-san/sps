// React
import React from "react"

enum notificationType {
  VALID = 'valid',
  INVALID = 'invalid'
}

type NotificationPropType = {
  dispatch?: () => void,
  noClose?: boolean,
  className?: string,
  children: React.ReactNode,
  type: notificationType.VALID | notificationType.INVALID
}

export {
  notificationType,
  NotificationPropType
}