import { useState, useCallback } from "react"

export default function useStateWithValidation(validationFunc, initialValue) {
  // FYI, anytime in React, value of state can be a "value" or a "function returning a value"
  const [state, setState] = useState(initialValue)

  // We run the validation logic against the initial state to get initialValue for isValid
  const [isValid, setIsValid] = useState(() => validationFunc(state))

  // Basically we wrap running the validation logic on the state's next value(i.e. the state just going to be set now) inside the state setter function itself
  // Thus, we abstract setting the state and validating it's value (as per a given validationFunc) in the same function
  const onChange = useCallback(
    nextState => {
      const value =
        // Since, state value can be a "value" or a "function returning a value" so we have to handle both
        typeof nextState === "function" ? nextState(state) : nextState
      setState(value)

      // Run the validation func on the next state's value and set the result to be the updated value of isValid 
      setIsValid(validationFunc(value))
    },
    [validationFunc]
  )

  return [state, onChange, isValid]
}
