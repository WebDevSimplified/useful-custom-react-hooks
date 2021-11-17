import { useEffect, useState } from "react"

export default function useOnScreen(ref, rootMargin = "0px") {
  const [isVisible, setIsVisible] = useState(false)

  // Basically, we wrap the IntersectionObserver API inside a useEffect()
  // Sync our IntersectionAPI observation/unobservation with our component renders

  // IntersectionObserver docs -> https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
  useEffect(() => {
    if (ref.current == null) return

    const observer = new IntersectionObserver(
      // Since IntersectionObserver expects an array of entries but we just passed 1 reference so a single element in our array i.e. passed as arg to the callback that gets executed upon intersection
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    )
    observer.observe(ref.current)

    return () => {
      if (ref.current == null) return
      observer.unobserve(ref.current)
    }
  }, [ref.current, rootMargin])

  return isVisible
}
