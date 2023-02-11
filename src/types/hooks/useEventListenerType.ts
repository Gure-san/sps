type UseEventListenerPropType = {
  eventType: (
    | 'click'
    | 'input'
  ),
  callback: (e?: any) => void,
  element?: HTMLElement | Window | Document
}

export {
  UseEventListenerPropType
}