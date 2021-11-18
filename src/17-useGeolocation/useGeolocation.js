import { useState, useEffect } from "react"

export default function useGeolocation(options) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [data, setData] = useState({})

  useEffect(() => {
    const successHandler = e => {
      setLoading(false)
      setError(null)
      setData(e.coords)
    }
    const errorHandler = e => {
      setError(e)
      setLoading(false)
    }

    // Simple Promise to navigationAPI in JS with a resolve (successHandler) and reject (errorHandler) functions that update our loading, data and error states accordingly
    // Here, we can even pass some config options to the navigationAPI
    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      options
    )

    // A "subscription/listener" type Promise to the navigation API with resolve, reject handlers
    const id = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options
    )

    // Clearing out the "listener" when component is unmounted
    return () => navigator.geolocation.clearWatch(id)
  }, [options])

  return { loading, error, data }
}
