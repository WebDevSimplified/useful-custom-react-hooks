import { useRef } from "react"
import useLongPress from "./useLongPress"

export default function LongPressComponent() {
  const elementRef = useRef()
  useLongPress(elementRef, () => alert("Long Press"))

  return (
    <div
      ref={elementRef}
      style={{
        backgroundColor: "red",
        width: "100px",
        height: "100px",
        position: "absolute",
        top: "calc(50% - 50px)",
        left: "calc(50% - 50px)",
      }}
    />
  )
}
