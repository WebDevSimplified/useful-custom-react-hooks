import useMediaQuery from "./useMediaQuery"

export default function MediaQueryComponent() {
  // Boolean i.e. true when media query is satisfied
  const isLarge = useMediaQuery("(min-width: 200px)")

  return <div>Large: {isLarge.toString()}</div>
}
