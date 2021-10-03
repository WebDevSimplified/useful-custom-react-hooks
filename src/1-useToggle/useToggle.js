import { useState } from "react"

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue)

  function toggleValue(value) {

    // If value sent is of type "boolean", then we set the value of this as the value sent.
    // Else, we simply use this as a argless function that just toggles previous value
    setValue(currentValue =>
      typeof value === "boolean" ? value : !currentValue
    )
  }

  return [value, toggleValue]
}
