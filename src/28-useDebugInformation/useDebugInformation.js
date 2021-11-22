import { useEffect, useRef } from "react"
import useRenderCount from "../27-useRenderCount/useRenderCount"

export default function useDebugInformation(componentName, props) {
  const count = useRenderCount()

  // To store which props changed in the state wrt props in the previous component render 
  const changedProps = useRef({})

  // These 2 get initialized when the hook is called i.e. when the component is re-rendered 
  // Keep track of the previousProps and renderTimestamp of the latest component render
  // "ref" are a great way to keep track of state and the only difference from useState is that they don't cause a component to re-render when they're changed
  const previousProps = useRef(props)
  const lastRenderTimestamp = useRef(Date.now())

  // We extract whatever props of the state just changed into its own object and print it out for debugging i.e. the "changedProps" obj
  const propKeys = Object.keys({ ...props, ...previousProps })
  changedProps.current = propKeys.reduce((obj, key) => {
    if (props[key] === previousProps.current[key]) return obj
    return {
      ...obj,
      [key]: { previous: previousProps.current[key], current: props[key] },
    }
  }, {})
  const info = {
    count,
    changedProps: changedProps.current,
    timeSinceLastRender: Date.now() - lastRenderTimestamp.current,
    lastRenderTimestamp: lastRenderTimestamp.current,
  }

  // Wrap code here to prevent double runs due to <React.StrictMode/> wrapper at app-level
  useEffect(() => {
    previousProps.current = props
    lastRenderTimestamp.current = Date.now()
    console.log("[debug-info]", componentName, info)
  })

  return info
}
