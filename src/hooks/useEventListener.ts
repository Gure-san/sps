import { useEffect, useRef, useState } from 'react';
import { UseEventListenerPropType } from '../types/hooks/useEventListenerType';

export function useEventListener({
  eventType,
  callback,
  element = window,
}: UseEventListenerPropType) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element !== null) {
      const handler = (e: any) => callbackRef.current(e);
      element.addEventListener(eventType, handler);

      return () => element.removeEventListener(eventType, handler);
    }
  }, [eventType, element]);
}
