import {useState} from "react"
import useDebounce from "./useDebounce"

export default function DebounceComponent() {
	const [count, setCount] = useState(10)
	useDebounce(() => alert(count), 1250, [count])

	return (
		<div>
			<div>{count}</div>
			<button onClick={() => setCount((c) => c + 1)}>Increment</button>
		</div>
	)
}
