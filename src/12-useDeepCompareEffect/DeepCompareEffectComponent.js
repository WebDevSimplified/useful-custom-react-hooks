import { useEffect, useState, useRef } from "react"
import useDeepCompareEffect from "./useDeepCompareEffect"

export default function DeepCompareEffectComponent() {
  const [age, setAge] = useState(0)
  const [otherCount, setOtherCount] = useState(0)
  const useEffectCountRef = useRef()
  const useDeepCompareEffectCountRef = useRef()

  const person = { age: age, name: "Kyle" }

  // useEffect() will run everytime any part of state -> i.e. "age" and "otherCount".

  // Whereas, useDeepCompareEffect() will run only as when "age" is updated and not when other parts of "state" of this component such as "otherCount" are updated. This is because we save the actual "person" obj as our ref (and dependency (for the useEffect inside of useDeepCompareEffect)) and not just its address. 
  
  // So even when component is rebuilt when some other part of its state changes, because of same value of "person" object as its previous value (no change in dependency) , the callback inside useDeepCompareEffect is never called

  // ALTERNATIVE METHOD - memoize "person" object using useMemo()
  // const person = useMemo({ age: age, name: "Kyle" },[age])

  useEffect(() => {
    useEffectCountRef.current.textContent =
      parseInt(useEffectCountRef.current.textContent) + 1
  }, [person])

  useDeepCompareEffect(() => {
    useDeepCompareEffectCountRef.current.textContent =
      parseInt(useDeepCompareEffectCountRef.current.textContent) + 1
  }, [person])

  return (
    <div>
      <div>
        useEffect: <span ref={useEffectCountRef}>0</span>
      </div>
      <div>
        useDeepCompareEffect: <span ref={useDeepCompareEffectCountRef}>0</span>
      </div>
      <div>Other Count: {otherCount}</div>
      <div>{JSON.stringify(person)}</div>
      <button onClick={() => setAge(currentAge => currentAge + 1)}>
        Increment Age
      </button>
      <button onClick={() => setOtherCount(count => count + 1)}>
        Increment Other Count
      </button>
    </div>
  )
}
