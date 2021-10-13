import {useState} from "react"

export default function useStack(initialArr) {
	const [stack, setStack] = useState(initialArr)
	const [count, setCount] = useState(initialArr.length)

	function push(value) {
		setStack((a) => [...a, value])
		setCount((curr) => curr + 1)
	}

	function pop() {
		const popped = stack[stack.length - 1]
		setStack((curr) => [...curr.slice(0, curr.length - 1)])
		setCount((curr) => curr - 1)
		return popped
	}

	function next() {
		return stack[stack.length - 1]
	}

	function size() {
		return count
	}

	function clear() {
		setStack([])
		setCount(0)
	}

	return {stack, push, pop, next, size, clear}
}

// pop, next, size, clear
