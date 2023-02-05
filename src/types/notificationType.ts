enum notification {
  VALID = 'valid',
  INVALID = 'invalid'
}

type notificationType = {
  message?: string,
  type: notification.VALID | notification.INVALID
}

export {
  notification,
  notificationType
}