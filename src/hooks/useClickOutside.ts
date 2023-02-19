// Type
import { UseClickOutsidePropType } from "../types/hooks/useClickOutsideType";

// Costum Hooks
import { useEventListener } from "./useEventListener";

export function useClickOutside({
  refActiver,
  refElement,
  closeTrigger,
  element
}: UseClickOutsidePropType) {
  useEventListener({
    eventType: 'click',
    callback: e => {
      if (
        refElement.current === null || 
        refElement.current.contains(e?.target) ||
        refActiver?.current && e.target === refActiver.current
      ) return;
      closeTrigger();
    },
  })
}