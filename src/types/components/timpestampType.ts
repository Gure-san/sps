enum timestampType {
  OPEN = 'open',
  CLOSE = 'close'
}

type TimestampePropType = {
  category: timestampType.OPEN | timestampType.CLOSE,
  time: string,
  className?: string
}

export {
  TimestampePropType,
  timestampType
}