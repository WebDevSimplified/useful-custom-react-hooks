import { useEffect, useRef } from "react"

export default function useRenderCount() {
  const count = useRef(1)
  // Since React.StrictMode wrapper in App.js double runs (renders) all its child components except for our useEffect() function
  // Done to help developers ensure that no weird side effects are going on, help them find bugs
  useEffect(() => count.current++)
  return count.current
}
