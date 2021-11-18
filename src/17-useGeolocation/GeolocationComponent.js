import useGeolocation from "./useGeolocation"

export default function GeolocationComponent() {
  const {
    loading,
    error,
    data: { latitude, longitude },
  } 
  =
  // Can optionally pass some config options to this hook that under-the-hood will be passed to the navigation API  
  useGeolocation()

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
