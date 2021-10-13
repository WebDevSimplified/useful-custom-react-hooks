import React from "react"
import useToggle from "./useToggle"

export default function ToggleComponent() {
	const [value, toggleValue] = useToggle(false)

	return (
		<div>
			<h1>{value === true ? "True!" : "False!"}</h1>
			<button onClick={toggleValue}>TOGGLE</button>
			<button onClick={() => toggleValue(true)}>TRUE</button>
			<button onClick={() => toggleValue(false)}>FALSE</button>
		</div>
	)
}
