import { useState, useEffect, Dispatch, SetStateAction } from 'react'

function isDefined (storedValue: string | null): boolean {
    return storedValue !== null && storedValue !== 'undefined';
}

export function useLocalStorageState<T>(
    key: string,
    initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
    const [state, setState] = useState<T>(() => {
        const storedValue = localStorage.getItem(key)
        
        return isDefined(storedValue) ? (JSON.parse(storedValue!) as T) : initialValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
};