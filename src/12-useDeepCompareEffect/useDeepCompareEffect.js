import { useEffect, useRef } from "react"
import isEqual from "lodash/fp/isEqual"

export default function useDeepCompareEffect(callback, dependencies) {
  const currentDependenciesRef = useRef()

  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies
  }

  useEffect(callback, [currentDependenciesRef.current])
}
