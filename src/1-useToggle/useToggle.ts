import { useState } from 'react'

export const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState<boolean>(defaultValue)

    const toggleValue = (value?: boolean) => {
        setValue((currentValue) => (value !== undefined ? value : !currentValue))
    }

    return [value, toggleValue] as const
}
