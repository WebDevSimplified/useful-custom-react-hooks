import {useState} from "react"
import useStack from "./useStack"

export default function StackComponent() {
	const {stack, push, pop, next, size, clear} = useStack([])
	const [formData, setFormData] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		push(formData)
		setFormData("")
	}
	return (
		<div>
			<h3>The Stack</h3>
			<form onSubmit={handleSubmit}>
				<input type="text" value={formData} onChange={(e) => setFormData(e.target.value)} />
				<button type="submit">Push to Stack</button>
			</form>
			<button onClick={(e) => pop()}>Pop off stack</button>
			<button onClick={(e) => clear()}>Clear Stack</button>
			<h4>
				Size: <span>{size()}</span>
			</h4>
			<h4>
				Next: <span>{next()}</span>
			</h4>
			<table style={{border: "1px solid black", minWidth: "250px", minHeight: "30px"}}>
				{stack.reverse().map((item, idx) => {
					return (
						<tr key={idx} style={{border: "1px solid black"}}>
							<td style={{padding: "8px"}}>{idx}</td>
							<td style={{border: "1px solid black", padding: "6px 12px", width: "200px"}}>{item}</td>
						</tr>
					)
				})}
			</table>
		</div>
	)
}
