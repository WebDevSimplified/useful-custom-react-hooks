import { useCallback, useState, useEffect } from "react"

// To use local storage to store, update info
export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage)
}

// To use session storage to store, update info
export function useSessionStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.sessionStorage)
}

// Common code being used irresp of storage type -> local or session
function useStorage(key, defaultValue, storageObject) {
  
  // Set the "value" (in this hook's state, and return it to the component's state as well) to be the value at passed "key" in storage.
  //  Else, we set it to the defaultValue (which can be a value or a func returning a val)
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof defaultValue === "function") {
      return defaultValue()
    } else {
      return defaultValue
    }
  })


  // To set a value in the storage using key-val pair
  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key)
    storageObject.setItem(key, JSON.stringify(value))
  }, [key, value, storageObject])

  // To remove value at given key 
  const remove = useCallback(() => {
    setValue(undefined)
  }, [])

  return [value, setValue, remove]
}
