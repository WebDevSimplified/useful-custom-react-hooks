import { useEffect, useRef } from "react"

export default function useEventListener(
  eventType,
  callback,
  // Can optionally pass a specific element we want to attach the listener to , else it defaults to "window" 
  element = window
) {
  const callbackRef = useRef(callback)

  // Update callbackRef if it's not the same as the callback passed right now
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  // Run code when event is triggered
  useEffect(() => {
    if (element == null) return
    const handler = e => callbackRef.current(e)
    element.addEventListener(eventType, handler)

    return () => element.removeEventListener(eventType, handler)
  }, [eventType, element])
}
