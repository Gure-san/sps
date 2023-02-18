type UseEventListenerPropType = {
  eventType: (
    | 'click'
    | 'input'
    | 'scroll'
  ),
  callback: (e?: any) => void,
  element?: HTMLElement | Window | Document
}

export {
  UseEventListenerPropType
}