import {useEffect} from "react"
import useMediaQuery from "../18-useMediaQuery/useMediaQuery"
import {useLocalStorage} from "../10-useStorage/useStorage"

export default function useDarkMode() {
	const [darkMode, setDarkMode] = useLocalStorage("useDarkMode")
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
	const enabled = darkMode ?? prefersDarkMode

	useEffect(() => {
		document.body.classList.toggle("dark-mode", enabled)
	}, [enabled])

	return [enabled, setDarkMode]
}
