import { useState } from "react"
import useUpdateEffect from "./useUpdateEffect"

export default function UpdateEffectComponent() {
  const [count, setCount] = useState(10)
  useUpdateEffect(() => alert(count), [count])

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}
