import { useState } from "react"
import { useEffect } from "react/cjs/react.development"


// ABOUT ResizeObserver API in JS - https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
// Info - The ResizeObserver interface reports changes to the dimensions of an Element's content or border box, or the bounding box of an SVGElement.

export default function useSize(ref) {
  const [size, setSize] = useState({})

  useEffect(() => {
    if (ref.current == null) return
    
    // Run a callback on array of entries (in this case, just 1 entry) passed to the ResizeObserverAPI, each time the element passed as an entry to the ResizeObserverAPI is "resized"
    const observer = new ResizeObserver(([entry]) => setSize
    // We simply set the new size of the element 
    (entry.contentRect))

    // Passing the "ref" to the element (whose size and resizing we wanna observe) to the ResizeObserverAPI
    observer.observe(ref.current)

    // Cleanup the ResizeObserverAPI on component unmount
    return () => observer.disconnect()
  }, [])

  return size
}
