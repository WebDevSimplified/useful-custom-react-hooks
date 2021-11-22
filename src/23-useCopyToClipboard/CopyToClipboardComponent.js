import useCopyToClipboard from "./useCopyToClipboard"

export default function CopyToClipboardComponent() {
  // Returns a func to copy text to clipboard and a "success" obj that tells about the status of the copy (successful or not) 
  const [copyToClipboard, { success }] = useCopyToClipboard()

  return (
    <>
    {/* Pass the text you wish to copy to clipboard to the func */}
      <button onClick={() => copyToClipboard("Text to be copied in clipboard")}>
        {/* Render something that indicates that text was copied based on the info the "success" obj tells us */}
        {success ? "Copied" : "Copy Text"}
      </button>
      <input type="text" />
    </>
  )
}
