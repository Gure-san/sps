// Costum Hooks
import { useEventListener } from "./useEventListener";

export function useScroll({
  refElement,
  callback,
}) {
  useEventListener({
    eventType: 'scroll',
    callback: () => {
      callback()
    },
    element: refElement.current ? refElement.current : document
  })
}