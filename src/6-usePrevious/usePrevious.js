import { useRef } from "react"

export default function usePrevious(value) {

  // Simply storing the value detached from component re-renders and returning saved value when original value changes
  const currentRef = useRef(value)
  const previousRef = useRef()

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current
    currentRef.current = value
  }

  return previousRef.current
}
