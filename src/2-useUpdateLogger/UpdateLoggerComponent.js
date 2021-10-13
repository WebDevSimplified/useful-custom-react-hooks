import useUpdateLogger from "./useUpdateLogger"
import useLocalStorage from "../1-useLocalStorage/useLocalStorage"

export default function UpdateLoggerComponent() {
	const [name, setName] = useLocalStorage("name", "")
	useUpdateLogger(name)
	return <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
}
