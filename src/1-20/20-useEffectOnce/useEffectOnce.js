import { useEffect } from "react"

export default function useEffectOnce(cb) {
  useEffect(cb, [])
}
