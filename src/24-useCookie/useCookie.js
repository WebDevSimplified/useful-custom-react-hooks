import { useState, useCallback } from "react"

// 3rd party library for easy management of cookies
import Cookies from "js-cookie"

export default function useCookie(name, defaultValue) {

  // For reading value of cookie
  const [value, setValue] = useState(() => {
    const cookie = Cookies.get(name)
    if (cookie) return cookie
    Cookies.set(name, defaultValue)
    return defaultValue
  })

  // For updating value of cookie
  const updateCookie = useCallback(
    (newValue, options) => {
      Cookies.set(name, newValue, options)
      setValue(newValue)
    },
    [name]
  )

  
  // For deleting cookie
  const deleteCookie = useCallback(() => {
    Cookies.remove(name)
    setValue(null)
  }, [name])

  return [value, updateCookie, deleteCookie]
}
