import { useRef } from "react"
import useGeolocation from "./useGeolocation"

export default function GeolocationComponent() {
  const ref = useRef()
  const {
    loading,
    error,
    data: { latitude, longitude },
  } = useGeolocation(ref)

  return (
    <>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error?.message}</div>
      <div>
        {latitude} x {longitude}
      </div>
    </>
  )
}
