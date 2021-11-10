import { useCallback, useEffect, useRef } from "react"

export default function useTimeout(callback, delay) {
  // Hook that helps us create other hooks

  // Callback ref helps ensure that only when function passed is actually different, does ref get updated
  const callbackRef = useRef(callback)

  // Empty ref that will store the setTimeout and clearTimeout functions 
  const timeoutRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  // useCallback hook is used for "set" and "clear" functions to only recreate the functions when certain dependency changes and not otherwise

  // We set the value of timeout ref to callback after the delay provided so when set function is called, the callback function (i.e. the code to update state) is run after the delay
  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  // The code that clears out the existing callback held by the timeout ref i.e. -> destroys the timeout
  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])


  // To run the callback function once after a given delay and then use the "clear" function to cleanup once component has been unmounted
  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  // To rerun the callback function after the set delay
  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear }
}
