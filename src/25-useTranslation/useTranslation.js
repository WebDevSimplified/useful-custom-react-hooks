import { useLocalStorage } from "../8-useStorage/useStorage"
import * as translations from "./translations"

export default function useTranslation() {

  // We set the language, fallback language management in local storage
  const [language, setLanguage] = useLocalStorage("language", "en")
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
    "fallbackLanguage",
    "en"
  )


  // The translate function, consumed as "t" on component using this hook
  // This function basically retrieves the value at a given key, i.e. translates a string as per the rules set in the .json files of the languages
  const translate = key => {
    // Since sometimes we may store a translation (in the .json language file) as a nested object. 
    const keys = key.split(".")

    return (
      // Return translated word(s) for the language specified
      getNestedTranslation(language, keys) 

      // Return translated word(s) for the fallback language in case no language is specified
      ?? getNestedTranslation(fallbackLanguage, keys)

      // Else, just return this "key" string as it is
       ?? key
    )
  }

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate,
  }
}

function getNestedTranslation(language, keys) {
  return keys.reduce((obj, key) => {
    return obj?.[key]
  }, translations[language])
}
