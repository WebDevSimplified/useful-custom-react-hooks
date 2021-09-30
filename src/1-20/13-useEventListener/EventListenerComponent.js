import { useState } from "react"
import useEventListener from "./useEventListener"

export default function EventListenerComponent() {
  const [key, setKey] = useState("")
  useEventListener("keydown", e => {
    setKey(e.key)
  })

  return <div>Last Key: {key}</div>
}
