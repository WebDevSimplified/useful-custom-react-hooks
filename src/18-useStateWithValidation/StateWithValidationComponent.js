import useStateWithValidation from "./useStateWithValidation"

export default function StateWithValidationComponent() {
  const [username, setUsername, isValid] = useStateWithValidation
  (
    // Custom validation logic function
    name => name.length > 5,
  
    // initial state value
    ""
  )

  return (
    <>
      <div>Valid: {isValid.toString()}</div>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
    </>
  )
}
