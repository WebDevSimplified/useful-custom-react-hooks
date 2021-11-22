import useEventListener from "../13-useEventListener/useEventListener"

export default function useClickOutside(ref, cb) {

  // Simple hook consuming our useEventListener hook and runs a passed callback if we click outside our reference element
  useEventListener(
    "click",
    e => {
      if (ref.current == null || ref.current.contains(e.target)) return
      cb(e)
    },
    document
  )
}
