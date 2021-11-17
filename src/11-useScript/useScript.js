  import useAsync from "../9-useAsync/useAsync"

  export default function useScript(url) {

    // Fetching the 3rd party script from CDN is the callback function passed to useAsync() hook
    // We set the CDN url as src to a script tag and if this script is loaded successfully, we append it to the body 
      return useAsync(() => {
      const script = document.createElement("script")
      script.src = url
      script.async = true

      return new Promise((resolve, reject) => {
        script.addEventListener("load", resolve)
        script.addEventListener("error", reject)
        document.body.appendChild(script)
      })
    }, [url])
  }
