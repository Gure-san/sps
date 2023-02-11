enum notificationType {
  VALID = 'valid',
  INVALID = 'invalid'
}

type NotificationPropType = {
  message?: string,
  type: notificationType.VALID | notificationType.INVALID
}

export {
  notificationType,
  NotificationPropType
}