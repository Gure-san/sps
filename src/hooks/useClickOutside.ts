// Type
import { UseClickOutsidePropType } from "../types/hooks/useClickOutsideType";

// Costum Hooks
import { useEventListener } from "./useEventListener";

export function useClickOutside({
  refElement,
  closeTrigger
}: UseClickOutsidePropType) {
  useEventListener({
    eventType: 'click',
    callback: e => {
      if(refElement.current === null || refElement.current.contains(e.target)) return;
      closeTrigger();
    },
    element: document
  })
}