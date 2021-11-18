import { useState, useEffect } from "react"
import useEventListener from "../13-useEventListener/useEventListener"

export default function useMediaQuery(mediaQuery) {
  const [isMatch, setIsMatch] = useState(false)
  const [mediaQueryList, setMediaQueryList] = useState(null)


  // About the window.matchMedia() method : https://www.w3schools.com/jsref/met_win_matchmedia.asp
  // eg :
  // if (window.matchMedia("(max-width: 700px)").matches) {
  /* The viewport is less than, or equal to, 700 pixels wide */
// } else {
//   /* The viewport is greater than 700 pixels wide */
// }


// Runs once at the start. Once our mediaQueryList is set to window.matchMedia, whenever our window is "resize"d, window.matchMedia is re-evaluated and the value of mediaQueryList is "change"d to the new emitted object
  useEffect(() => {
    const list = window.matchMedia(mediaQuery)
    setMediaQueryList(list)
    // If returned list object satisfies media query then it will have a non-null "matches" value 
    setIsMatch(list.matches)
  }, [mediaQuery])

  // Each time mediaQueryList elem is "change"d we check whether the new value of window.matchMedia has a non-null 'matches' value or not to determine whether our media query was satisfied or not
  useEventListener("change", e => setIsMatch(e.matches), mediaQueryList)

  return isMatch
}
