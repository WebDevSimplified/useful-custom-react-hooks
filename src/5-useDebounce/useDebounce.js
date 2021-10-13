import {useEffect} from "react"
import useTimeout from "../4-useTimeout/useTimeout"

export default function useDebounce(callback, delay, dependencies) {
	const {reset, clear} = useTimeout(callback, delay)
	useEffect(reset, [...dependencies, reset])
	useEffect(clear, [])
}
