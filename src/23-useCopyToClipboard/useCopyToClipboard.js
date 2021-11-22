import { useState } from "react"

// 3rd party library for copying text to clipboard
import copy from "copy-to-clipboard"

export default function useCopyToClipboard() {
  const [value, setValue] = useState()
  const [success, setSuccess] = useState()

  // Callback with options (https://www.npmjs.com/package/copy-to-clipboard) to copy text to clipboard 
  const copyToClipboard = (text, options) => {
    const result = copy(text, options)
    if (result) setValue(text)
    setSuccess(result)
  }

  return [copyToClipboard, { value, success }]
}
