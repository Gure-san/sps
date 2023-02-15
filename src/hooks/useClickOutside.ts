// Type
import { UseClickOutsidePropType } from "../types/hooks/useClickOutsideType";

// Costum Hooks
import { useEventListener } from "./useEventListener";

export function useClickOutside({
  refElement,
  closeTrigger,
  element
}: UseClickOutsidePropType) {
  useEventListener({
    eventType: 'click',
    callback: e => {
      console.log(e.target);
      console.log(refElement.current)
      if (refElement.current === null || refElement.current.contains(e.target)) return;
      closeTrigger();
    },
    element: element ? element : document
  })
}