import { useRef } from "react"
import useHover from "./useHover"

export default function HoverComponent() {
  const elementRef = useRef()
  const hovered = useHover(elementRef)

  return (
    <div
      ref={elementRef}
      style={{
        backgroundColor: hovered ? "blue" : "red",
        width: "100px",
        height: "100px",
        position: "absolute",
        top: "calc(50% - 50px)",
        left: "calc(50% - 50px)",
      }}
    />
  )
}
