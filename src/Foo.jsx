import { signal } from '@preact/signals'
import { createContext } from 'preact'
import { useContext } from 'preact/hooks'

const ctx = createContext(signal(0))

export const FooProvider = ctx.Provider

export const useFooContext = () => useContext(ctx)
