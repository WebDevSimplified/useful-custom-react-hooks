import { useEffect } from "react"
import useMediaQuery from "../16-useMediaQuery/useMediaQuery"
import { useLocalStorage } from "../8-useStorage/useStorage"

export default function useDarkMode() {

  // Set initial value to value set in local storage and store the dark mode configuration in there as well
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode")

  // Just using this useMediaQuery hook (even though we aren't passing a media query to it) to configure mode to dark mode if user has by default turned on dark mode for their browser 
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  
  // Setting a value from local storage and if not, going by user's browser preference for theme
  const enabled = darkMode ?? prefersDarkMode

  // Run everytime dark mode is toggled
  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled)
  }, [enabled])

  return [enabled, setDarkMode]
}
