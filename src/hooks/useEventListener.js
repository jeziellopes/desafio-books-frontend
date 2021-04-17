import { useRef, useEffect } from 'react';

/**
 * useEventListener hook
 */
const useEventListener = (eventName, handler, element = document) => {
  const savedHandler = useRef();

  // update handler if it change
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // check if can add a event listener
    const canAdd = element && element.addEventListener

    // if not return
    if (!canAdd) return;

    // create event listener that call savedHandler 
    const eventListener = (e) => savedHandler.current(e);

    // add event listener
    element.addEventListener(eventName, eventListener);

    // remove listener on clean up
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);

}

export default useEventListener;