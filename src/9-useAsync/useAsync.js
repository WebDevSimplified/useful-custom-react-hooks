import { useCallback, useEffect, useState } from "react"

export default function useAsync(callback, dependencies = []) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [value, setValue] = useState()

  // Simply manage 3 different states and update them as per the results of a Promise's resolution
  // Here, we define a callback
  const callbackMemoized = useCallback(() => {
    setLoading(true)
    setError(undefined)
    setValue(undefined)
    callback()
      // ON SUCCESS -> Set the data from promise as "value"  
      .then(setValue)
      // ON FAILURE -> Set the err from promise as "error"  
      .catch(setError)
      // Irresp of fail or success, loading must stop after promise has ran
      .finally(() => setLoading(false))
      // This function runs everytime some dependency changes
  }, dependencies)

  // To run the callback function each time it itself changes i.e. when its dependencies change
  useEffect(() => {
    callbackMemoized()
  }, [callbackMemoized])

  return { loading, error, value }
}
