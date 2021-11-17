import { useEffect, useRef } from "react"
import isEqual from "lodash/fp/isEqual"

export default function useDeepCompareEffect(callback, dependencies) {  
  const currentDependenciesRef = useRef()

  // Update the currentDependencies only if there is an actual different in dependencies passed and currentDependencies
  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies
  }

  // Run callback iff currentDependencies were actually changed
  useEffect(callback, [currentDependenciesRef.current])
}
