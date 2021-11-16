import { useCallback, useRef, useState } from "react"

// Bunch of utility functions to perform on a state being managed as an array 
// 1. Accesing different elements of said array using a pointer
// 2. Modifying the array


export default function useStateWithHistory(
  defaultValue,
  { capacity = 10 } = {}
) {
  const [value, setValue] = useState(defaultValue)
  
  // Stores the array -> independently managed wrt component rerender
  const historyRef = useRef([value])
  
  // Stores the pointer to the array -> independently managed wrt component rerender
  const pointerRef = useRef(0)

  // useCallback is used to run the cached "function" itself when its dependency ("value") changes 
  const set = useCallback(
    v => {

      // resolve value from rerender based on whether its a val or a function returning a val 
      const resolvedValue = typeof v === "function" ? v(value) : v

      // If resolvedVal doesn't match the val at the current index in array, we remove all elements in array ahead of said index and append the resolvedValue instead
      if (historyRef.current[pointerRef.current] !== resolvedValue) {
        if (pointerRef.current < historyRef.current.length - 1) {
          historyRef.current.splice(pointerRef.current + 1)
        }
        historyRef.current.push(resolvedValue)

        // When length of array exceeds capacity, we use FIFO policy to maintain size of cached array
        while (historyRef.current.length > capacity) {
          historyRef.current.shift()
        }
        pointerRef.current = historyRef.current.length - 1
      }

      // Lastly, we set the "value" to the resolved value 
      setValue(resolvedValue)
    },
    [capacity, value]
  )


  // Updates the array pointer and sets the value to be array elem at current index 
  const back = useCallback(() => {
    if (pointerRef.current <= 0) return
    pointerRef.current--
    setValue(historyRef.current[pointerRef.current])
  }, [])

  // Updates the array pointer and sets the value to be array elem at current index 
  const forward = useCallback(() => {
    if (pointerRef.current >= historyRef.current.length - 1) return
    pointerRef.current++
    setValue(historyRef.current[pointerRef.current])
  }, [])

  // Updates the array pointer and sets the value to be array elem at current index 
  const go = useCallback(index => {
    if (index < 0 || index > historyRef.current.length - 1) return
    pointerRef.current = index
    setValue(historyRef.current[pointerRef.current])
  }, [])

  return [
    value,
    set,
    {
      history: historyRef.current,
      pointer: pointerRef.current,
      back,
      forward,
      go,
    },
  ]
}
