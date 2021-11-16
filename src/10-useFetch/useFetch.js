import useAsync from "../9-useAsync/useAsync"


// To set some default options for our fetchAPI call since most contentType is always of type JSON
const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
}

// Simply sets the callback to the useAsync() hook to be a "fetchAPI" call along with some dependencies
export default function useFetch(url, options = {}, dependencies = []) {
  return useAsync(() => {
    return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
  }, dependencies)
}
