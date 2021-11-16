import useAsync from "./useAsync"

export default function AsyncComponent() {
  const { loading, error, value } = useAsync(() => {
    // 3 states and their updated versions are returned while the promise is getting resolved
    return new Promise((resolve, reject) => {
      const success = false
      setTimeout(() => {
        success ? resolve("Hi") : reject("Error")
      }, 1000)
    })
  })

  return (
    <div>
      <div>Loading: {loading.toString()}</div>
      <div>{error}</div>
      <div>{value}</div>
    </div>
  )
}
