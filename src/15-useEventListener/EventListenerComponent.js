import {useState, useRef} from "react"
import useEventListener from "./useEventListener"

export default function EventListenerComponent() {
	const [key, setKey] = useState("")
	const [clicked, setClicked] = useState(false)
	const ref = useRef()

	useEventListener("keydown", (e) => {
		setKey(e.key)
	})

	useEventListener(
		"click",
		() => {
			setClicked(!clicked)
		},
		ref.current
	)

	return (
		<div>
			<p>Last Key: {key}</p>
			<p ref={ref} style={{cursor: "pointer"}}>
				Click Me
			</p>
			{clicked && <h1>CLICKED!</h1>}
		</div>
	)
}
