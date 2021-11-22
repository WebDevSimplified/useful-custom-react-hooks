import useEventListener from "../13-useEventListener/useEventListener"
import useTimeout from "../2-useTimeout/useTimeout"
import useEffectOnce from "../20-useEffectOnce/useEffectOnce"

export default function useLongPress(ref, cb, { delay = 250 } = {}) {
  const { reset, clear } = useTimeout(cb, delay)

  // To not run timer in useTimeout by default during mounting of component
  useEffectOnce(clear)

  // Timer's expiry is set by setting the call to "reset" the timer after specified delay as soon as "mousedown (PC)/touchstart(mobile)" i.e. press event is triggered on reference element
  // If timer is not reset by a mouseup, then callback will run once and then timer will be started from the top
  useEventListener("mousedown", reset, ref.current)
  useEventListener("touchstart", reset, ref.current)

  // If press is released before timer expires, the timer will entirely be cleared
  useEventListener("mouseup", clear, ref.current)
  useEventListener("mouseleave", clear, ref.current)
  useEventListener("touchend", clear, ref.current)
}
